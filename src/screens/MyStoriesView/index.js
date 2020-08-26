/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Icon} from 'native-base';
//import PropTypes from 'prop-types';
import stores from '../../stores/index';
import Swiper from 'react-native-swiper';
import ProgressiveImage from '../../components/screenComponents/ChatRoom/components/progressiveImage';
import AppStyles from '../../config/styles';

//let {height, width} = Dimensions.get('window');

class MyStoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  /*shouldComponentUpdate(nextProps) {
    if (_.isEqual(this.state, nextProps.state)) {
      return false;
    }
    return true;
  }*/
  componentDidMount() {
    //this.swiper.scrollBy(0, false);
  }

  styles = {
    avatar: {
      width: 34,
      height: 34,
      borderRadius: 17,
      overflow: 'hidden',
      alignSelf: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      flexDirection: 'column',
      backgroundColor: 'white',
    },

    titleStyle: {
      fontWeight: '300',
      fontSize: 16,
      color: 'white',
    },
    subtitleStyle: {
      fontWeight: '300',
      fontSize: 10,
      color: 'white',
    },
    icon: {
      fontSize: 22,
      marginRight: 10,
      color: AppStyles.colors.black,
    },
    likes: {
      fontSize: 10,
      color: 'gray',
    },
    likeView: {
      alignSelf: 'flex-start',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    imageSize: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  };

  onIndexChanged = (index) => {
    this.setState({index: index});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            height: 60,
            padding: 10,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={(this.styles.likeView, {marginLeft: 5})}>
              <TouchableOpacity
                onPress={this.props.onBackPress}
                style={{
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Icon
                  name="heart-outline"
                  type="MaterialCommunityIcons"
                  style={this.styles.icon}
                />
              </TouchableOpacity>
              <Text style={this.styles.likes}>
                {
                  stores.MystoriesStore.mystories.stories[this.state.index]
                    .likes
                }{' '}
                Likes
              </Text>
            </View>

            <View style={(this.styles.likeView, {marginLeft: 20})}>
              <TouchableOpacity
                onPress={this.props.onBackPress}
                style={{
                  alignSelf: 'center',
                  marginLeft: 8,
                }}>
                <Icon
                  name="eye-outline"
                  type="MaterialCommunityIcons"
                  style={this.styles.icon}
                />
              </TouchableOpacity>
              <Text style={this.styles.likes}>
                {
                  stores.MystoriesStore.mystories.stories[this.state.index]
                    .views
                }{' '}
                Views
              </Text>
            </View>

            {/* <View
              style={[this.styles.likeView, {marginLeft: 25, marginTop: -3}]}>
              <TouchableOpacity onPress={() => {}}>
                <Icon
                  name="share"
                  type="MaterialCommunityIcons"
                  style={[this.styles.icon, {fontSize: 25}]}
                />
              </TouchableOpacity>
              <Text style={this.styles.likes}>Mask</Text>
            </View>*/}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              //alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={[this.styles.icon, {marginTop: 7, marginRight: 3}]}>
              <Icon
                name="delete"
                type="MaterialIcons"
                style={(this.styles.icon, {color: '#c94c4c', fontSize: 22})}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Swiper
          ref={(ref) => (this.swiper = ref)}
          showsPagination={false}
          loop={true}
          index={0}
          showsButtons={false}
          loadMinimal={true}
          loadMinimalSize={2}
          onIndexChanged={(index) => this.onIndexChanged(index)}>
          {stores.MystoriesStore.mystories.stories.map((item, index) => {
            return (
              <View style={this.styles.container}>
                <View
                  style={{
                    height: '97%',
                    width: '98%',
                    backgroundColor: '#ededed',
                  }}>
                  {item.type === 'video' ? (
                    <ProgressiveImage
                      source={{uri: item.url.source}}
                      style={this.styles.imageSize}
                      duration={item.url.duration.toString()}
                      thumbnail={item.url.thumbnail}
                      {...this.props}
                      isvideo
                      disableAnimations
                      playViewStyle={{width: 46, height: 46, borderRadius: 23}}
                    />
                  ) : (
                    <ProgressiveImage
                      source={item.url}
                      style={this.styles.imageSize}
                      thumbnail={item.url}
                      isvideo={false}
                      disableAnimations
                      {...this.props}
                    />
                  )}
                </View>
              </View>
            );
          })}
        </Swiper>

        <View
          style={{
            height: 70,
            width: '93%',
            flexDirection: 'row',
            alignItems: 'flex-start',
            backgroundColor: 'white',
            padding: 5,
            paddingLeft: 0,
          }}>
          <Text style={{fontWeight: 'bold'}}>BIO : </Text>
          <View
            style={{display: 'flex', padding: 5, paddingTop: 0, width: '100%'}}>
            <Text numberOfLines={3} ellipsizeMode="tail">
              {stores.MystoriesStore.mystories.bio}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MyStoryView;
