/* eslint-disable prettier/prettier */
import storage from './Storage';
import {observable, action} from 'mobx';

export default class CurrentScreenLanguage {
  constructor() {}

  @observable currentlanguage = 'English';

  saveKey = {
    key: 'currentLanguage',
    data: '',
  };

  @action setLanguage(newlanguage) {
    return new Promise((resolve, reject) => {
      this.saveKey.data = newlanguage;
      storage.save(this.saveKey).then(() => {
        this.currentlanguage = this.saveKey.data;
        resolve();
      });
    });
  }


  getCurrentLanguage() {
    return new Promise((resolve, reject) => {
      storage
        .load({key: 'currentLanguage', autoSync: true})
        .then((language) => {
          resolve(language);
        })
        .catch((error) => {
          resolve(this.currentlanguage);
        });
    });
  }
}
