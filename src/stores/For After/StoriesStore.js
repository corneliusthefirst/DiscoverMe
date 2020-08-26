import storage from './Storage';
import {observable, action} from 'mobx';

import {uniqBy, reject, filter, find, findIndex, sortBy} from 'lodash';
import moment from 'moment';
import tcpRequest from '../services/tcpRequestData';
import request from '../services/requestObjects';
import serverEventListener from '../services/severEventListener';
import emitter from '../services/eventEmiter';
export default class StoriesStore {
  constructor() {}
  curentTemporalStory = [];
  @observable stories = [];

  saveKey = {
    key: 'stories',
    data: [],
  };

  @action addStory(H) {
    return this.addStories([H]);
  }

  initializeGetStoriesListener() {
    console.warn('initializing listener');
    emitter.on('give-story', (id, hid) => {
      console.warn(id, hid);
      if (
        this.curentTemporalStory.length <= 0 ||
        this.curentTemporalStory[id].length <= 0
      ) {
        this.fetchStories(id).then((stories) => {
          this.curentTemporalStory[id] = stories;
          let h = find(this.curentTemporalStory[id], {id: hid});
          emitter.emit('take-story', h);
        });
      } else {
        let h = find(this.curentTemporalStory[id], {id: hid});
        emitter.emit(`take-story_${id}`, h);
      }
    });
  }

  @action addStories(Story) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Stories) => {
        if (!Stories || Stories.length !== 0) {
          Stories = uniqBy(Story.concat(Stories), 'id');
        } else {
          Stories = Story;
        }
        this.saveKey.data = Stories;
        storage.save(this.saveKey).then(() => {
          this.stories = this.saveKey.data;
          resolve();
        });
      });
    });
  }

  removeStory(id) {
    return new Promise((resolve, rejectPromise) => {
      this.readFromStore().then((Stories) => {
        let Previousstory = find(Stories, {id: id});
        Stories = reject(Stories, {id, id});
        this.saveKey.data =
          id == 'newStoryId' ? [request.Story()].concat(Stories) : Stories;
        storage.save(this.saveKey).then(() => {
          this.stories = this.saveKey.data;
          resolve(Previousstory);
        });
      });
    });
  }
  fetchStoriesFromRemote(statID) {
    return new Promise((resolve, reject) => {
      if (
        this.curentTemporalStory[statID] &&
        this.curentTemporalStory[statID].length > 0
      ) {
        resolve(this.curentTemporalStory[statID]);
      } else {
        let statid = request.StatID();
        statid.stat_id = statID;
        tcpRequest
          .getStories(statid, statid.stat_id + 'stories')
          .then((JSONDATA) => {
            serverEventListener
              .sendRequest(JSONDATA, statid.stat_id + 'stories')
              .then((Data) => {
                if (Data.data === 'empty') {
                  resolve([]);
                } else {
                  this.replaceStories(
                    Array.isArray(Data.data)
                      ? uniqBy(Data.data, 'id')
                      : [Data.data],
                    statID,
                  ).then(() => {
                    this.curentTemporalStory[statID] = Data.data;
                    resolve(
                      uniqBy(
                        sortBy(
                          Array.isArray(Data.data)
                            ? uniqBy(Data.data, 'id')
                            : [Data.data],
                          ['created_at', 'desc'],
                        ),
                        'id',
                      ),
                    );
                  });
                }
              })
              .catch((error) => {
                resolve([]);
              });
          });
      }
    });
  }
  @action fetchStories(statID) {
    return new Promise((resolve, reject) => {
      if (this.stories.length == 0) {
        this.readFromStore().then((Stories) => {
          let result = filter(Stories, {
            stat_id: statID,
          });
          if (result.length == 0) {
            this.fetchStoriesFromRemote(statID).then((data) => {
              resolve(data);
            });
          } else {
            resolve(uniqBy(sortBy(result, ['created_at'], ['desc']), 'id'));
          }
        });
      } else {
        let stories = filter(this.stories, {stat_id: statID});
        if (stories.length == 0) {
          this.fetchStoriesFromRemote(statID).then((data) => {
            resolve(data);
          });
        } else {
          resolve(stories);
        }
      }
    });
  }

  @action updateStoryDescription(newStory, inform) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Stories) => {
        let index = findIndex(Stories, {
          id: newStory.id,
        });
        let Previousstory = Stories[index];
        Stories[index].text.string = newStory.text.string;
        if (inform) {
          Stories[index].description_updated = true;
          Stories[index].updated = true;
        }
        Stories[index].update_date = moment().format();
        this.saveKey.data = sortBy(Stories, 'update_date');
        storage.save(this.saveKey).then(() => {
          this.stories = this.saveKey.data;
          resolve(Previousstory);
        });
      });
    });
  }

  @action updateStatStories(statID, newStories) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Stories) => {
        Stories = reject(Stories, ['stat_id', statID]);
        Stories = Stories.concat(newStories);
        this.saveKey.data = sortBy(Stories, 'update_date');
        storage.save(this.saveKey).then(() => {
          this.stories = this.saveKey.data;
          resolve();
        });
      });
    });
  }

  readFromStore() {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'stories',
          autoSync: true,
        })
        .then((Stories) => {
          resolve(sortBy(Stories, ['created_at'], ['desc']));
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}
