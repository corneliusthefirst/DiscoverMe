/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Easing,
} from 'react-native';
import _ from 'lodash';
import Avatar from '../Avatar';
import styles from './styles';
import PropTypes from 'prop-types';
import {Icon} from 'native-base';
import ScreenMode from '../../screenMode';
import {observer} from 'mobx-react';

@observer
class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dicoverClick: false,
      scaleValue: new Animated.Value(0),
    };
    this.rotateValue = new Animated.Value(0); // declare animated value
  }

  /*
  shouldComponentUpdate(nextProps) {
    if (
      _.isEqual(this.props.item, nextProps.item) &&
      _.isEqual(this.state, nextProps.state)
    ) {
      return false;
    }
    return true;
  }*/

  openChatRoom = (item) => {
    this.props.donotBlur && this.props.donotBlur();
    !this.props.active && this.props.navigation.navigate('ChatRoom', {item});
  };

  toggleTrip = () => {
    Animated.timing(this.rotateValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    this.setState({dicoverClick: !this.state.dicoverClick});
    //this.rotateValue = new Animated.Value(0);
  };

  render() {
    let rotation = this.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'], // degree of rotation
    });
    let transformStyle = {transform: [{rotate: rotation}]};

    return this.props.simple ? (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress ? this.props.onPress() : null;
        }}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => {}}>
            <Avatar
              uri={this.props.item.picture.thumbnail}
              enableDot={this.props.active ? true : false}
            />
          </TouchableOpacity>
          <Text style={[styles.userName, {color: ScreenMode.colors.bodyText}]}>
            {this.props.item.name[0].toUpperCase() +
              this.props.item.name.slice(1)}
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableWithoutFeedback
        onPress={() => {
          this.openChatRoom(this.props.item);
        }}>
        <View style={styles.item}>
          <Avatar
            uri={this.props.item.picture.thumbnail}
            enableDot={this.props.active ? true : false}
          />
          <Text style={[styles.userName, {color: ScreenMode.colors.bodyText}]}>
            {this.props.item.name.first[0].toUpperCase() +
              this.props.item.name.first.slice(1) +
              ' ' +
              this.props.item.name.last[0].toUpperCase() +
              this.props.item.name.last.slice(1)}
          </Text>

          {this.props.discoverlist ? (
            <TouchableWithoutFeedback
              style={{
                width: 30,
                height: '70%',
                alignItems: 'center',
                //justifyContent: 'center',
              }}
              onPressIn={() => {
                this.toggleTrip();
              }}
              /* onPressOut={() => {
                Animated.timing(this.rotateValue, {
                  toValue: 0,
                  duration: 700,
                  easing: Easing.linear,
                  useNativeDriver: true,
                }).start();
              }}*/
            >
              <Animated.View
                style={[
                  transformStyle,
                  {
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: ScreenMode.colors.bodyIcon,
                  },
                ]}>
                <Icon
                  name="tripadvisor"
                  type="Entypo"
                  style={{
                    fontSize: this.state.dicoverClick ? 20 : 26,
                    color: this.state.dicoverClick
                      ? ScreenMode.colors.sendMessage
                      : ScreenMode.colors.bodyIcon,
                  }}
                  onPress={this.toggleTrip}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          ) : null}
          {/* <Image style={styles.wave} source={Images.profile.wave} />*/}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

UserItem.propTypes = {
  item: PropTypes.object,
};

export default UserItem;
/* onPress={() => {

   this.state.scaleValue.setValue(0);
   Animated.timing(this.state.scaleValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
        useNativeDriver: true,
    }).start();

     this.toggleTrp();
  }}*/
