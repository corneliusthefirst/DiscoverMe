import { observable, action } from "mobx";
import {
  filter,
  dropWhile,
  find,
  findIndex,
  indexOf,
  uniqBy,
  uniq,
  reject,
} from "lodash";
import storage from "./Storage";
import request from "../services/requestObjects";
import tcpRequest from "../services/tcpRequestData";
import ServerEventListener from "../services/severEventListener";
import stores from ".";
export default class likes {
  constructor() {
    this.readFromStore().then((likes) => {
      this.setPropties(likes);
    });
    /*storage.remove({
      key: 'likes'
    });*/
  }
  @observable likes = [];
  saveKey = {
    key: "likes",
    data: [{}],
  };
  @action loadLikes(id) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((likes) => {
        if (likes && likes.length > 0) {
          let like = find(likes, {
            event_id: id,
          });
          if (like) {
            like.likers = uniq(like.likers);
            resolve(like);
          } else {
            resolve({ event_id: id, likers: [] });
          }
        } else {
          resolve({ event_id: id, likers: [] });
        }
      });
    });
  }
  getLikesFromRemote(id, action, start, end) {
    return new Promise((resolve, reject) => {
      let ID = request.EventID();
      ID.event_id = id;
      ID.action = action;
      ID.start = start;
      ID.end = end;
      tcpRequest.getLikes(ID, id + "get_likes").then((DataJSON) => {
        ServerEventListener.sendRequest(DataJSON, id + "get_likes")
          .then((Like) => {
            if (Like.data == "empty")
              resolve(action == "count" ? { liked: false, count: 0 } : []);
            else if (Like.data.likers) resolve(Like.data.likers);
            else resolve(Like.data);
          })
          .catch((error) => {
            console.warn("error from remote like catch")
            reject(error);
          });
      });
    });
  }
  @action like(ID, Liker, likesCount, inform) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Likes) => {
        if (Likes && Likes.length > 0) {
          this.addLike(Likes, {
            event_id: ID,
            likers: [Liker],
            likes: likesCount,
          }).then(() => {
            resolve();
          });
        } else {
          this.addLike([], {
            event_id: ID,
            likers: [Liker],
            likes: likesCount,
          }).then(() => {
            resolve();
          });
        }
      });
    });
  }
  @action setPropties(data) {
    this.likes = data;
  }
  @action addLike(Likes, Like) {
    return new Promise((resolve, reject) => {
      let index = findIndex(Likes, { event_id: Like.event_id })
      if (index >= 0) {
        Likes[index] = Like
      } else {
        Likes.push(Like);
      }
      this.saveKey.data = uniqBy(Likes, "event_id");
      storage.save(this.saveKey).then(() => {
        this.setPropties(this.saveKey.data);
        resolve();
      });
    });
  }
  @action unlike(ID, phone, likesCount, inform) {
    return new Promise((resolve, rejec) => {
      this.readFromStore().then((Likes) => {
        if (Likes.length !== 0) {
          Likes = reject(Likes, { event_id: ID });
          this.addLike(Likes, {
            event_id: ID,
            likers: [],
            likes: likesCount,
            liked:false
          }).then(() => {
            resolve();
          });
        } else {
          this.addLike([], {
            event_id: ID,
            likers: [],
            liked:false,
            likes: likesCount,
          }).then(() => {
            resolve();
          });
        }
      });
    });
  }
  loadAllLikes() {
    this.readFromStore().then((likes) => {
      this.setPropties(likes);
    });
  }
  @action UpdateEventLikes(EvenID, NewLikes) {
    return new Promise((resolve, reject) => {
      this.readFromStore().then((Likes) => {
        Likes = reject(Likes, ["event_id", EvenID]);
        Likes = Likes.concat(NewLikes);
        this.saveKey.data = Likes;
        storage.save(this.saveKey).then(() => {
          resolve();
        });
      });
    });
  }
  readFromStore() {
    return new Promise((resolve, reject) => {
      storage
        .load({
          key: "likes",
          autoSync: true,
        })
        .then((Likes) => {
          resolve(Likes);
        })
        .catch((error) => {
          resolve([]);
        });
    });
  }
}
