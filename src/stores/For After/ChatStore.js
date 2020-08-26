import storage from './Storage';
import {reject, findIndex, uniqBy} from 'lodash';
import autobind from 'autobind-decorator';
import moment from 'moment';
import {observable} from 'mobx';
class ChatStore {
  constructor() {
    //storage.remove({key:this.key})
    this.initializeStore();
    this.saveInterval = setInterval(() => {
      this.previousModif !== this.currentModif && this.saver();
    }, this.timer);
  }
  previousModif = moment().format();
  currentModif = moment().format();
  timer = 2000;
  saveInterval = null;
  commenting = false;
  addToStore(data) {
    this.setProperties(data);
    this.currentModif = moment().format();
  }
  saver() {
    console.warn('saving current messages state');
    this.saveKey.data = this.messages;
    storage.save(this.saveKey).then(() => {
      this.previousModif = this.currentModif;
    });
  }
  loadLatestMessage(roomID, key) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((messages) => {
        resolve(messages[roomID] ? messages[roomID][0] : []);
      });
    });
  }
  addMessageToStore(roomID, newMessage) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((olddata) => {
        this.insetDateSeparator(
          roomID,
          this.commenting ? this.messages : olddata,
          newMessage,
        ).then((data) => {
          data[roomID]
            ? data[roomID].unshift(newMessage)
            : (data[roomID] = [newMessage]);
          this.addToStore(data);
          resolve(data);
        });
      });
    });
  }
  setMessageDimessions(roomID, id, dim) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((messages) => {
        let index = findIndex(messages[roomID], {id: id});
        messages[roomID][index].dimenssions = dim;
        this.addToStore(messages);
        resolve(messages);
      });
    });
  }
  insetDateSeparator(roomID, messages, newMessage) {
    return new Promise((resolve, reject) => {
      let separator = {
        ...newMessage,
        id: moment(newMessage.created_at).format('YYYY/MM/DD'),
        type: 'date_separator',
      };
      index = findIndex(messages[roomID], {id: separator.id});
      let result = messages;
      result[roomID] =
        index && index >= 0
          ? messages[roomID]
          : [separator].concat(messages[roomID] || []);
      resolve(result);
    });
  }
  addNewMessage(roomID, newMessage, newKey, type, sent, newing) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((olddata) => {
        this.insetDateSeparator(roomID, olddata, newMessage).then((data) => {
          let index = findIndex(data[roomID], {id: newMessage.id});
          if (index >= 0) {
            data[roomID][index] = {
              ...data[roomID][index],
              received: newMessage.received,
              key: newKey,
              sent: sent,
              type: type,
            };
            this.addToStore(data);
            resolve(data);
          } else {
            newMessage = {...newMessage, key: newKey};
            data[roomID]
              ? data[roomID].unshift(newMessage)
              : (data[roomID] = [newMessage]);
            this.addToStore(data);
            resolve(data);
          }
        });
      });
    });
  }
  addAndReadFromStore(value) {
    return new Promise((resolve, rejec) => {
      let tempKey = {...this.saveKey, key: 'temp', data: value};
      storage.save(tempKey).then(() => {
        tempKey = {...this.storeAccessKey, key: 'temp'};
        storage.load(tempKey).then((data) => {
          resolve(data);
        });
      });
    });
  }
  removeMessage(roomID, messageID) {
    return new Promise((resolve, reje) => {
      this.readFromStore().then((data) => {
        let index = findIndex(data, {id: messageID});
        if (index <= 0 && data[roomID][index + 1].type === 'date_separator') {
          let otherID = data[roomID][index + 1].id;
          data[roomID] = reject(data[roomID], {id: messageID});
          data[roomID] = reject(data[roomID], {id: otherID});
          this.addToStore(data);
          this.setProperties(data);
          resolve(data);
        } else {
          data[roomID] = reject(data[roomID], {id: messageID});
          this.addToStore(data);
          this.setProperties(data);
          resolve();
        }
      });
    });
  }
  replaceNewMessage(roomID, newMessage) {
    return new Promise((resolve, rejec) => {
      this.readFromStore().then((data) => {
        data[roomID] = reject(data[roomID], {id: newMessage.id});
        data[roomID].unshift(newMessage);
        this.addToStore(data);
        this.setProperties(data);
        resolve('ok');
      });
    });
  }
  replaceMessage(roomID, newMessage) {
    return new Promise((resolve, rejec) => {
      this.readFromStore().then((data) => {
        index = findIndex(data[roomID], {id: newMessage.id});
        data[roomID][index] = newMessage;
        this.addToStore(data);
        this.setProperties(data);
        resolve(data);
      });
    });
  }
  @observable messages = {};
  /*{
        id: '0',
        source: 'http://192.168.43.32:8555/sound/get/p2.mp3',
        file_name: 'p2.mp3',
        total: 0,
        received: 0,
        user: 2,
        creator: 2,
        type: 'audio',
        sender: {
            phone: 3,
            nickname: "Sokeng Kamga"
        },
        duration: Math.floor(0),
        created_at: "2014-03-30 12:32",
    }, {
        id: '1',
        //source: 'http://192.168.43.32:8555/sound/get/p2.mp3',
        file_name: 'p2.mp3',
        total: 0,
        received: 0,
        user: 1,
        creator: 2,
        type: 'text',
        text: `hello`,
        sender: {
            phone: 3,
            nickname: "Sokeng Kamga"
        },
        duration: Math.floor(0),
        created_at: "2014-03-30 12:32",
    }, {
        id: '2',
        sender: {
            phone: 2,
            nickname: "Sokeng Kamga"
        },
        user: 1,
        reply: {
            id: 3,
            user: 2,
            text: `Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>`,
            video: true,
            replyer_name: "Santers Gipson",
            source: "http://192.168.43.32:8555/sound/get/bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg"
        },
        creator: 3,
        type: "photo",
        photo: "http://192.168.43.32:8555/sound/get/bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg",
        file_name: 'bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg',
        created_at: "2014-03-30 12:32",
        text: `Hello!`
    }, {
        id: '3',
        source: 'http://192.168.43.32:8555/video/get/bma9auo13ult3nh5n690_bma9auo13ult3nh5n69g_bma9auo13ult3nh5n6a0.mp4',
        file_name: 'bma9auo13ult3nh5n690_bma9auo13ult3nh5n69g_bma9auo13ult3nh5n6a0_thumbnail.jpeg',
        thumbnailSource: 'http://192.168.43.32:8555/video/thumbnail/get/bma9auo13ult3nh5n690_bma9auo13ult3nh5n69g_bma9auo13ult3nh5n6a0_thumbnail.jpeg',
        sender: {
            phone: 3,
            nickname: "Sokeng Kamga"
        },
        user: 2,
        creator: 3,
        type: "video",
        received: 0,
        total: 0,
        reply: {
            id: 2,
            user: 3,
            text: `Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>`,
            video: true,
            replyer_name: "Santers Gipson",
            source: "http://192.168.43.32:8555/sound/get/bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg"
        },
        text: `Hello!
        Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>
You can of course use any editor you like to write Erlang programs, but if you use Emacs there exists editing support such as indentation, syntax highlighting, electric commands, module name verification, comment support including paragraph filling, skeletons, tags support and more. See the Tools application for details.
There are also Erlang plugins for other code editors Vim (vim-erlang) , Atom , Eclipse (ErlIDE) and IntelliJ IDEA.`,
        duration: Math.floor(0),
        created_at: "2014-03-30 12:32",
    }, {
        id: '4',
        source: 'http://192.168.43.32:8555/video/get/bm6lgk013ult9gc75vmg_bm6lgk013ult9gc75vn0_bm6lgk013ult9gc75vng.mp4',
        file_name: 'Black M - Le prince Aladin (Clip officiel) ft. Kev Adams.mp4',
        thumbnailSource: 'http://192.168.43.32:8555/video/thumbnail/get/bm7sd5813ulrbjp7u1sg_bm7sd5813ulrbjp7u1t0_bm7sd5813ulrbjp7u1tg_thumbnail.jpeg',
        sender: {
            phone: 3,
            nickname: "Sokeng Kamga"
        },
        user: 2,
        creator: 2,
        type: "attachement",
        received: 0,
        total: 0,
        text: `Hello!
        Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>
You can of course use any editor you like to write Erlang programs, but if you use Emacs there exists editing support such as indentation, syntax highlighting, electric commands, module name verification, comment support including paragraph filling, skeletons, tags support and more. See the Tools application for details.
There are also Erlang plugins for other code editors Vim (vim-erlang) , Atom , Eclipse (ErlIDE) and IntelliJ IDEA.

`,
        duration: Math.floor(0),
        created_at: "2014-03-30 12:32",
    },
        , {
        id: '5',
        source: 'http://192.168.43.32:8555/video/get/Black M - Le prince Aladin (Clip officiel) ft. Kev Adams.mp4',
        file_name: 'bm6lgk013ult9gc75vmg_bm6lgk013ult9gc75vn0_bm6lgk013ult9gc75vng.mp4',
        thumbnailSource: 'http://192.168.43.32:8555/video/thumbnail/get/bm7sd5813ulrbjp7u1sg_bm7sd5813ulrbjp7u1t0_bm7sd5813ulrbjp7u1tg_thumbnail.jpeg',
        sender: {
            phone: 3,
            nickname: "Sokeng Kamga"
        },
        type: "video",
        user: 3,
        creator: 2,
        received: 0,
        total: 0,
        text: `Hello!
        Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>
You can of course use any editor you like to write Erlang programs, but if you use Emacs there exists editing support such as indentation, syntax highlighting, electric commands, module name verification, comment support including paragraph filling, skeletons, tags support and more. See the Tools application for details.
There are also Erlang plugins for other code editors Vim (vim-erlang) , Atom , Eclipse (ErlIDE) and IntelliJ IDEA.

`,
        duration: Math.floor(0),
        created_at: "2014-0s3-30 12:32",
    }*/
  //  ];
  storeAccessKey = {
    key: this.key,
    autoSync: true,
  };
  key = 'messages';
  saveKey = {
    key: this.key,
    data: {},
  };
  initializeStore() {
    storage
      .load({key: this.key})
      .then((chats) => {
        console.warn(chats);
        chats ? (this.messages = chats) : (this.messages = {});
      })
      .catch((error) => {
        this.messages = {};
      });
  }
  readFromStore() {
    return new Promise((resolve, reject) => {
      resolve(this.messages);
    });
  }
  setProperties(chats) {
    //chats = chain(chats).groupBy(element => moment(element.created_at).format("YYYY/MM/DD")).map((value,key)  => {return {created_at:key, data: orderBy(value, ["created_at"], ["desc"])}})
    //chats = orderBy(chats, ["created_at"], ["desc"])
    this.messages = chats; //= filter(chats, chat => !chat.hidden && !chat.deleted);
  }
  insertBulkMessages(roomID, messages) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((data) => {
        data[roomID] = data[roomID] ? messages.concat(data[roomID]) : messages;
        data[roomID] = uniqBy(data[roomID], 'id');
        this.addToStore(data);
        resolve();
      });
    });
  }
  addDuration(roomID, duration, id) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((data) => {
        let index = findIndex(data[roomID], {id: id});
        if (data[roomID][index]) {
          data[roomID][index].duration = duration;
          this.addToStore(data);
          this.setProperties(data);
          resolve('ok');
        } else {
          resolve('not found');
        }
      });
    });
  }
  addVideoProperties(roomID, id, path, total, received) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((data) => {
        let index = findIndex(data[roomID], {id: id});
        if (data[roomID][index]) {
          data[roomID][index].total = total;
          data[roomID][index].received = received;
          data[roomID][index].source = path;
          this.addToStore(data);
          this.setProperties(data);
          resolve('ok');
        } else {
          resolve('not found');
        }
      });
    });
  }
  @autobind addMessage(roomID, message) {
    return new Promise((resolve, reject) => {
      this.messages[roomID].unshift(message);
      resolve();
    });
  }
  addVideoSizeProperties(roomID, id, total, recieved) {
    return this.addAudioSizeProperties(roomID, id, total, recieved);
  }
  AddAudioSizePropperties(total, recieved) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
  addAudioSizeProperties(roomID, id, total, recieved, duration) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((data) => {
        let index = findIndex(data[roomID], {id: id});
        if (data[roomID][index]) {
          data[roomID][index].total = total;
          data[roomID][index].received = recieved;
          data[roomID][index].duration = duration;
          this.addToStore(data);
          this.setProperties(data);
          resolve('ok');
        } else {
          resolve('not found');
        }
      });
    });
  }
  SetCancledState(roomID, id) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((data) => {
        let index = findIndex(data[roomID], {id: id});
        if (data[roomID][index]) {
          data[roomID][index].cancled = true;
          this.addToStore(data);
          this.setProperties(data);
          resolve('ok');
        } else {
          resolve('not found');
        }
      });
    });
  }
  deleteNewMessageIndicator(roomID) {
    return new Promise((resolve, rejec) => {
      this.readFromStore().then((data) => {
        data[roomID] = reject(data[roomID], {type: 'new_separator'});
        this.addToStore(data);
        resolve('ok');
      });
    });
  }
  addStaticFilePath(roomID, url, id) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((data) => {
        let index = findIndex(data[roomID], {id: id});
        if (data[roomID][index]) {
          data[roomID][index].source = url;
          this.addToStore(data);
          this.setProperties(data);
          resolve('ok');
        } else {
          resolve('not found');
        }
      });
    });
  }
}

export default ChatStore;
