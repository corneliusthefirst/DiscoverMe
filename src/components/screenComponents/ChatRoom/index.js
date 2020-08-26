/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Platform, Keyboard} from 'react-native';
import Toolbar from './Toolbar';
import InputModule from './InputModule';
import KeyboardSpacer from '../KeyboardSpacer';
import MessageList from './MessageList/index';
import newMessages from '../../../assets/fake_messages';
import Unmounter from '../../unMounter';
import WaveIndicatorView from '../../waveIndicator';
import RemindDetailPage from './components/remindDetailPage';

export default class ChatRoom extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
      isopenRemind: false,
      remindData: {},
    };
  }
  onBackPress = () => {
    this.props.navigation.goBack();
  };

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  openRemind = (data, passed) => {
    this.setState({remindData: {data: data, passed: passed}});
    this.setState({isopenRemind: true});
    //this.remindPage.initialize();
  };

  willUnMount() {}
  didMount() {}

  render() {
    return this.state.mounted ? (
      <View style={{flex: 1}}>
        <Toolbar
          onBackPress={this.onBackPress}
          user={this.props.route.params.item}
        />
        {/*<TouchableWithoutFeedback onPress={this.dismissKeyboard}>*/}
        <View style={{flex: 1}}>
          <MessageList
            {...this.props}
            newMessages={newMessages}
            donotBlur={() => {
              this.donotBlur();
            }}
            openRemind={(data, passed) => {
              this.openRemind(data, passed);
            }}
          />
        </View>
        {/*</TouchableWithoutFeedback>*/}
        <InputModule
          {...this.props}
          donotBlur={() => {
            this.donotBlur();
          }}
        />
        {Platform.OS === 'ios' && <KeyboardSpacer />}
        {this.state.isopenRemind && (
          <RemindDetailPage
            onClosed={() => {
              this.setState({isopenRemind: false});
            }}
            {...this.props}
            remindData={this.state.remindData.data}
            passed={this.state.remindData.passed}
            ref={(ref) => {
              this.remindPage = ref;
            }}
            donotBlur={() => {
              this.donotBlur();
            }}
          />
        )}
      </View>
    ) : (
      <WaveIndicatorView size={100} />
    );
  }
}
