/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Platform, Image, TouchableOpacity, Text} from 'react-native';
import {Icon, View} from 'native-base';
import PropTypes from 'prop-types';
import ScreenMode from '../../../screenMode';
import {observer} from 'mobx-react';
import Header from '../../header';

//const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 32 : StatusBar.currentHeight;

@observer
class Toolbar extends Component {
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
      flex: 1,
      alignItems: 'flex-end',
      marginBottom: 10,
      flexDirection: 'row',
      backgroundColor: ScreenMode.colors.headerBackground,
    },

    titleStyle: {
      fontWeight: '300',
      fontSize: 16,
      color: ScreenMode.colors.headerText,
    },
    subtitleStyle: {
      fontWeight: '300',
      fontSize: 10,
      color: ScreenMode.colors.headerText,
    },
    icon: {
      fontSize: 20,
      marginRight: 10,
      color: ScreenMode.colors.headerIconColor,
    },
  };

  headerBody = () => {
    return (
      <View style={this.styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={this.props.onBackPress}
            style={{
              alignSelf: 'center',
              marginLeft: 8,
            }}>
            <Icon name="arrowleft" type="AntDesign" style={this.styles.icon} />
          </TouchableOpacity>

          <Image
            source={{
              uri: this.props.user.picture.thumbnail,
            }}
            style={this.styles.avatar}
          />

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
              {this.props.user.name.first[0].toUpperCase() +
                this.props.user.name.first.slice(1) +
                ' ' +
                this.props.user.name.last[0].toUpperCase() +
                this.props.user.name.last.slice(1)}
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
              Active 32 minutes ago
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {/*<TouchableOpacity onPress={() => {}} style={this.styles.icon}>
            <Icon name="call" type="MaterialIcons" style={this.styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={this.styles.icon}>
            <Icon
              name="videocam"
              type="MaterialIcons"
              style={this.styles.icon}
            />
          </TouchableOpacity>*/}
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="dots-three-vertical"
              type="Entypo"
              style={[this.styles.icon, {fontSize: 19, marginRight: 12}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Header
        height={52}
        barStyle={ScreenMode.colors.statusbarStyle}
        headerBody={this.headerBody}
      />
    );
  }
}

Toolbar.propTypes = {
  onBackPress: PropTypes.func,
};

export default Toolbar;
