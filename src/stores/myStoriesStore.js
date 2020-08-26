import storage from './Storage';
import {observable, action} from 'mobx';
import {uniqBy, reject, find, findIndex, sortBy} from 'lodash';
import moment from 'moment';

export default class MystoriesStore {
  constructor() {
    this.readFromStore().then((stories) => {
      this.mystories = stories;
    });
  }

  @observable mystories = {
    phone: '',
    username: '',
    profile: '',
    age: '23',
    updated_at: '',
    totalviews: 0,
    bio: '',
    stories: [],
  };

  saveKey = {
    key: 'mystories',
    data: [],
  };

  @action async setMyStory(newStory) {
    return new Promise((resolve, rejectpromise) => {
      this.mystories = {
        phone: newStory.phone,
        username: newStory.username,
        profile: newStory.profile,
        age: newStory.age,
        updated_at: newStory.updated_at,
        totalviews: newStory.totalviews,
        bio: newStory.bio,
        stories: uniqBy(newStory.stories, 'id'),
      };
      storage
        .save({
          key: 'mystories',
          data: this.mystories,
        })
        .then(() => {
          resolve(this.mystories);
        })
        .catch((error) => {
          rejectpromise(error);
        });
    });
  }

  @action addStory(story) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((mystories) => {
        if (!mystories.stories || mystories.stories.length !== 0) {
          mystories.stories = uniqBy([story].concat(mystories.stories), 'id');
          this.mystories = mystories;
        } else {
          this.mystories.stories = [story];
        }
        this.saveKey.data = this.mystories;
        storage.save(this.saveKey).then(() => {
          this.mystories = this.saveKey.data;
          resolve(this.mystories);
        });
      });
    });
  }

  updateStoryFromUser(user) {
    return new Promise((resolve, rejectpromise) => {
      this.mystories.profile = user.profile;
      this.mystories.username = user.nickname;
      this.mystories.age = user.age;
      this.saveKey.data = this.mystories;
      storage.save(this.saveKey).then(() => {
        this.mystories = this.saveKey.data;
        resolve();
      });
    });
  }

  removeStory(id_) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((mystories) => {
        let PreviousStory = find(mystories.stories, {id: id_});
        mystories.stories = reject(mystories.stories, {id: id_});
        this.saveKey.data = mystories;
        storage.save(this.saveKey).then(() => {
          this.mystories = this.saveKey.data;
          resolve(PreviousStory);
        });
      });
    });
  }

  @action fetchMyStories() {
    return new Promise((resolve, rejectpromise) => {
      if (this.mystories.stories.length === 0) {
        this.readFromStore().then((mystories) => {
          this.mystories = mystories;
          resolve(mystories);
        });
      } else {
        resolve(this.mystories);
      }
    });
  }

  @action updateStoryMessage(newStory, inform) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((mystories) => {
        let index = findIndex(mystories, {
          id: newStory.id,
        });
        let PreviousStory = mystories.stories[index];
        mystories.stories[index].message = newStory.message;
        if (inform) {
          mystories.stories[index].message_updated = true;
          mystories.stories[index].updated = true;
        }
        mystories.stories[index].update_date = moment().format();
        this.saveKey.data.stories = sortBy(mystories.stories, 'update_date');
        storage.save(this.saveKey).then(() => {
          this.mystories = this.saveKey.data;
          resolve(PreviousStory);
        });
      });
    });
  }

  @action updateUserProfile(profile, inform) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((mystories) => {
        mystories.profile = profile;
        if (inform) {
          mystories.updated = true;
        }
        mystories.updated_at = moment().format();
        this.saveKey.data = mystories;
        storage.save(this.saveKey).then(() => {
          this.mystories = this.saveKey.data;
          resolve();
        });
      });
    });
  }

  readFromStore() {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: 'mystories',
          autoSync: true,
        })
        .then((mystories) => {
          resolve(mystories);
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}

/**{
    phone: '00330666406835',
    username: 'Cornelius',
    profile: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
    age: '22',
    updated_at: moment().format(),
    totalviews: 105300,
    stories: [
      {
        id: '01',
        creator: '00330666406835',
        url: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
        message:'her is the message ofcourse',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 100860,
        likes: 3120,
      },
      {
        id: '02',
        creator: '00330666406835',
        url: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 5230,
        likes: 471,
      },
      {
        id: '03',
        creator: '00330666406835',
        url:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        updated_at: moment().format(),
        type: 'video',
        isSeen: false,
        views: 3580,
        likes: 200,
      },
      {
        id: '04',
        creator: '00330666406835',
        url:
          'https://image.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 2870,
        likes: 400,
      },
      {
        id: '05',
        creator: '00330666406835',
        url: 'https://homepages.cae.wisc.edu/~ece533/image/mountain.png',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 320,
        likes: 26,
      },
      {
        id: '06',
        creator: '00330666406835',
        url: 'https://homepages.cae.wisc.edu/~ece533/image/baboon.png',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 10000,
        likes: 100,
      },
      {
        id: '07',
        creator: '00330666406835',
        url: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 0,
        likes: 0,
      },
      {
        id: '08',
        creator: '00330666406835',
        url: 'https://homepages.cae.wisc.edu/~ece533/image/peppers.png',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 120,
        likes: 60,
      },
      {
        id: '09',
        creator: '00330666406835',
        url:
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        updated_at: moment().format(),
        type: 'video',
        isSeen: false,
        views: 50,
        likes: 10,
      },
      {
        id: '010',
        creator: '00330666406835',
        url: 'https://homepages.cae.wisc.edu/~ece533/image/pool.png',
        updated_at: moment().format(),
        type: 'image',
        isSeen: false,
        views: 40,
        likes: 20,
      },
    ],
  } */

/**  stores.MystoriesStore.setMyStory({
      phone: '00330666406835',
      username: 'Cornelius',
      profile: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
      age: '22',
      updated_at: moment().format(),
      totalviews: 105300,
      stories: [
        {
          id: '01',
          creator: '00330666406835',
          url:{
            source : 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            thumbnail: 'http://img.youtube.com/vi/X_4jWK4Kbaw/default.jpg',
            duration:99
          },
          message: 'her is the message ofcourse',
          updated_at: moment().format(),
          type: 'video',
          isSeen: false,
          views: 100860,
          likes: 3120,
        },
        {
          id: '02',
          creator: '00330666406835',
          url: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
          message:
            'In deep water, the waves of the tsunami have a period (time separating each peak) counting in tens of minutes, and can travel at more than 800  km / h , while not exceeding a few decimeters in height. But when approaching the coasts , their period and their speed decrease, while their amplitude increases, their height possibly exceeding 30  m 2 . They can then submerge the shore, flooding low ground, penetrating deep into the land, carrying everything in their path, in a succession of ebb and flow.',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 5230,
          likes: 471,
        },
        {
          id: '03',
          creator: '00330666406835',
          url:{
            source : 'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200622-WA0010.mp4',
            thumbnail: 'http://img.youtube.com/vi/X_4jWK4Kbaw/default.jpg',
            duration:99
          },
          message: '',
          updated_at: moment().format(),
          type: 'video',
          isSeen: false,
          views: 3580,
          likes: 200,
        },
        {
          id: '04',
          creator: '00330666406835',
          url:'https://www.youtube.com/watch?v=OFMAwBzaX5s',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 2870,
          likes: 400,
        },
        {
          id: '05',
          creator: '00330666406835',
          url: 'http://img.youtube.com/vi/Se_O_TKVV9Y/hqdefault.jpg',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 320,
          likes: 26,
        },
        {
          id: '06',
          creator: '00330666406835',
          url: 'http://img.youtube.com/vi/zhM4g3uR-mc/hqdefault.jpg',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 10000,
          likes: 100,
        },
        {
          id: '07',
          creator: '00330666406835',
          url: 'http://img.youtube.com/vi/qY0Io9aeJQw/hqdefault.jpg',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 0,
          likes: 0,
        },
        {
          id: '08',
          creator: '00330666406835',
          url: 'http://img.youtube.com/vi/MSKvgipY7wA/hqdefault.jpg',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 120,
          likes: 60,
        },
        {
          id: '010',
          creator: '00330666406835',
          url: 'http://img.youtube.com/vi/JF8BRvqGCNs/hqdefault.jpg',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 40,
          likes: 20,
        },
      ],
    }).then((data) => {
      console.warn('here', data);
    });*/
