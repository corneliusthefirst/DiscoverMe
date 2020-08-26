import moment from 'moment';
import stores from '../stores';
class Request {
  constructor() {}

  presence() {
    return {
      nothing: 'this request is usually empty',
    };
  }

  Update() {
    return {
      action: '',
      relation_id: '',
      phone: '',
      notes_update: [],
      calendar_id: '',
      closed: false,
      recurrent_update: this.recurrent_update(),
      about_update: this.AboutUpdate(),
      participant_update: this.ParticipantUpdate(),
      location_update: this.LocationUpdate(),
      period_update: '',
      who_can_update_update: null,
      background_update: '',
      participant: [this.Participant()],
    };
  }

  ParticipantUpdate() {
    return {
      action: '',
      phone: '',
      master: '',
      status: '',
      host: '',
    };
  }

  PeriodUpdate() {
    return {
      action: '',
      date: '',
      time: '',
    };
  }

  LocationUpdate() {
    return {
      action: '',
      string: '',
      url: '',
    };
  }

  Remind() {
    return {
      message_id: '',
      created_at: moment().format(),
      updated_at: moment().format(),
      creator: stores.LoginStore.user.phone,
      accepted: true,
      period: moment().format(),
      isDone: false,
    };
  }

  Relation() {
    return {
      id: '',
      relation_host: stores.Session.SessionStore.host,
      created_at: moment().format(),
      creator_phone: stores.LoginStore.user.phone,
      participants: [], //data here of form UserStories for both 2,update if for one or the other update also used for discoveries
      latest_message: '',
    };
  }

  Invitation() {
    return {
      inviter: '',
      invitee: '',
      invitation_id: '',
      host: '',
      period: '',
      relation_id: '',
    };
  }

  Invite() {
    return {
      invitee: '',
      invitation: this.Invitation(),
      host: '',
    };
  }

  Period() {
    return {
      time: this.Time(),
      date: this.Date(),
    };
  }

  Location() {
    //this would be updated frequently and use to obtain users closer to you
    return {
      string: '',
      url: '',
    };
  }

  Participant() {
    return {
      phone: '',
      master: false,
      status: 'invited',
      host: '',
    };
  }

  LeaveRelation() {
    return {
      relation_id: '',
      phone: '',
    };
  }

  LeaveDiscovery() {
    return {
      discovery_id: '',
      phone: '',
    };
  }

  Contact() {
    return {
      phone: '',
      host: '',
    };
  }

  User() {
    return {
      phone: '',
      nick_name: '',
      name: '',
      current_host: '',
      email: '',
      age: '',
      status: '',
      profile: '',
      profile_ext: '',
      password: '',
      country_code: '',
    };
  }

  UserStories() {
    //i don't put only the ids for story but the whole object
    return {
      phone: '',
      username: '',
      profile: '',
      updated_at: '',
      totalviews: 0,
      stories: [],
    };
  }

  Story() {
    //An array of this would be fetch and return on call to mystories
    return {
      id: '',
      creator: '', //phone
      url: {},
      updated_at: moment().format(),
      message: '',
      type: '',
      isSeen: false,
      views: 0,
      likes: 0,
    };
  }

  Message() {
    return {
      id: '',
      text: '',
      photo: '',
      video: '',
      created_at: moment().format(),
      updated_at: moment().format(),
      received: [
        {phone: stores.LoginStore.user.phone, date: moment().format()},
      ],
      relation_id: '',
      remind: {},
    };
  }
  MessageAction() {
    return {
      action: '',
      data: '',
      committee_id: '',
      relation_id: '',
    };
  }
}

const request = new Request();

export default request;
