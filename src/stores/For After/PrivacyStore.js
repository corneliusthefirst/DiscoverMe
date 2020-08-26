import storage from "./Storage";
import { observable, action } from "mobx";
import { uniq, reject, find } from "lodash";
import { PrivacyRequester } from "../components/myscreens/settings/privacy/Requester";
export default class PrivacyStore {
    constructor() {
        this.readFromStore().then((privacy) => {
            this.privacy = privacy;
        });
    }
    readKey = {
        key: "privacy",
        autoSync: true,
    };
    saveKey = {
        key: "privacy",
        data: {},
    };
    @observable privacy = {};
    s_muted(item) {
        return this.privacy &&
            this.privacy.muted &&
            find(this.privacy.muted, (ele) => ele == item)
            ? true
            : false;
    }
    s_blocked(member) {
        return this.privacy &&
            this.privacy.blocked &&
            find(this.privacy.blocked, (ele) => ele === member)
            ? true
            : false;
    }
    s_me_blocked(member) {
        return this.privacy &&
            this.privacy.blocker &&
            find(this.privacy.blocker, (ele) => ele === member)
            ? true
            : false;
    }
    s_me_muted(member) {
        return this.privacy &&
            this.privacy.muter &&
            find(this.privacy.muter, (ele) => ele === member) ? true : false
    }
    blocked(member) {
        return new Promise((resolve, reject) => {
            PrivacyRequester.blocked(member)
                .then((status) => {
                    resolve(status);
                })
                .catch((error) => {
                    resolve(this.s_blocked(member));
                });
        });
    }
    muted(member) {
        return new Promise((resolve, reject) => {
            PrivacyRequester.muted(member)
                .then((status) => {
                    resolve(status);
                })
                .catch(() => {
                    resolve(this.s_muted(member));
                });
        });
    }
    meBlocked(member) {
        return new Promise((resolve, reject) => {
            PrivacyRequester.meBlocked(member)
                .then((status) => {
                    console.warn(status);
                    resolve(status);
                })
                .catch((err) => {
                    resolve(this.s_me_blocked(member));
                });
        });
    }
    meMuted(member) {
        return new Promise((resolve, reject) => {
            PrivacyRequester.meMuted(member)
                .then((status) => {
                    resolve(status);
                })
                .catch(() => {
                    resolve(this.s_me_muted(member));
                });
        });
    }
    updateToken(token) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: { ...privacy, token },
                }).then(() => {
                    resolve("ok");
                });
            });
        });
    }
    block(ite) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        blocked:
                            privacy && privacy.blocked
                                ? uniq(privacy.blocked.concat([ite]))
                                : [ite],
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    blockMe(mem) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        blocker:
                            privacy && privacy.blocker
                                ? uniq(privacy.blocker.concat([mem]))
                                : [mem],
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    muteMe(mem) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        muter:
                            privacy && privacy.muter
                                ? uniq(privacy.muter.concat([mem]))
                                : [mem],
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    unmuteMe(mem) {
        return new Promise((resolve, rejet) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        muter:
                            privacy &&
                            privacy.muter &&
                            reject(privacy.muter, (ele) => ele === mem),
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    updateBlocked(blocked) {
        return new Promise((resolve, reject) => {
            this.saveToStore({
                ...this.saveKey,
                data: { ...this.privacy, blocked: blocked },
            }).then(() => {
                resolve();
            });
        });
    }
    updateMuted(muted) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: { ...privacy, muted: muted },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    unblockMe(mem) {
        return new Promise((resolve, rejet) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        blocker:
                            privacy &&
                            privacy.blocker &&
                            reject(privacy.blocker, (ele) => ele === mem),
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    unblock(item) {
        return new Promise((resolve, rejet) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        blocked:
                            privacy &&
                            privacy.blocked &&
                            reject(privacy.blocked, (ele) => ele === item),
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    mute(item) {
        return new Promise((resolve, reject) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        muted:
                            privacy && privacy.muted
                                ? uniq(privacy.muted.concat([item]))
                                : [item],
                    },
                }).then(() => {
                    resolve("ok");
                });
            });
        });
    }
    unmute(item) {
        return new Promise((resolve, rejet) => {
            this.readFromStore().then((privacy) => {
                this.saveToStore({
                    ...this.saveKey,
                    data: {
                        ...privacy,
                        muted:
                            privacy &&
                            privacy.muted &&
                            reject(privacy.muted, (ele) => ele == item),
                    },
                }).then(() => {
                    resolve();
                });
            });
        });
    }
    readFromStore() {
        return new Promise((resolve, reject) => {
            storage
                .load(this.readKey)
                .then((data) => {
                    console.warn("PRIVACY ", data);
                    resolve(data);
                })
                .catch(() => {
                    this.refreshPrivacy({})
                        .then((privacy) => {
                            resolve(privacy);
                        })
                        .catch((err) => {
                            resolve({});
                        });
                });
        });
    }
    refreshPrivacy(currentPrivacy) {
        return new Promise((resolve, reject) => {
            PrivacyRequester.getBlocked().then((blocked) => {
                PrivacyRequester.getMuted().then((muted) => {
                    resolve({ ...currentPrivacy, blocked, muted });
                });
            });
        });
    }
    @action saveToStore(val) {
        this.privacy = val.data;
        return storage.save(val);
    }
}
