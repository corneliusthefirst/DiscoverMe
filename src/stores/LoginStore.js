import {observable, action} from 'mobx';
//import UserSevices from '../services/userHttpServices';
import storage from './Storage';
import stores from '../stores';

export default class LoginStore {
  constructor() {
    /* this.loadFromStore().then((user) => {
      console.warn('user is', user);
      this.user = user;
    });*/
    /*storage.remove({
      key: 'loginStore'
      });*/
  }

  @observable phonenumber = '';
  @observable resetCode = '2525256';

  @observable user = {
    gender: 'male',
    name: {title: 'mr', first: 'denny', last: 'schmid'},
    location: {
      street: 'heideweg 52',
      city: 'obernkirchen',
      state: 'nordrhein-westfalen',
      postcode: 41276,
      coordinates: {latitude: '-59.9944', longitude: '129.3157'},
      timezone: {offset: '-3:30', description: 'Newfoundland'},
    },
    email: 'denny.schmid@example.com',
    login: {
      uuid: 'b4650ce5-8422-4c5d-aa95-fb548b7867db',
      username: 'heavysnake748',
      password: 'hahaha',
      salt: '8TtqHTCF',
      md5: '0d9d224c6f823d0ddd64257b4aa7ad3c',
      sha1: '1f2f3862f1f74c5d57ba7c5a95b27be312253f65',
      sha256:
        'baea6b6678273a09e6e179abd9c9d9e804fa54b31395413ac0f8f56cd987cbd3',
    },
    dob: {date: '2003-03-22T19:17:16Z', age: 22},
    registered: {date: '2006-05-29T18:12:18Z', age: 12},
    phone: '+330666406835',
    cell: '0175-9847909',
    id: {name: '', value: null},
    picture: {
      large: 'https://randomuser.me/api/portraits/men/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/21.jpg',
    },
    nat: 'CM',
    updated_at: '2016-03-22T19:17:16Z',
  };

  loadFromStore() {
    //console.warn("iuygtfrdesz")
    return new Promise((resolve, reject) => {
      this.getUser()
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          resolve({});
        });
    });
  }

  @action getUser() {
    return new Promise((resolve, reject) => {
      if (this.user.phone === '' || this.user.password === '') {
        storage
          .load({
            key: 'loginStore',
            autoSync: true,
          })
          .then((data) => {
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
              profile:
                'https://www.whatsappprofiledpimages.com/wp-content/uploads/2019/01/Profile-Pic-Images-4-300x300.jpg', //data.profile,
              profile_ext: data.profile_ext,
              country_code: data.country_code,
            };
            resolve(this.user);
          })
          .catch((error) => {
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
        country_code: newUser.country_code,
      };
      storage
        .save({
          key: 'loginStore',
          data: this.user,
        })
        .then(() => {
          resolve(this.user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  @action updateName(newName) {
    console.warn('here1', newName);
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          console.warn('here2', data);
          /*UserSevices.changeNickname(data.phone, data.password, newName)
           .then(() => {*/
          console.warn('here3', newName);
          data.nickname = newName;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              stores.MystoriesStore.updateStoryFromUser(data).then(() => {});
              resolve();
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
    /*.catch((error) => {
          reject(error);
        });
    });*/
  }

  @action updateStatus(newStatus) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          /*  UserSevices.changeStatus(data.phone, data.password, newStatus)
            .then(() => {*/
          data.status = newStatus;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              resolve();
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
    /*.catch((error) => {
          reject(error);
        });
    });*/
  }

  @action updateProfile(newProfile) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          /* UserSevices.changeProfile(data.phone, data.password, newProfile)
            .then(() => {*/
          data.profile = newProfile;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              stores.MystoriesStore.updateStoryFromUser(data).then(() => {});
              resolve();
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
    /* .catch((error) => {
          reject(error);
        });
    });*/
  }

  @action updateProfileExt(newProfileExt) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          /*UserSevices.changeProfileExt(data.phone, data.password, newProfileExt)
            .then(() => {*/
          data.profile_ext = newProfileExt;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              resolve();
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
    /* .catch((error) => {
          reject(error);
        });
    });*/
  }

  @action updatePassword(newPassword) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          /*UserSevices.changePassword(data.phone, data.password, newPassword)
            .then(() => {*/
          data.password = newPassword;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              resolve();
            });
        })
        .catch((error) => {
          reject(error);
        });
    });
    /*.catch((error) => {
          reject(error);
        });
    });*/
  }

  @action updateEmail(newEmail) {
    return new Promise((resolve, rejectpromise) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          /*UserSevices.changePassword(data.phone, data.email, newEmail)
           .then(() => {*/
          data.email = newEmail;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              resolve();
            });
        })
        .catch((error) => {
          rejectpromise(error);
        });
    });
    /*.catch((error) => {
      rejectpromise(error);
    });
     });*/
  }

  @action updateAge(newAge) {
    return new Promise((resolve, rejectpromise) => {
      storage
        .load({
          key: 'loginStore',
          autoSync: true,
        })
        .then((data) => {
          /* UserSevices.changeAge(data.phone, data.age, newAge)
            .then(() => {*/
          data.age = newAge;
          storage
            .save({
              key: 'loginStore',
              data: data,
            })
            .then(() => {
              this.user = data;
              stores.MystoriesStore.updateStoryFromUser(data).then(() => {});
              resolve();
            });
        })
        .catch((error) => {
          rejectpromise(error);
        });
    });
    /*.catch((error) => {
      rejectpromise(error);
    });
     });*/
  }
}


/*
  @observable user = {
    phone: '+330666406835',
    name: 'Ndeffo Cornelius',
    status: '',
    age: '22',
    nickname: 'theFirst',
    email: 'ndeffo.jugal98@gmail.com',
    created_at: '',
    updated_at: '',
    password: '',
    profile: '',
    profile_ext: '',
    country_code: 'FR',
    location: '',
  };*/