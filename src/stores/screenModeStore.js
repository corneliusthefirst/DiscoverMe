import storage from './Storage';
import {observable, action} from 'mobx';
//import ScreenMode from '../components/screenMode';

export default class CurrentScreenMode {
  constructor() {
    /*this.getCurrentMode().then((mode) => {
      this.currentMode = mode;
      console.warn(mode);
      //ScreenMode.changeMode(mode);
    });*/
  }

  @observable currentMode = 'whiteMode';
  saveKey = {
    key: 'currentMode',
    data: '',
  };

  @action setMode(newMode) {
    return new Promise((resolve, reject) => {
      this.saveKey.data = newMode;
      storage.save(this.saveKey).then(() => {
        this.currentMode = this.saveKey.data;
        resolve();
      });
    });
  }

  getCurrentMode() {
    return new Promise((resolve, reject) => {
      storage
        .load({key: 'currentMode', autoSync: true})
        .then((mode) => {
          resolve(mode);
        })
        .catch((error) => {
          resolve(this.currentMode);
        });
    });
  }
}
