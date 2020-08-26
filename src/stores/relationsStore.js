import storage from './Storage';
import {observable, action} from 'mobx';
import {reject, find} from 'lodash';
import moment from 'moment';

export default class RelationsStore {
  constructor() {}

  createrelation(phone, id) {
    return {
      id: id,
      relation_host: '',
      created_at: moment().format(),
      creator_phone: '00330666406835',
      participants: ['00330666406835', phone],
      latest_message: 'what about going to the market',
    };
  }

  @observable relationData = {
    id: '',
    relation_host: '',
    created_at: moment().format(),
    creator_phone: '00330666406835',
    participants: ['0666406835'],
    latest_message: 'what about going to the market',
  };

  @observable relations = [];

  saveKey = {
    key: 'relations',
    data: [],
  };

  removeRelation(id_) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((relations) => {
        let PreviousRelation = find(relations, {id: id_});
        relations = reject(relations, {id: id_});
        this.saveKey.data = relations;
        storage.save(this.saveKey).then(() => {
          this.relations = this.saveKey.data;
          resolve(PreviousRelation);
        });
      });
    });
  }

  //you can only fetch here the more you would request the more would be supplied by the server to this stores
  @action fetchrelations() {
    return new Promise((resolve, rejectpromise) => {
      if (this.relations.length === 0) {
        this.readFromStore().then((relations) => {
          if (relations.length === 0) {
            resolve(null);
          } else {
            this.relations = relations;
            resolve(this.relations);
          }
        });
      }
    });
  }

  readFromStore() {
    return new Promise((resolve, rejectpromise) => {
      storage
        .load({
          key: 'relations',
          autoSync: true,
        })
        .then((relations) => {
          resolve(relations);
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}
