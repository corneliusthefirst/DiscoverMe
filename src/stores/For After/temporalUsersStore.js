import storage from "./TempUsersStorage";
import { uniqBy, find, forEach } from "lodash"
import userHttpServices from "../services/userHttpServices"
export default class TemporalUsersStore {
    constructor() {
        this.loadFromStore().then(users => {
            this.Users = users;
        })
        //storage.remove(this.saveKey)
    }
    Users = []
    saveKey = {
        key: "TemporalUsersStore",
        data: []
    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then(users => {
                users.push(user);
                users = uniqBy(users, "phone");
                this.saveKey.data = users;
                storage.save(this.saveKey).then(() => {
                    this.setPropterties(users)
                    resolve(users)
                })
            }).catch(() => {
                this.saveKey.data = [user];
                storage.save(this.saveKey).then(() => {
                    this.setPropterties(this.saveKey.data)
                    resolve()
                })
            })
        })
    }

    addUsers(newUsers) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then(users => {
                users.concat(newUsers)
                users = uniqBy(users, "phone");
                this.saveKey.data = users;
                storage.save(this.saveKey).then(() => {
                    this.setPropterties(this.saveKey.data)
                    resolve()
                })
            })
        }).catch((error) => {
            this.saveKey.data = newUsers;
            storage.save(this.saveKey).then(() => {
                this.setPropterties(this.saveKey);
                resolve()
            })
        })
    }
    getUser(phone) {
        return new Promise((resolve, reject) => {
            if (this.Users.length !== 0) {
                let user = find(this.Users, { phone: phone });
                if (user) {
                    resolve(user);
                } else {
                    userHttpServices.checkUser(phone).then(profile => {
                        if (profile.message) {
                            reject(profile.message)
                        } else {
                            this.Users.push(profile);
                            this.saveKey.data = this.Users;
                            storage.save(this.saveKey).then(() => {
                                this.setPropterties(this.saveKey.data);
                                resolve(profile)
                            })
                        }
                    })
                }
            } else { 
                this.readFromStore().then(users => {
                    console.warn(users, "user from get user")
                    let user = find(users, { phone: phone });
                    if (user) {
                        this.setPropterties(users);
                        resolve(user)
                    }
                    else {
                        userHttpServices.checkUser(phone).then(profile => {
                            users.push(profile);
                            this.saveKey.data = users;
                            storage.save(this.saveKey).then(() => {
                                this.setPropterties(this.saveKey.data);
                                resolve(profile)
                            })
                        })
                    }

                }).catch((error) => {
                    userHttpServices.checkUser(phone).then(profile => {
                        this.saveKey.data = [profile];
                        storage.save(this.saveKey).then(() => {
                            this.setPropterties(this.saveKey.data);
                            resolve(profile)
                        })
                    })
                })
            }
        })
    }
    getUsers(phones) {
        return new Promise((resolve, reject) => {
            let result = []
            let lacking = []
            let i = 0
            forEach(phones, (phone) => {
                if (this.Users.length !== 0) {
                    user = find(this.Users, { phone: phone });
                    if (user) {
                        result.push(user)
                        i++
                    } else {
                        lacking.push(phone);
                        i++;
                    }
                } else {
                    this.readFromStore().then(users => {
                        user = find(users, { phone: phone });
                        if (user) {
                            result.push(user)
                            i++;
                        } else {
                            lacking.push(phone);
                            i++;
                        }
                    }).catch(() => {
                        lacking.push(phone)
                        i++;
                    })
                }
                if (i === phones.length - 1) {
                    if (this.lacking.length !== 0) {
                        userHttpServices.checkUsers(lacking).then(newUsers => {
                            this.readFromStore().then(users => {
                                users.concat(newUsers);
                                this.saveKey.data = users;
                                storage.save(this.saveKey).then(() => {
                                    this.setPropterties(this.saveKey.data);
                                    resolve(resolve.concat(newUsers));
                                })
                            })
                        })
                    }
                }
            })
        })
    }
    setPropterties(NewUsers) {
        this.Users = NewUsers;
    }
    loadFromStore() {
        //console.warn("iuygtfrdesz")
        return new Promise((resolve, reject) => {
            this.readFromStore().then(users => {
                resolve(users)
            }).catch((error => {
                resolve([])
            }))
        })
    }
    readFromStore() {
        return new Promise((resolve, reject) => {
            storage.load({ key: 'TemporalUsersStore', syncInBackground: true }).then(Users => {
                resolve(Users)
            }).catch(() => {
                resolve([])
            })
        })
    }
}
