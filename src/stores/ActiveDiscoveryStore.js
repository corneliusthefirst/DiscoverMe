import storage from './Storage';
import {observable, action} from 'mobx';
import {reject, find, findIndex, sortBy} from 'lodash';
import moment from 'moment';

export default class ActiveStore {
  constructor() {}

  createactive(phone) {
    //the phone is been used to get the user story which got his info from allstories
    //here people are classified in terms of closest location from you but those with discover true stays at the top.
    return {
      phone: phone,
      location: '',
      distance: '',
      updated_at: moment().format(),
      discover: false,
    };
  }

  @observable activedatastructure = {
    //would have this structure onclick would form a {received object} and send a discovery request to the opponent receivestore and set discover to true
    //phone number would be used to get his stories,this active users data would be form from user object before sending here while his stories goes to allstories
    phone: '',
    location: '',
    distance: '',
    updated_at: moment().format(),
    discover: false,
  };

  @observable active = [];

  saveKey = {
    key: 'active',
    data: [],
  };

  removeActiveDiscover(phone_) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((active) => {
        let PreviousDiscover = find(active, {phone: phone_});
        active = reject(active, {phone: phone_});
        this.saveKey.data = active;
        storage.save(this.saveKey).then(() => {
          this.active = this.saveKey.data;
          resolve(PreviousDiscover);
        });
      });
    });
  }

  @action fetchAllActive() {
    return new Promise((resolve, rejectpromise) => {
      if (this.active.length === 0) {
        this.readFromStore().then((activeUsers) => {
          if (activeUsers.length === 0) {
            resolve(null);
          } else {
            resolve(activeUsers);
          }
        });
      }
    });
  }

  @action updateDiscoverState(newDiscover, inform) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((activeUsers) => {
        let index = findIndex(activeUsers, {phone: newDiscover.phone});
        let Previousactive = activeUsers[index];
        activeUsers[index].discover = newDiscover.discover;
        if (inform) {
          activeUsers[index].discover_updated = true;
          activeUsers[index].updated = true;
        }
        activeUsers[index].update_date = moment().format();
        this.saveKey.data = sortBy(activeUsers, 'update_date');
        storage.save(this.saveKey).then(() => {
          this.active = this.saveKey.data;
          resolve(Previousactive);
        });
      });
    });
  }

  readFromStore() {
    return new Promise((resolve, rejectpromise) => {
      storage
        .load({
          key: 'active',
          autoSync: true,
        })
        .then((activeUsers) => {
          resolve(activeUsers);
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}
