import storage from "./Storage";
import stores from "./";
import { observable, action, extendObservable, autorun, computed } from "mobx";
require("json-circular-stringify"); // !! This is added to solve the problem TypeError: JSON.stringify cannot serialize cyclic structures
export default class Session {
  @observable SessionStore = {
    socket: null,
    phone: "",
    password: "",
    reference: "#Ref<0.3996024962.2836135937.9226>",
    host: "bleashup.com"
  };
  get SessionStore() {
    return this.SessionStore;
  }
  set SessionStore(New) {
    this.SessionStore = New;
  }
  constructor() {
    storage
      .load({
        key: "session",
        autoSync: true
      })
      .then(ses => {
        //console.warn(ses)
        this.SessionStore = {
          socket: ses.socket,
          phone: ses.phone,
          password: ses.password,
          reference: ses.reference,
          host: "192.168.43.32"//ses.host
        };
      })
      .catch(error => {
        this.initialzeStore()
          .then(session => {
            this.SessionStore = session;
          })
          .catch(error => { });
      });
  }
  @action getSocke() {
    return this.SessionStore.socket;
  }
  @action initialzeStore() {
    return new Promise((resolve, reject) => {
      stores.LoginStore.getUser()
        .then(user => {
          let session = {
            socket: null,
            phone: user.phone,
            password: user.password,
            reference: "#Ref<0.3996024962.2836135937.9226>",
            host: "192.168.43.69"
          };
          storage
            .save({
              key: "session",
              data: session
            })
            .then(() => {
              session.socket = this.SessionStore.socket
              session.reference = this.SessionStore.reference
              this.SessionStore = session;
              resolve(session);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  @action getSession() {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "session",
          autoSync: true
        })
        .then(data => {
          data.socket = this.SessionStore.socket
          resolve(data);
        })
        .catch(error => {
          this.initialzeStore()
            .then(data => {
              resolve(data);
            })
            .catch(error => {
              reject(error);
            });
        });
    });
  }
  initialzeStoreAndUpdate(key, newValue) {
    return new Promise((resolve, reject) => {
      stores.LoginStore.getUser()
        .then(user => {
          let session = {
            socket: null,
            phone: user.phone,
            password: user.password,
            reference: "#Ref<0.3996024962.2836135937.9226>",
            host: "bleashup.com"
          };
          if (key !== "socket")
            session.socket = this.SessionStore.socket
          if (key !== "reference") session.reference = this.SessionStore.reference
          session[key] = newValue;
          storage
            .save({
              key: "session",
              data: session
            })
            .then(() => {
              this.SessionStore = session;
              resolve(session);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  @action updateReference(newReference) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "session",
          autoSync: true
        })
        .then(session => {
          this.SessionStore.reference = newReference
          storage
            .save({
              key: "session",
              data: this.SessionStore
            })
            .then(() => {
              resolve(this.SessionStore);
            });
        })
        .catch(error => {
          this.initialzeStoreAndUpdate("reference", newReference)
            .then(session => {
              session.socket = this.SessionStore.socket;
              this.SessionStore = session;
              resolve(session);
            })
            .catch(error => {
              reject(error);
            });
        });
    });
  }

  @action updateSocket(newSocket) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "session",
          autoSync: true
        })
        .then(session => {
          if (session.password) {
            session.socket = newSocket;
            session.reference = this.SessionStore.reference
            session.host = "192.168.43.32";
            storage
              .save({
                key: "session",
                data: session
              })
              .then(() => {
                this.SessionStore = session;
                resolve(this.SessionStore);
              });
          } else {
            this.initialzeStoreAndUpdate("socket", newSocket)
              .then(session => {
                this.SessionStore = session;
                resolve(session);
              })
              .catch(error => {
                reject(error);
              });
          }
        })
        .catch(error => {
          this.initialzeStoreAndUpdate("socket", newSocket)
            .then(session => {
              this.SessionStore = session;
              resolve(session);
            })
            .catch(error => {
              reject(error);
            });
        });
    });
  }
  @action updateHost(newHost) {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "session",
          autoSync: true
        })
        .then(session => {
          session.host = newHost;
          session.socket = this.SessionStore.socket
          session.reference = this.SessionStore.reference
          this.SessionStore = session;
          storage
            .save({
              key: "session",
              data: session
            })
            .then(() => {
              resolve(session);
            });
        })
        .catch(error => {
          this.initialzeStoreAndUpdate("socket", newHost)
            .then(session => {
              this.SessionStore = session;
              resolve(session);
            })
            .catch(error => {
              reject(error);
            });
        });
    });
  }
}
