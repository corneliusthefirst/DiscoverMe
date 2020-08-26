/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, Image, TouchableOpacity, Text, StatusBar} from 'react-native';
import {Icon, View} from 'native-base';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import moment from 'moment';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 32 : StatusBar.currentHeight;

@observer
class VideoTopView extends Component {
  constructor(props) {
    super(props);
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
      height: '100%',
      width: '100%',
      // alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,0.01)',
      paddingTop: STATUS_BAR_HEIGHT + 6,
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
      fontSize: 20,
      marginRight: 10,
      color: 'white',
    },
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: this.props.showall ? '68%' : '100%',
          }}>
          <TouchableOpacity
            onPress={this.props.onBackPress}
            style={{
              alignSelf: 'center',
              marginLeft: this.props.showall ? 8 : 13,
            }}>
            <Icon name="arrowleft" type="AntDesign" style={this.styles.icon} />
          </TouchableOpacity>

          {this.props.showall ? (
            <Image
              source={{
                uri: this.props.sender.profile,
              }}
              style={this.styles.avatar}
            />
          ) : null}

          {this.props.showall ? (
            <View style={{flexDirection: 'column', marginLeft: 10}}>
              <Text
                style={[
                  this.styles.titleStyle,
                  {
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'sans-serif-condensed'
                        : 'Thonburi-Bold',
                  },
                ]}>
                {this.props.sender.nickname[0].toUpperCase() +
                  this.props.sender.nickname.slice(1)}
              </Text>
              <Text
                style={[
                  this.styles.subtitleStyle,
                  {
                    fontFamily:
                      Platform.OS === 'ios'
                        ? 'Thonburi-Light'
                        : 'sans-serif-light',
                  },
                ]}>
                {moment(this.props.created_at).format('DD MMM YYYY LT')}
              </Text>
            </View>
          ) : null}
        </View>

        {this.props.showall ? (
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => {}} style={this.styles.icon}>
              <Icon
                name="delete"
                type="MaterialIcons"
                style={(this.styles.icon, {color: '#c94c4c', fontSize: 22})}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={this.styles.icon}>
              <Icon
                name="star"
                type="MaterialIcons"
                style={[this.styles.icon, {marginLeft: 10}]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                name="share"
                type="MaterialCommunityIcons"
                style={[this.styles.icon, {fontSize: 25}]}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

VideoTopView.propTypes = {
  onBackPress: PropTypes.func,
};

export default VideoTopView;
