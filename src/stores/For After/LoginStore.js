import { observable, action, extendObservable, autorun, computed } from "mobx";
import UserSevices from "../services/userHttpServices";
import storage from "./Storage";

export default class LoginStore {
  constructor() {
    this.getStatusOptions().then((options)=>{this.statusOptions = options });
    this.loadFromStore().then(user => {
      console.warn("user is",user)
      this.user = user;
    })
      /*storage.remove({
      key: 'loginStore'
      });*/
  }

  @observable phonenumber = "";
  @observable resetCode = "2525256";

  @observable user = {
    phone: "",
    name: "",
    status: "",
    age: "",
    nickname: "",
    email: "",
    created_at: "",
    updated_at: "",
    password:"",
    profile:"",
    profile_ext:"",
    country_code:""
  }; 

  loadFromStore() {
    //console.warn("iuygtfrdesz")
    return new Promise((resolve, reject) => {
        this.getUser().then(user => {
            resolve(user)
        }).catch((error => {
            resolve({})
        }))
    })
}

  @action getUser() {
    return new Promise((resolve, reject) => {
      if (this.user.phone == "" || this.user.password == "") {
        storage.load({
            key: "loginStore",
            autoSync: true
          })
          .then(data => {
            this.user = {
              phone: data.phone,
              name: data.name,
              nickname: data.nickname,
              status: data.status,
              age: data.age,
              created_at: data.created_at,
              email: data.email,
              updated_at: data.updated_at,
              password: data.password,
              profile: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/01/Profile-Pic-Images-4-300x300.jpg", //data.profile,
              profile_ext: data.profile_ext,
              country_code:data.country_code
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

  @action async setUser(newUser) {
    return new Promise((resolve, reject) => {
      this.user = {
        phone: newUser.phone,
        name: newUser.name,
        status: newUser.status,
        age: newUser.age,
        nickname: newUser.nickname,
        email: newUser.email,
        created_at: newUser.created_at,
        updated_at: newUser.updated_at,
        password: newUser.password,
        profile: newUser.profile,
        profile_ext: newUser.profile_ext,
        country_code:newUser.country_code
      };
      storage
        .save({
          key: "loginStore",
          data: this.user
        })
        .then(() => {
          resolve(this.user);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action updateName(newName) {
    console.warn("here1",newName)
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          console.warn("here2",data)
         // UserSevices.changeNickname(data.phone, data.password, newName)
           // .then(() => {
              console.warn("here3",newName)
              data.nickname = newName;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
           // })
           // .catch(error => {
           //   reject(error);
          //  });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action updateStatus(newStatus) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
        //  UserSevices.changeStatus(data.phone, data.password, newStatus)
          //  .then(() => {
              data.status = newStatus;
              storage.save({
                  key: "loginStore",
                  data: data
                }).then(() => {
                  this.user = data;
                  resolve();
                });
           // })
            //.catch(error => {
          //    reject(error);
           // });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  @action updateProfile(newProfile) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          UserSevices.changeProfile(data.phone, data.password, newProfile)
            .then(() => {
              data.profile = newProfile;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action updateProfileExt(newProfileExt) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          UserSevices.changeProfileExt(data.phone, data.password, newProfileExt)
            .then(() => {
              data.profile_ext = newProfileExt;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action updatePassword(newPassword) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          UserSevices.changePassword(data.phone, data.password, newPassword)
            .then(() => {
              data.password = newPassword;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action updateEmail(newEmail) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          UserSevices.changePassword(data.phone, data.email, newEmail)
            .then(() => {
              data.email = newEmail;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action updateAge(newAge) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          UserSevices.changeAge(data.phone, data.age, newAge)
            .then(() => {
              data.age = newAge;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action async updateAge(newAge) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "loginStore",
          autoSync: true
        })
        .then(data => {
          UserSevices.changeAge(data.phone, data.age, newAge)
            .then(() => {
              data.age = newAge;
              storage
                .save({
                  key: "loginStore",
                  data: data
                })
                .then(() => {
                  this.user = data;
                  resolve();
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }


 @observable statusOptions = [{id:"1",name:"available",state:false},{id:"2",name:"occupied",state:false},{id:"3",name:"At school",state:false},{id:"4",name:"At work",state:false},{id:"5",name:"At cinema",state:false},{id:"6",name:"At metting",state:false},{id:"7",name:"Sleeping",state:false},{id:"8",name:"Urgent calls only",state:false},{id:"9",name:"Battery very low",state:false}]
 @action  setStatusOptions(newArray) {
    return new Promise((resolve, reject) => {
      //console.warn("here1",newArray)
      storage
        .save({
          key: "statusOptions",
          data: newArray
        })
        .then(() => {
          this.statusOptions = newArray;
          resolve(newArray);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  @action async updateStatusOptions(newArray) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "statusOptions",
          autoSync: true
        })
        .then(data => {
              storage
                .save({
                  key: "statusOptions",
                  data: newArray
                })
                .then(() => {
                  this.statusOptions = data;
                  resolve();
                });
        })
        .catch(error => {
          reject(error);
        });
    });
  }


  @action getStatusOptions() {
     return new Promise((resolve, reject) => {
     
        storage
          .load({
            key: "statusOptions",
            autoSync: true
          })
          .then(data => {
                 resolve(data);
          })
          .catch(error => {
            this.setStatusOptions(this.statusOptions).then((newArray)=>{ 
              resolve(newArray);
            })
            
          });
  })
}



}
