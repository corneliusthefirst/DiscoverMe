/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SkypeIndicator,
  UIActivityIndicator,
  MaterialIndicator,
} from 'react-native-indicators';
import ScreenMode from '../../../screenMode';
import {View} from 'react-native';
import {observer} from 'mobx-react';

@observer
class GlobalIndicator extends Component {
  constructor(props) {
    super(props);
  }
  torender = () => {
    switch (this.props.type) {
      case 'UIActivityIndicator':
        return (
          <UIActivityIndicator
            color={
              this.props.color
                ? this.props.color
                : ScreenMode.colors.sendMessage
            }
            size={this.props.size ? this.props.size : 250}
            count={15}
          />
        );
      case 'MaterialIndicator':
        return (
          <MaterialIndicator
            color={
              this.props.color
                ? this.props.color
                : ScreenMode.colors.sendMessage
            }
            size={this.props.size ? this.props.size : 250}
            trackWidth={this.props.size ? this.props.size / 15 : 250 / 15}
          />
        );
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {this.torender()}
      </View>
    );
  }
}

export default GlobalIndicator;
