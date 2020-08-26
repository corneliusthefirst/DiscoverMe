import storage from './Storage';
import {observable, action} from 'mobx';
import {uniqBy, reject, find, sortBy} from 'lodash';
import moment from 'moment';

export default class DiscoveriesStore {
  constructor() {}

  creatediscovery(phone, id) {
    return {
      id: id,
      relation_host: '',
      created_at: moment().format(),
      creator_phone: '00330666406835',
      participants: ['00330666406835', phone],
      latest_message: 'what about going to the market',
    };
  }

  @observable discoveryData = {
    //same structure as relation just that it of different scopes
    id: '',
    relation_host: '',
    created_at: moment().format(),
    creator_phone: '00330666406835',
    participants: ['0666406835'],
    latest_message: 'what about going to the market',
  };

  @observable discoveries = [];

  saveKey = {
    key: 'alldiscoveries',
    data: [],
  };

  removeDiscovery(id_) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((discoveries) => {
        let PreviousDiscovery = find(discoveries, {id: id_});
        discoveries = reject(discoveries, {id: id_});
        this.saveKey.data = discoveries;
        storage.save(this.saveKey).then(() => {
          this.discoveries = this.saveKey.data;
          resolve(PreviousDiscovery);
        });
      });
    });
  }

  //you can only fetch here the more you would request the more would be supplied by the server to this stores
  @action fetchdiscoveries() {
    return new Promise((resolve, rejectpromise) => {
      if (this.discoveries.length === 0) {
        this.readFromStore().then((discoveries) => {
          if (discoveries.length === 0) {
            resolve(null);
          } else {
            this.discoveries = discoveries;
            resolve(this.discoveries);
          }
        });
      }
    });
  }

  readFromStore() {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'alldiscoveries',
          autoSync: true,
        })
        .then((discoveries) => {
          resolve(discoveries);
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}
