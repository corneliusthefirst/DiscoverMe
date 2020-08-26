import moment from 'moment';
import {concat, uniqBy} from 'lodash';
import uuid from 'react-native-uuid';

let newMessages = [
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text:
      'A 07h58 et 53 secondes (heure locale), un séisme secoue l océan Indien. Son épicentre se situe à 250 kilomètres au sud-ouest de l île indonésienne de Sumatra.Le tremblement de terre est initialement estimé à 6,4 sur l échelle de Richter par le Bureau de géophysique de Djakarta. En réalité, il atteint entre 9 et 9.3 de magnitude, ce qui en fait l un des plus puissants jamais enregistrés à ce jour.',
    sender: {
      phone: '+330666406015',
      nickname: 'Esperansita Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: moment().days('-1'),
      participant: [
        {
          phone: '+330666406835',
          nickname: 'Ludmilla',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/53.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: true, period: ''},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406015',
          nickname: 'miley',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: false, period: ''},
          refused: {state: true, period: ''},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406014',
          nickname: 'Jonathan',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/52.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: false, period: ''},
          refused: {state: true, period: moment().days('-5')},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406022',
          nickname: 'Deko',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: true, period: moment().days('-7')},
          refused: {state: false, period: ''},
          done: {state: true, period: moment().days('-3')},
        },
        {
          phone: '+330666406018',
          nickname: 'Channel',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: true, period: moment().days('-3')},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
      ],
    },
    created_at: moment().days('-6'), //cree il ya -6jours et cest passe hier
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text:
      'C est en approchant des terres, quand le plancher océanique remonte, que la vague géante se forme. Dans le cas présent, la vague atteindra jusqu à 35 mètres de hauteur en frappant l île indonésienne de Sumatra.',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: false,
    },
    remind: {
      groupname: 'GTA Reborn',
      period: moment().days('+12'),
      doneBymeOnly: true,
      participant: [
        {
          phone: '+330666406835',
          nickname: 'Myria',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/26.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: true, period: moment().days('+1')},
          refused: {state: false, period: ''},
          done: {state: true, period: moment().days('+3')},
        },
        {
          phone: '+330666406015',
          nickname: 'Sandrita',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: true, period: ''},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
      ],
    },
    created_at: moment().days('-1'), //cree il ya moin de 1jour et sa passe demain
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text:
      'Wind était un opérateur de télécommunications italien. La société offrait des services de téléphonie fixe, portable, Internet et la télévision par câble. Wind est le troisième opérateur mobile Italie avec 18,3 % du marché, et le second sur le marché de la téléphonie fixe. Son siège se situe à Rome. Wind était le principal sponsor de l équipe de football A.S. Roma.',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: 'GTA ViceCity Group',
      period: moment().days('+10'),
      participant: [
        {
          phone: '+330666406835',
          nickname: 'James',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/23.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: true, period: ''},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406015',
          nickname: 'Antonio',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: false, period: ''},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406025',
          nickname: 'Ramires',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: true, period: moment().days('+5')},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406012',
          nickname: 'Charles',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/22.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: false, period: ''},
          refused: {state: true, period: moment().days('+6')},
          done: {state: false, period: ''},
        },
      ],
    },
    created_at: moment().days('-1'), //cree il ya moin de 1jour et sa passe demain
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source:
        'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text:
        'War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj Films.',
    },
    sender: {
      phone: '+330666406015',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: moment().days('+12'),
      participant: [
        {
          phone: '+330666406835',
          nickname: 'Fokam',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: false, period: ''},
          refused: {state: true, period: moment().days('+6')},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406015',
          nickname: 'Suleman',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: false, period: ''},
          refused: {state: true, period: ''},
          done: {state: false, period: ''},
        },
      ],
    },
    created_at: moment().days('-3'), //cree il ya moin de 1jour et sa passe demain
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source:
        'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text:
        'War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj Films.',
    },
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/52.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: moment().days('+12'),
      participant: [
        {
          phone: '+330666406835',
          nickname: 'Fokam',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: true,
          accepted: {state: false, period: ''},
          refused: {state: true, period: moment().days('+6')},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406015',
          nickname: 'Suleman',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/92.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: false, period: ''},
          refused: {state: true, period: ''},
          done: {state: false, period: ''},
        },
      ],
    },
    created_at: moment().days('-3'), //cree il ya moin de 1jour et sa passe demain
  },
];

const createRemindsSimulation = () => {
  let messages = [];
  for (let i = 0; i < 10; i++) {
    let group = newMessages;
    messages = concat(messages, uniqBy(group, 'id'));
  }
  console.warn(messages.length);
  return messages;
};

export default createRemindsSimulation();
