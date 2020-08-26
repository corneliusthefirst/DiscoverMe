import moment from 'moment';
import {concat, uniqBy} from 'lodash';
import uuid from 'react-native-uuid';

let newReceivedData = [
  {
    id: uuid.v1(),
    receiver_phone: '',
    updated_at: moment().format(),
    accept: false,
    refuse: false,
    senderInfo: {
      phone: '0418724307',
      host: '',
      nickname: 'heavycat176',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
        large: 'https://randomuser.me/api/portraits/women/83.jpg',
      },
    },
  },
  {
    id: uuid.v1(),
    receiver_phone: '',
    updated_at: moment().format(),
    accept: true,
    refuse: false,
    senderInfo: {
      phone: '',
      host: '',
      nickname: 'happyzebra486',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/86.jpg',
        large: 'https://randomuser.me/api/portraits/women/86.jpg',
      },
    },
  },
  {
    id: uuid.v1(),
    receiver_phone: '',
    updated_at: moment().format(),
    accept: false,
    refuse: true,
    senderInfo: {
      phone: '(763)-702-8244',
      host: '',
      nickname: 'bigduck197',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
        large: 'https://randomuser.me/api/portraits/men/5.jpg',
      },
    },
  },
  {
    id: uuid.v1(),
    receiver_phone: '',
    updated_at: moment().format(),
    accept: false,
    refuse: false,
    senderInfo: {
      phone: '(965)-052-5359',
      host: '',
      nickname: 'biggoose900',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/86.jpg',
        large: 'https://randomuser.me/api/portraits/men/86.jpg',
      },
    },
  },
  {
    id: uuid.v1(),
    receiver_phone: '',
    updated_at: moment().format(),
    accept: true,
    refuse: false,
    senderInfo: {
      phone: '978-689-676',
      host: '',
      nickname: 'browntiger427',
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
        large: 'https://randomuser.me/api/portraits/women/91.jpg',
      },
    },
  },
];

const createRemindsSimulation = () => {
  let received = [];
  for (let i = 0; i < 3; i++) {
    let group = newReceivedData;
    received = concat(received, uniqBy(group, 'id'));
  }
  //console.warn(received.length);
  return received;
};

export default createRemindsSimulation();
