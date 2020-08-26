/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SkypeIndicator} from 'react-native-indicators';
import ScreenMode from './screenMode';
import {View} from 'react-native';
import {observer} from 'mobx-react';

@observer
class WaveIndicatorView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <SkypeIndicator
          color={ScreenMode.colors.sendMessage}
          size={this.props.size ? this.props.size : 250}
          minScale={0.1}
          maxScale={0.6}
        />
      </View>
    );
  }
}

export default WaveIndicatorView;
