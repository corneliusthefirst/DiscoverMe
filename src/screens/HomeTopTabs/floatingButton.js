import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenMode from '../../components/screenMode';
import Icon from 'react-native-vector-icons/Feather';

class FloatingButton extends Component {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    FloatingButton: {
      position: 'absolute',
      bottom: 25,
      right: 15,
      backgroundColor: ScreenMode.colors.sendMessage,
      height: 52,
      width: 52,
      borderRadius: 26,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Icon: {
      color: 'white',
      fontSize: 20,
    },
  });
  render() {
    return (
      <View style={this.styles.FloatingButton}>
        <Icon name="user-plus" type="Feather" style={this.styles.Icon} />
      </View>
    );
  }
}

export default FloatingButton;
