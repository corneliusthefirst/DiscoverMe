import storage from "./Storage";
import { observable, action } from "mobx";
import { find, findIndex, uniq, sortBy, reject } from "lodash";
import tcpRequest from "../services/tcpRequestData";
import serverEventListener from "../services/severEventListener";
export default class contacts {
  constructor() {
    
    /*storage.remove({
      key: "contacts",
      autoSync: true
    }).then(()=>{})*/
    
    this.readFromStore().then((Contacts) => {
      if (Contacts) this.contacts = Contacts;
      else this.contacts = {};
    });
  }

  @observable contacts = {};
  saveKey = {
    key: "contacts",
    data: {},
  };

  @action addContact(NewContact) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Contacts) => {
        Contacts.contacts = uniq(Contacts.contacts.concat([NewContact]), "phone");
        this.saveKey.data = Contacts;
        storage.save(this.saveKey).then(() => {
          this.contacts = this.saveKey.data;
          resolve();
        });
      });
    });
  }

  @action removeContact(phone) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Contacts) => {
        Contacts = reject(Contacts.contacts, ["phone", phone]);
        this.saveKey.data = Contacts;
        storage.save(this.saveKey).then(() => {
          this.contacts = this.saveKey.data;
          resolve();
        });
      });
    });
  }
  getContacts(phone) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((contacts) => {
        if (!contacts || !contacts.contacts || contacts.contacts.length == 0) {
          tcpRequest.getContacts(phone + "_contacts").then((JSONData) => {
            serverEventListener
              .sendRequest(JSONData, phone + "_contacts")
              .then((conts) => {
                contacts.contacts = conts
                this.saveKey.data = contacts;
                storage.save(this.saveKey).then(() => {
                  resolve(conts);
                });
              })
              .catch((error) => {
                serverEventListener.socket.write = undefined;
                resolve("empty");
              });
          });
        } else {
          resolve(contacts.contacts);
        }
      });
    });
  }

  getContact(phone) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Contacts) => {
        resolve(
          find(Contacts.contact, {
            phone: phone,
          })
        );
        // it return an object of the contact or undefined if the contact doesnot exits
      });
    });
  }

  @action updateName(Newcontact) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Contacts) => {
        let Contact = find(Contacts.contacts, {
          phone: Newcontact.phone,
        });
        let index = findIndex(Contacts, {
          phone: phone,
        });
        Contact.name = Newcontact.name;
        Contacts.contacts.splice(index, 1, Contact);
        this.saveKey.data = Contacts;
        storage.save(this.saveKey).then(() => {
          this.contacts = this.saveKey.data;
          resolve();
        });
      });
    });
  }
  @action updateHost(Newcontact) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Contacts) => {
        let Contact = find(Contacts.contacts, {
          phone: Newcontact.phone,
        });
        let index = findIndex(Contacts.contacts, {
          phone: phone,
        });
        Contact.host = Newcontact.host;
        Contacts.contacts.splice(index, 1, Contact);
        this.saveKey.data = Contacts;
        storage.save(this.saveKey).then(() => {
          this.contacts = this.saveKey.data;
          resolve();
        });
      });
    });
  }
  addFollower(phone, host) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((contact) => {
        contact.followers =
          contact.followers && contact.followers.length > 0
            ? uniq(
              contact.followers.unsift({ phone: phone, host: host }),
              "phone"
            )
            : [{ phone, host }];
        this.saveKey.data = contact
        storage.save(this.saveKey).then(() => {
          console.warn(contact)
          resolve()
        })
      });
    });
  }
  addFollowing(phone, host) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((contact) => {
        contact.following =
          contact.following && contact.following.length > 0
            ? uniq(
              contact.following.unsift({ phone: phone, host: host }),
              "phone"
            )
            : [{ phone, host }];
        this.saveKey.data = contact
        storage.save(this.saveKey).then(() => {
          resolve()
        })
      });
    });
  }
  removeFollowing(phone) {
    return new Promise((resolve, rejec) => {
      this.readFromStore().then((contacts) => {
        contacts.following = reject(contacts.following, { phone })
        this.saveKey.data = contacts
        storage.save(this.saveKey).then(() => {
          resolve()
        })
      })
    })
  }
  removeFollower(phone){
    return new Promise((resolve,rejec) => {
      this.readFromStore().then((contacts) => {
        contacts.followers = reject(contacts.followers, { phone })
        this.saveKey.data = contacts
        storage.save(this.saveKey).then(() => {
          resolve()
        })
      })
    })
  }
  @action updateProfile(Newcontact) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Contacts) => {
        let Contact = find(Contacts.contacts, {
          phone: Newcontact.phone,
        });
        let index = findIndex(Contacts, {
          phone: phone,
        });
        Contact.profile = Newcontact.profile;
        Contacts.contacts.splice(index, 1, Contact);
        this.saveKey.data = Contacts;
        storage.save(this.saveKey).then(() => {
          this.contacts = this.saveKey.data;
          resolve();
        });
      });
    });
  }
  readFromStore() {
    return new Promise((resolve, rejevt) => {
      storage
        .load({
          key: "contacts",
          autoSync: true,
        })
        .then((Contacts) => {
          resolve(Contacts);
        })
        .catch((error) => {
          resolve({});
        });
    });
  }
}
