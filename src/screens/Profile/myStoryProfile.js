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
import uuid from 'react-native-uuid';
import {uniqBy} from 'lodash';

@observer
class MyStoriesProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMystories: false,
      Stories: [],
      openCamera: false,
      profile: '',
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
        this.props.navigation.navigate('Profile');
      },
      nomessage: true,
      directreturn: false,
      multiline: true,
      novideo: true,
    });
  };

  closeCamera = () => {
    this.setState({openCamera: false});
  };

  updateProfile = (data) => {
    this.setState({profile: data.source});
    stores.MystoriesStore.updateUserProfile(data.source, true).then(() => {});
  };

  openMyStories = () => {
    this.props.donotBlur();
    this.props.navigation.navigate('StoriesComponent', {
      Stories: [stores.MystoriesStore.mystories],
      istory: true,
      //isGoing: this.isGoing(),
    });
  };

  componentDidMount() {
   /* stores.MystoriesStore.setMyStory({
      phone: '00330666406835',
      username: 'Cornelius',
      profile: 'https://avatars0.githubusercontent.com/u/16208872?s=460&v=4',
      age: '22',
      updated_at: moment().format(),
      totalviews: 105300,
      bio:
        'Cornelius is a react-native developper,he likes playing football and is also a great fans of streaming mostley Netflix',
      stories: uniqBy(
        [
          {
            id: uuid.v4(),
            creator: '00330666406835',
            url: {
              source:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
              thumbnail:
                'http://img.youtube.com/vi/EQvMAgxVJXc/maxresdefault.jpg',
              duration: 99,
            },
            message: 'her is the message ofcourse',
            updated_at: moment().format(),
            type: 'video',
            isSeen: false,
            views: 100860,
            likes: 3120,
          },
          {
            id: uuid.v1(),
            creator: '00330666406835',
            url:
              'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            message:
              'In deep water, the waves of the tsunami have a period (time separating each peak) counting in tens of minutes, and can travel at more than 800  km / h , while not exceeding a few decimeters in height. But when approaching the coasts , their period and their speed decrease, while their amplitude increases, their height possibly exceeding 30  m 2 . They can then submerge the shore, flooding low ground, penetrating deep into the land, carrying everything in their path, in a succession of ebb and flow.',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 5230,
            likes: 471,
          },
          {
            id: uuid.v4(),
            creator: '00330666406835',
            url: {
              source:
                'file:///data/user/0/com.discovery/cache/react-native-image-crop-picker/VID-20200622-WA0010.mp4',
              thumbnail: 'http://img.youtube.com/vi/X_4jWK4Kbaw/default.jpg',
              duration: 99,
            },
            message: '',
            updated_at: moment().format(),
            type: 'video',
            isSeen: false,
            views: 3580,
            likes: 200,
          },
          {
            id: uuid.v1(),
            creator: '00330666406835',
            url: 'http://img.youtube.com/vi/HIkUcMgTy_g/maxresdefault.jpg',
            message: '',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 2870,
            likes: 400,
          },
          {
            id: uuid.v4(),
            creator: '00330666406835',
            url: 'http://img.youtube.com/vi/x6Lp0vHWC_o/maxresdefault.jpg',
            message: '',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 320,
            likes: 26,
          },
          {
            id: uuid.v1(),
            creator: '00330666406835',
            url: 'http://img.youtube.com/vi/Feu5jLg6P0Q/maxresdefault.jpg',
            message: '',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 10000,
            likes: 100,
          },
          {
            id: uuid.v4(),
            creator: '00330666406835',
            url: 'http://img.youtube.com/vi/_Ljz1rUKylE/maxresdefault.jpg',
            message: '',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 0,
            likes: 0,
          },
          {
            id: uuid.v1(),
            creator: '00330666406835',
            url: 'http://img.youtube.com/vi/MSKvgipY7wA/maxresdefault.jpg',
            message: '',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 120,
            likes: 60,
          },
          {
            id: uuid.v4(),
            creator: '00330666406835',
            url: 'http://img.youtube.com/vi/OFMAwBzaX5s/hqdefault.jpg',
            message: '',
            updated_at: moment().format(),
            type: 'image',
            isSeen: false,
            views: 40,
            likes: 20,
          },
        ],
        'id',
      ),
    }).then((data) => {
      console.warn('here', data);
    });*/
  }

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
              source={{
                uri: this.state.profile
                  ? this.state.profile
                  : this.props.mystories.profile,
              }}
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

          <Text>
            {ScreenLanguage.currentlang.Age + ' : ' + this.props.mystories.age}
          </Text>

          <RenderDate date={this.props.mystories.updated_at} />
        </View>
      </View>
    );
  }
}

export default MyStoriesProfile;
