import moment from 'moment';
import {concat, uniqBy} from 'lodash';
import uuid from 'react-native-uuid';

const newVotes = () => {
  return [
    {
      id: uuid.v1(),
      support: true,
      media: true,
      multiselect: false,
      done: false,
      type: 'vote', // 2nd option is'survey'
      sponsored: true, //if sponsored a sponsorised text would be on the vote or survey
      creatorInfo: {
        phone: '0666406835',
        profile:
          'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        nickname: 'Cornelius',
      },
      context:
        'Vote context for miss of Platza Grenoble please make you choice',
      updated_at: moment().days('-2'),
      data: [
        {
          subject: 'lutmila',
          media: {
            profile:
              'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
          supported: false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
          voted: false,
        },
        {
          subject: 'Marina',
          media: {
            profile:
              'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: true,
        },
        {
          subject: 'Daniella ',
          media: {
            profile:
              'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: false,
        },
        {
          subject: 'Florencia',
          media: {
            profile:
              'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: false,
        },
        {
          subject: 'Grace',
          media: {
            profile:
              'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
          supported: false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
          voted: false,
        },
        {
          subject: 'Joana',
          media: {
            profile:
              'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: true,
        },
        {
          subject: 'Daniella ',
          media: {
            profile:
              'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: false,
        },
        {
          subject: 'Mariama',
          media: {
            profile:
              'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: false,
        },
        {
          subject: 'Christine',
          media: {
            profile:
              'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
          supported: false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
          voted: false,
        },
        {
          subject: 'Zelda',
          media: {
            profile:
              'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: true,
        },
        {
          subject: 'Jessica',
          media: {
            profile:
              'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: false,
        },
        {
          subject: 'Lidiane',
          media: {
            profile:
              'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection: [
              {
                photo: '',
                video: '',
                message: '',
              },
              {
                photo: '',
                video: '',
                message: '',
              },
            ],
          },
          support: 'specific support_id',
          voted: false,
        },
      ],
    },
  ];
};

const createVotesSimulation = () => {
  let votes = [];
  for (let i = 0; i < 10; i++) {
    let group = newVotes();
    votes = concat(votes, uniqBy(group, 'id'));
  }
  //console.warn(votes.length);
  return votes;
};

export default createVotesSimulation();
