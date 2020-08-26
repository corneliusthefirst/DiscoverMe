import storage from './Storage';
import {observable, action} from 'mobx';
import {reject, filter, find, findIndex, sortBy} from 'lodash';
import moment from 'moment';

export default class ReceivedStore {
  constructor() {}

  createreceived(phone) {
    return {
      receiver_phone: '0666406835', //this is the phone of the person to whom the request was send would be used on the sender side
      updated_at: moment().format(),
      accept: false,
      refuse: false,
      senderInfo: {
        phone: phone,
        host: '',
        nickname: '',
        picture: {thumbnail: '', large: ''},
      }, //this is the personne that clicked the discover request this would be used on the receiver side
    };
  }

  @observable receivedatastructure = {
    //this  is the structure received by the invitee,onclick would accept or refuse would either create a discovery or not between both and send it to the top of discovery array
    //in case of refuse or accept the modified object is send back  to the sender received store with refuse active or accept active(no send data store)
    receiver_phone: '',
    updated_at: moment().format(),
    accept: false,
    refuse: false,
    senderInfo: {
      phone: '',
      host: '',
      nickname: '',
      picture: {thumbnail: '', large: ''},
    },
  };

  @observable received = [];

  saveKey = {
    key: 'received',
    data: [],
  };

  removeReceivedDiscover(phone) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((received) => {
        let PreviousDiscover = find(received, {receiver_phone: phone});
        received = reject(received, {receiver_phone: phone});
        this.saveKey.data = received;
        storage.save(this.saveKey).then(() => {
          this.received = this.saveKey.data;
          resolve(PreviousDiscover);
        });
      });
    });
  }
  @action fetchReceived(phone) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((received) => {
        let result = filter(received, {receiver_phone: phone});
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  }

  @action fetchAllReceived() {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((received) => {
        if (received) {
          resolve(received);
        } else {
          resolve(null);
        }
      });
    });
  }

  @action updateAcceptState(receivedInvite, inform) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((received) => {
        let index = findIndex(received, {receiver_phone: receivedInvite.phone});
        let Previousstory = received[index];
        received[index].accept = receivedInvite.accept;
        if (inform) {
          received[index].accept_updated = true;
          received[index].updated = true;
        }
        received[index].update_date = moment().format();
        this.saveKey.data = sortBy(received, 'update_date');
        storage.save(this.saveKey).then(() => {
          this.received = this.saveKey.data;
          resolve(Previousstory);
        });
      });
    });
  }

  @action updateRefuseState(receivedInvite, inform) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((received) => {
        let index = findIndex(received, {receiver_phone: receivedInvite.phone});
        let Previousstory = received[index];
        received[index].refuse = receivedInvite.refuse;
        if (inform) {
          received[index].accept_updated = true;
          received[index].updated = true;
        }
        received[index].update_date = moment().format();
        this.saveKey.data = sortBy(received, 'update_date');
        storage.save(this.saveKey).then(() => {
          this.received = this.saveKey.data;
          resolve(Previousstory);
        });
      });
    });
  }

  readFromStore() {
    return new Promise((resolve, rejectpromise) => {
      storage
        .load({
          key: 'received',
          autoSync: true,
        })
        .then((received) => {
          resolve(received);
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}
