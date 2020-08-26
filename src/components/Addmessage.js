/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Icon} from 'native-base';
import {View, Text} from 'react-native';
import ScreenMode from './screenMode';
import CreateTextInput from './createTextInput';
import ScreenLanguage from './screenLanguage';
import request from '../services/requestObjects';
import stores from '../stores/index';
import uuid from 'react-native-uuid';
import TransparentModal from './transparentModal';
import {observer} from 'mobx-react';

@observer
class AddMessageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageWithUrl: {
        url: '',
        type: '',
        message: '',
      },
    };
  }

  onChangedMessage = (value) => {
    this.setState((prevState) => {
      let messageWithUrl = Object.assign({}, prevState.messageWithUrl);
      messageWithUrl.message = value;
      return {messageWithUrl};
    });
  };

  createStory = () => {
    let newStory = request.Story();
    newStory.id = uuid.v1();
    newStory.creator = stores.LoginStore.user.phone;
    newStory.url = this.props.dataInput.url;
    newStory.message = this.state.messageWithUrl.message;
    newStory.type = this.props.dataInput.type;
    console.warn(newStory);
    stores.MystoriesStore.addStory(newStory).then((stories) => {
      console.warn('story added', stories);
    });

    this.props.onClosed();
  };

  modalBody = () => {
    return (
      <View style={{paddingTop: 10, flexDirection: 'column'}}>
        <View
          style={{
            height: 70,
            backgroundColor: '#c1c1c1',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="photo"
            type="FontAwesome"
            style={{marginLeft: 20, fontSize: 45}}
          />
          <View
            style={{marginLeft: 10, flex: 1, padding: 5}}
            ellipsizeMode={'tail'}
            numberOfLines={1}>
            <Text
              ellipsizeMode="tail"
              style={{
                fontWeight: '700',
                color:
                  ScreenMode.colors.statusBarColor === 'white'
                    ? 'black'
                    : ScreenMode.colors.statusBarColor,
              }}>
              {this.props.dataInput.type === 'image'
                ? ScreenLanguage.currentlang.PhotoForStoryUploaded
                : ScreenLanguage.currentlang.VideoForStoryUploaded}
            </Text>
            <Text ellipsizeMode={'tail'} numberOfLines={1}>
              url : {this.props.dataInput.url}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 70,
            backgroundColor: 'white',
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
          }}>
          <CreateTextInput
            height={68}
            value={this.state.messageWithUrl.message}
            onChange={this.onChangedMessage}
            bottomWidth={0.05}
            numberOfLines={2}
            multiline={true}
            placeholder={ScreenLanguage.currentlang.WriteSomething}
            maxLength={300}
          />
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Button
            style={{
              alignSelf: 'center',
              width: '30%',
              borderRadius: 15,
              borderColor: '#1FABAB',
              backgroundColor: '#e1e1e1',
              justifyContent: 'center',
              alignItem: 'center',
              marginTop: '5%',
              height: 40,
            }}
            onPress={() => {
              this.props.onClosed(this.state.messageWithUrl);
            }}>
            <Text style={{color: '#e74c3c'}}>cancel</Text>
          </Button>

          <Button
            style={{
              alignSelf: 'center',
              width: '28%',
              borderRadius: 15,
              backgroundColor: '#e1e1e1',
              justifyContent: 'center',
              alignItem: 'center',
              marginTop: '5%',
              marginLeft: 15,
              height: 40,
              marginRight: 5,
            }}
            onPress={this.createStory}>
            <Text style={{color: '#1FABAB'}}>create</Text>
          </Button>
        </View>
      </View>
    );
  };

  render() {
    return (
      <TransparentModal
        modalBody={this.modalBody}
        modalHeight={220}
        onClosed={this.props.onClosed}
        isOpen={this.props.isOpen}
      />
    );
  }
}

export default AddMessageModal;
