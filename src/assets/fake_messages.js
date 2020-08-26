import moment from 'moment';
import {concat, uniqBy} from 'lodash';
import uuid from 'react-native-uuid';

let newMessages = [
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    user: 1,
    creator: 2,
    type: 'text',
    text: 'hello',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('0'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'They said we are the one who did that sheat',
    sender: {
      phone: '+330666406425',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-2'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'hello',
    sender: {
      phone: '+330666406821',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'yo bro',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'may be it was the case',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'You are not really talking about me?',
    sender: {
      phone: '+330666406135',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'Do you say you for some special reason?',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-5'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text:
      'Yeah An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.On a Unix system you can view the manual pages from the command line using Atom , Eclipse (ErlIDE) and IntelliJ IDEA.',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'Oh, I see?',
    sender: {
      phone: '+330666406415',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'Ok',
    sender: {
      phone: '+330666406415',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
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
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
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
      text: '',
    },
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source:
        'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text: '',
    },
    sender: {
      phone: '+330666406415',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-15'),
  },
  {
    id: uuid.v1(),
    source: 'http://192.168.43.32:8555/sound/get/p2.mp3',
    file_name: 'p2.mp3',
    total: 0,
    received: 0,
    user: 2,
    creator: 2,
    type: 'audio',
    sender: {
      phone: '+330666406835',
      nickname: 'Cornelius jugal',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    isSeen: true,
    duration: Math.floor(Math.random() * 400).toString(),
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    source: 'http://192.168.43.32:8555/sound/get/p2.mp3',
    file_name: 'p2.mp3',
    total: 0,
    received: 0,
    user: 2,
    creator: '+330666406415',
    type: 'audio',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    isSeen: false,
    duration: Math.floor(Math.random() * 15000).toString(),
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source:
        'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text:
        'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    },
    sender: {
      phone: '+330666406415',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-1'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'video',
    url: {
      source:
        'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200622-WA0010.mp4',
      thumbnail: 'http://img.youtube.com/vi/X_4jWK4Kbaw/default.jpg',
      text:
        'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
      duration: 29,
    },
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-1'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'video',
    url: {
      source:
        'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
      thumbnail: 'http://img.youtube.com/vi/qY0Io9aeJQw/default.jpg',
      text: '',
      duration: 99,
    },
    sender: {
      phone: '+330666406015',
      nickname: 'Moise Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-1'),
  },
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
          accepted: {state: true, period: moment().days('1')},
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
          refused: {state: false, period: ''},
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
          refused: {state: true, period: moment().days('2')},
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
          accepted: {state: false, period: ''},
          refused: {state: true, period: moment().days('2')},
          done: {state: true, period: moment().days('2')},
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
          accepted: {state: false, period: ''},
          refused: {state: true, period: moment().days('2')},
          done: {state: true, period: moment().days('2')},
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
          accepted: {state: true, period: moment().days('+3')},
          refused: {state: false, period: ''},
          done: {state: true, period: moment().days('+10')},
        },
        {
          phone: '+330666406015',
          nickname: 'Suleman',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: false, period: ''},
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
          accepted: {state: false, period: ''},
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
          accepted: {state: false, period: ''},
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
          accepted: {state: true, period: moment().days('+5')},
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
          refused: {state: true, period: moment().days('+9')},
          done: {state: false, period: ''},
        },
        {
          phone: '+330666406015',
          nickname: 'Suleman',
          picture: {
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
            large:
              'https://images.unsplash.com/profile-1531581190171-0cf831d86212?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff',
          },
          master: false,
          accepted: {state: false, period: ''},
          refused: {state: false, period: ''},
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
    type: 'video',
    url: {
      source:
        'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200622-WA0010.mp4',
      thumbnail: 'http://img.youtube.com/vi/MSKvgipY7wA/default.jpg',
      text: '',
      duration: 29,
    },
    sender: {
      phone: '+330666406835',
      nickname: 'Jonas Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-1'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source: 'http://img.youtube.com/vi/x6Lp0vHWC_o/maxresdefault.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text: '',
    },
    sender: {
      phone: '+330666406415',
      nickname: 'Kamgue Victorine',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    created_at: moment().days('-1'),
  },
  {
    //here start reply content
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source: 'http://img.youtube.com/vi/x6Lp0vHWC_o/maxresdefault.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text: '',
    },
    sender: {
      phone: '+330666406415',
      nickname: 'Kamgue Victorine',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    reply: {
      id: 3,
      user: 2,
      text:
        'Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules',
      replyer_name: 'Santers Gipson',
      type: 'photo',
      url: {
        source:
          'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
        text:
          'War is a 2019 Indian Hindi-language action thriller film directed by Siddharth Anand and produced by Aditya Chopra under his banner Yash Raj Films.',
      },
    },
    created_at: moment().days('-1'),
  },
  {
    //photo reply without text
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'photo',
    url: {
      source: 'http://img.youtube.com/vi/x6Lp0vHWC_o/maxresdefault.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
      text: '',
    },
    sender: {
      phone: '+330666406415',
      nickname: 'Kamgue Victorine',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: false,
      isSeen: false,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    reply: {
      id: 5,
      user: 3,
      text:
        'Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules',
      replyer_name: 'Santers Gipson',
      type: 'photo',
      url: {
        source:
          'https://images.unsplash.com/photo-1476292026003-1df8db2694b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
        text: '',
      },
    },
    created_at: moment().days('-1'),
  },
  {
    //video reply with text
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'video',
    url: {
      source:
        'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200622-WA0010.mp4',
      thumbnail: 'http://img.youtube.com/vi/MSKvgipY7wA/default.jpg',
      text: '',
      duration: 29,
    },
    sender: {
      phone: '+330666406015',
      nickname: 'Jonas Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    reply: {
      id: 3,
      user: 2,
      text:
        'Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules',
      replyer_name: 'Santers Gipson',
      type: 'video',
      url: {
        source:
          'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
        thumbnail: 'http://img.youtube.com/vi/qY0Io9aeJQw/default.jpg',
        text: 'Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules',
        duration: 99,
      },
    },
    created_at: moment().days('-1'),
  },
  {
    //video reply without text in reply
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'video',
    url: {
      source:
        'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200622-WA0010.mp4',
      thumbnail: 'http://img.youtube.com/vi/MSKvgipY7wA/default.jpg',
      text: '',
      duration: 29,
    },
    sender: {
      phone: '+330666406835',
      nickname: 'Jonas Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    reply: {
      id: 3,
      user: 2,
      text: '',
      replyer_name: 'Santers Gipson',
      type: 'video',
      url: {
        source:
          'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
        thumbnail: 'http://img.youtube.com/vi/qY0Io9aeJQw/default.jpg',
        text: '',
        duration: 99,
      },
    },
    created_at: moment().days('-1'),
  },
  {
    id: uuid.v1(),
    total: 0,
    received: 0,
    creator: 2,
    type: 'text',
    text: 'A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.[1][2] The word galaxy is derived from the Greek galaxias (γαλαξίας), literally "milky", a reference to the Milky Way. ',
    sender: {
      phone: '+330666406835',
      nickname: 'Sokeng Kamga',
      profile: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
      send: true,
      isSeen: true,
    },
    remind: {
      groupname: '',
      period: '',
      participant: [],
    },
    reply: {
      id: 3,
      user: 2,
      text: '',
      replyer_name: 'Santers Gipson',
      type: 'video',
      url: {
        source:
          'https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4',
        thumbnail: 'http://img.youtube.com/vi/qY0Io9aeJQw/default.jpg',
        text: '',
        duration: 29,
      },
    },
    created_at: moment().format(),
  },
];

const createMessagesSimulation = () => {
  let messages = [];
  for (let i = 0; i < 5; i++) {
    let group = newMessages;
    messages = concat(messages, uniqBy(group, 'id'));
  }
  console.warn(messages.length);
  return messages;
};

export default createMessagesSimulation();

/**  {
    id: uuid.v1(),
    source: 'http://192.168.43.32:8555/sound/get/p2.mp3',
    file_name: 'p2.mp3',
    total: 0,
    received: 0,
    user: 2,
    creator: 2,
    type: 'audio',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
    },
    duration: Math.floor(0),
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    //source: 'http://192.168.43.32:8555/sound/get/p2.mp3',
    file_name: 'p2.mp3',
    total: 0,
    received: 0,
    user: 1,
    creator: 2,
    type: 'text',
    text: 'hello',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
    },
    duration: Math.floor(0),
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    sender: {
      phone: 2,
      nickname: 'Sokeng Kamga',
    },
    user: 1,
    reply: {
      id: 3,
      user: 2,
      text: `Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>`,
      video: true,
      replyer_name: 'Santers Gipson',
      source:
        'http://192.168.43.32:8555/sound/get/bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg',
    },
    creator: 3,
    type: 'photo',
    photo:
      'http://192.168.43.32:8555/sound/get/bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg',
    file_name:
      'bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg',
    created_at: moment().format(),
    text: 'Hello!',
  },
  {
    id: uuid.v1(),
    source:
      'http://192.168.43.32:8555/video/get/bma9auo13ult3nh5n690_bma9auo13ult3nh5n69g_bma9auo13ult3nh5n6a0.mp4',
    file_name:
      'bma9auo13ult3nh5n690_bma9auo13ult3nh5n69g_bma9auo13ult3nh5n6a0_thumbnail.jpeg',
    thumbnailSource:
      'http://192.168.43.32:8555/video/thumbnail/get/bma9auo13ult3nh5n690_bma9auo13ult3nh5n69g_bma9auo13ult3nh5n6a0_thumbnail.jpeg',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
    },
    user: 2,
    creator: 3,
    type: 'video',
    received: 0,
    total: 0,
    reply: {
      id: 2,
      user: 3,
      text: `Hello!  Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>`,
      video: true,
      replyer_name: 'Santers Gipson',
      source:
        'http://192.168.43.32:8555/sound/get/bm33r9813uloeua1aasg_bm33r9813uloeua1aat0_bm33r9813uloeua1aatg.jpg',
    },
    text: `Hello!
        Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>
You can of course use any editor you like to write Erlang programs, but if you use Emacs there exists editing support such as indentation, syntax highlighting, electric commands, module name verification, comment support including paragraph filling, skeletons, tags support and more. See the Tools application for details.
There are also Erlang plugins for other code editors Vim (vim-erlang) , Atom , Eclipse (ErlIDE) and IntelliJ IDEA.`,
    duration: Math.floor(0),
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    source:
      'http://192.168.43.32:8555/video/get/bm6lgk013ult9gc75vmg_bm6lgk013ult9gc75vn0_bm6lgk013ult9gc75vng.mp4',
    file_name: 'Black M - Le prince Aladin (Clip officiel) ft. Kev Adams.mp4',
    thumbnailSource:
      'http://192.168.43.32:8555/video/thumbnail/get/bm7sd5813ulrbjp7u1sg_bm7sd5813ulrbjp7u1t0_bm7sd5813ulrbjp7u1tg_thumbnail.jpeg',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
    },
    user: 2,
    creator: 2,
    type: 'attachement',
    received: 0,
    total: 0,
    text: `Hello!
        Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>
You can of course use any editor you like to write Erlang programs, but if you use Emacs there exists editing support such as indentation, syntax highlighting, electric commands, module name verification, comment support including paragraph filling, skeletons, tags support and more. See the Tools application for details.
There are also Erlang plugins for other code editors Vim (vim-erlang) , Atom , Eclipse (ErlIDE) and IntelliJ IDEA.

`,
    duration: Math.floor(0),
    created_at: moment().format(),
  },
  {
    id: uuid.v1(),
    source:
      'http://192.168.43.32:8555/video/get/Black M - Le prince Aladin (Clip officiel) ft. Kev Adams.mp4',
    file_name:
      'bm6lgk013ult9gc75vmg_bm6lgk013ult9gc75vn0_bm6lgk013ult9gc75vng.mp4',
    thumbnailSource:
      'http://192.168.43.32:8555/video/thumbnail/get/bm7sd5813ulrbjp7u1sg_bm7sd5813ulrbjp7u1t0_bm7sd5813ulrbjp7u1tg_thumbnail.jpeg',
    sender: {
      phone: 3,
      nickname: 'Sokeng Kamga',
    },
    type: 'video',
    user: 3,
    creator: 2,
    received: 0,
    total: 0,
    text: `Hello!
        Erlang/OTP is divided into a number of OTP applications. An application normally contains Erlang modules. Some OTP applications, such as the C interface erl_interface, are written in other languages and have no Erlang modules.
On a Unix system you can view the manual pages from the command line using
    % erl -man <module>
You can of course use any editor you like to write Erlang programs, but if you use Emacs there exists editing support such as indentation, syntax highlighting, electric commands, module name verification, comment support including paragraph filling, skeletons, tags support and more. See the Tools application for details.
There are also Erlang plugins for other code editors Vim (vim-erlang) , Atom , Eclipse (ErlIDE) and IntelliJ IDEA.

`,
    duration: Math.floor(0),
    created_at: moment().format(),
  }, */
