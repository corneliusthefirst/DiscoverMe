/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {Thumbnail, Icon} from 'native-base';
import stores from '../../stores/index';
import {observer} from 'mobx-react';
import shadower from '../../components/shadower';
import ScreenMode from '../../components/screenMode';
import ScreenLanguage from '../../components/screenLanguage';
import GlobalFunctions from '../../components/globalFunctions';
import RenderDate from '../../components/RenderDate';
import moment from 'moment';
import DiscoveryCamera from '../../components/DiscoveryCamera';

@observer
class MyStoriesProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      isvideo: false,
      dataurl: {url: '', type: ''},
      viewMystories: false,
      Stories: [],
      openCamera: false,
      profile: props.mystories.profile,
    };
  }

  openCamera = () => {
    this.props.navigation.navigate('CameraScreen', {
      onCaptureFinish: (result) => this.updateProfile(result),
      onCameraReady: () => {},
      onMountError: (e) => {
        console.warn(e);
      },
      onClosed: () => {
        this.props.navigation.goBack();
      },
      nomessage: false,
      directreturn: false,
      multiline: true,
      novideo: false,
    });
  };

  closeCamera = () => {
    this.setState({openCamera: false});
  };

  updateProfile = (data) => {
    this.setState({profile: data.source});
    //stores.MystoriesStore.updateUserProfile(data.source, true).then(() => {});
  };

  openMyStories = () => {
    this.props.navigation.navigate('StoriesComponent', {
      Stories: [stores.MystoriesStore.mystories],
      istory: true,
      //isGoing: this.isGoing(),
    });
  };

  render() {
    return (
      <View style={{height: 100, flexDirection: 'row'}}>
        <View>
          <TouchableWithoutFeedback
            onPress={() => {
              this.openMyStories();
            }}>
            <Thumbnail
              style={{height: 90, width: 90, borderRadius: 45, margin: 12}}
              source={{uri: this.state.profile}}
            />
          </TouchableWithoutFeedback>
          <View
            style={{
              ...shadower(),
              position: 'absolute',
              height: 40,
              width: 40,
              borderRadius: 30,
              backgroundColor: ScreenMode.colors.sendMessage,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
              marginTop: 65,
              right: 0,
              borderWidth: 2,
              borderColor: 'white',
            }}>
            <Icon
              name="add-a-photo"
              active={true}
              type="MaterialIcons"
              style={{color: 'white', fontSize: 22}}
              onPress={() => this.openCamera()}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={{fontWeight: '700'}}>
            {this.props.mystories.username}
          </Text>
          <Text>
            {ScreenLanguage.currentlang.TotalViews +
              GlobalFunctions.ShowViews(this.props.mystories.totalviews)}
          </Text>

          <RenderDate date={this.props.mystories.updated_at} />
        </View>

        {this.state.openCamera && (
          <DiscoveryCamera
            isOpen={this.state.openCamera}
            onClosed={this.closeCamera}
            onCaptureFinish={this.createStory}
            nomessage={false}
            directreturn={false}
            multiline={true}
            onCameraReady={() => {
              console.warn('camera is  ready');
            }}
            onMountError={(e) => {
              console.warn(e);
            }}
            novideo={true}
          />
        )}
      </View>
    );
  }
}

export default MyStoriesProfile;

/**
 *
  componentDidMount() {
    stores.MystoriesStore.setMyStory({
      phone: '00330666406835',
      username: 'Cornelius',
      profile:
        'https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      age: '',
      updated_at: moment().format(),
      totalviews: 105300,
      stories: [
        {
          id: '02',
          creator: '00330666406835',
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
          id: '03',
          creator: '00330666406835',
          url:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
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
          url:
            'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
          message: 'got to https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 and see what is been done concretely',
          updated_at: moment().format(),
          type: 'image',
          isSeen: false,
          views: 2870,
          likes: 400,
        },
        {
          id: '05',
          creator: '00330666406835',
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
          creator: '00330666406835',
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
          creator: '00330666406835',
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
          id: '08',
          creator: '00330666406835',
          url:
            '../../../../Stokage interne/WhatsApp/Media/WhatsApp Video/VID-20200531-WA0001.mp4',
          message: '',
          updated_at: moment().format(),
          type: 'video',
          isSeen: false,
          views: 120,
          likes: 60,
        },
        {
          id: '09',
          creator: '00330666406835',
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
          creator: '00330666406835',
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
    }).then((data) => {
      console.warn('here', data);
    });
  }
 */
