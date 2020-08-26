import { observable, action, extendObservable, autorun, computed } from "mobx";
import UserSevices from "../services/userHttpServices";
import storage from "./Storage";

export default class TempLoginStore {
  constructor() {
      /*storage.remove({
      key: 'temploginStore'
      });*/
  }
  @observable phonenumber = "";
  @observable resetCode = "";
  @observable confirmCode = {};
  @observable counter = 0;

  @observable user = {
    phone: "",
    name: "",
    status: "",
    nickname: "",
    birth_date: "",
    created_at: "",
    email: "",
    updated_at: "",
    password: "",
    profile: "",
    profile_ext: ""
  };

  //Please check this commented code

  @action deleteData(userKey) {
    return new Promise((resolve, reject) => {
      storage.remove({
        key: userKey
      });
      resolve();
    }).catch(error => {
      reject(error);
    });
  }

  @action saveData(data, key) {
    return new Promise((resolve, reject) => {
      storage.save({
        key: key,
        data: data
      });

      resolve();
    }).catch(error => {
      reject(error);
    });
  }

  @action loadSaveData(key) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: key,
          autoSync: true
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action getUser() {
    return new Promise((resolve, reject) => {
      if (this.user.phone == "" || this.user.password == "") {
        storage
          .load({
            key: "temploginStore",
            autoSync: true
          })
          .then(data => {
            this.user = {
              phone: data.phone,
              name: data.name,
              status: data.status,
              nickname: data.nickname,
              birth_date: data.birth_date,
              created_at: data.created_at,
              email: data.email,
              updated_at: data.updated_at,
              password: data.password,
              profile: data.profile,
              profile_ext: data.profile_ext
            };
            resolve(this.user);
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(this.user);
      }
    });
  }

  @action setUser(newUser) {
    return new Promise((resolve, reject) => {
      this.user = {
        phone: newUser.phone,
        name: newUser.name,
        status: newUser.status,
        birth_date: newUser.birth_date,
        password: newUser.password,
        nickname: newUser.nickname,
        email: newUser.email,
        created_at: newUser.created_at,
        updated_at: newUser.updated_at,
        profile: newUser.profile,
        profile_ext: newUser.profile_ext
      };
      storage.save({
        key: "temploginStore",
        data: this.user
      });
      resolve();
    });
  }
}
