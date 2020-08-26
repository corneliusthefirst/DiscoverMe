/* eslint-disable prettier/prettier */
import storage from './Storage';
import {observable, action} from 'mobx';
import {uniqBy, sortBy, concat, unshift} from 'lodash';
import moment from 'moment';
import {users} from '../assets/fake_data';


export default class AllStoriesStore {
  constructor() {
    /*storage.remove(this.saveKey).then(() => {
      console.warn('ok');
    });
    this.createStories();*/

    this.fetchstories().then((stories) => {
      this.allstories = stories;
    });
  }

  @observable allstories = {};
  @observable storiesForModal = [];
  storiesForPage = [];

  saveKey = {
    key: 'allstories',
    data: {},
  };

  createStories() {
      users.results.forEach((user)=>{
        var story = this.createUserStory(user.phone);
        this.addFullUserStory(user.phone, story).then(() => {
          console.warn('added boy');
        });
      });
  }


  @action fetchstories() {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((storiesObject) => {
        resolve(storiesObject);
      });
    });
  }

  @action fetchstory(phone) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((storiesObject) => {
        resolve(storiesObject[phone]);
      });
    });
  }

  @action addFullUserStory(phone, story) {
    return new Promise((resolve, rejectpromise) => {
      this.readFromStore().then((storiesObject) => {
        //console.warn('obj before', storiesObject);
        storiesObject[phone] = story;
        //console.warn('obj after', storiesObject);
        this.saveKey.data = storiesObject;
        storage.save(this.saveKey).then(() => {
          this.allstories = this.saveKey.data;
          resolve();
        });
      });
    });
  }

  readFromStore() {
    return new Promise((resolve, reject) => {
      storage.load({
          key: 'allstories',
          autoSync: true,
        }).then((stories) => {
          //console.warn('stories', stories);
          resolve(stories);
        })
        .catch((error) => {
          //console.warn('here');
          storage.save(this.saveKey).then(() => {
            this.allstories = this.saveKey.data;
            resolve(this.allstories);
          });
        });
    });
  }

  getRndInteger() {
    return Math.floor(Math.random() * (6989899989 - 6000600000)) + 6000060000;
  }

  createUserStory(phone) {
    return {
      phone: phone,
      username: 'Giles',
      profile: 'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      age: phone.slice(4, 6),
      updated_at: moment().format(),
      totalviews: 105300,
      stories: [

        {
          id: '02',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1496287437689-3c24997cca99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          message:
            'In deep water, the waves of the tsunami have a period (time separating each peak) counting in tens of minutes, and can travel at more than 800  km / h , while not exceeding a few decimeters in height. But when approaching the coasts , their period and their speed decrease, while their amplitude increases, their height possibly exceeding 30  m 2 . They can then submerge the shore, flooding low ground, penetrating deep into the land, carrying everything in their path, in a succession of ebb and flow.',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 5230,
          likes: 471,
        },
        {
          id: '04',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 2870,
          likes: 400,
        },
        {
          id: '05',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 320,
          likes: 26,
        },
        {
          id: '06',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1514870262631-55de0332faf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 10000,
          likes: 100,
        },
        {
          id: '07',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 0,
          likes: 0,
        },
        {
          id: '09',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 50,
          likes: 10,
        },
        {
          id: '010',
          creator: phone,
          url:
            'https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          message: '',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 40,
          likes: 20,
        },
      ],
    };
  }
}


/**
 * {
          id: '03',
          creator: phone,
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
          message: '',
          updated_at: moment().format(),
          type: 'video',
          isSeen: false,
          views: 3580,
          likes: 200,
        },
 * {
          id: '01',
          creator: phone,
          url:
            'file:///storage/emulated/0/beats/APOLOGY Dancehall x Afrobeat x Wizkid Type Beat Instrumental.mp4',
          message: 'her is the message ofcourse',
          updated_at: moment().format(),
          type: 'video',
          isSeen: false,
          views: 100860,
          likes: 3120,
        },
                {
          id: '08',
          creator: phone,
          url:
            'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200504-WA0019.mp4',
          message: '',
          updated_at: moment().format(),
          type: 'video',
          isSeen: false,
          views: 120,
          likes: 60,
        },
     */
/*
  createStories() {
    var phone = this.getRndInteger();
    var phoneArray = [];
    var i = 0;
    while (i < 10) {
      if (phoneArray.includes(phone) === false) {
        var story = this.createUserStory('0' + phone.toString());
        this.addFullUserStory('0' + phone.toString(), story).then(() => {
          //console.warn('added boy');
        });
        phoneArray.push(phone);
        i++;
      }
      phone = this.getRndInteger();
    }
  }
*/
  /*
  createStoriesForPage = (stories) => {
    var i = 0;
    while (i < stories.length) {
      //console.warn('length is', stories.length, i);
      var subArray = [];
      let j = 0;
      while (j < 3 && i < 10) {
        //console.warn("i is", i);
        //let story = {};
        //story.data = stories[i];
        //stories[i].stories = [];
        subArray.push(stories[i]);
        //console.warn("count", j);
        i = i + 1;
        j = j + 1;
      }
      this.storiesForPage.push({data:[{id: Math.ceil(i / 3 ),subArray:subArray}]});
      //console.warn('subArray', i, subArray);
    }
    //console.warn('stories for page is', this.storiesForPage);
  };*/
        //console.warn('here are all the stories created', stories);
     /* for (const obj in stories) {
        //this.storiesForModal.unshift(stories[obj]);
        this.storiesForModal = uniqBy( this.storiesForModal.concat([stories[obj]]), 'phone');

        this.storiesForModal =  this.storiesForModal.map((item) => { 
          item.stories = [];
          return item;
        });
        //console.warn('here are all the stories created', this.storiesForModal);

      }*/
      //this.createStoriesForPage(this.storiesForModal);
      //console.warn('stories for modal', this.storiesForModal);
      /*console.warn(
        'here are all the stories created for modal',
        this.storiesForModal,
      );*/
