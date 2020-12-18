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
  @observable currentTheme = 'dark';

  saveKey = {
    key: 'currentMode',
    data: {},
  };

  @action setMode(options) {
    return new Promise((resolve, reject) => {
      this.saveKey.data.currentMode = options.mode;
      this.saveKey.data.currentTheme = options.theme;

      storage.save(this.saveKey).then(() => {
        this.currentMode = options.mode;
        this.currentTheme = options.theme;
        resolve();
      });
    });
  }

  getCurrentMode() {
    return new Promise((resolve, reject) => {
      storage
        .load({key: 'currentMode', autoSync: true})
        .then((screenmode) => {
          resolve(screenmode);
        })
        .catch((e) => {
          this.setMode(this.currentMode);
          this.setTheme(this.currentTheme);
          resolve({
            currentMode: this.currentMode,
            currentTheme: this.currentTheme,
          });
        });
    });
  }
}
