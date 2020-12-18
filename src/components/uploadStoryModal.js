/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Button} from 'native-base';
import {View} from 'react-native';
import DiscoveryModal from './DiscoveryModal';
import GlobalFunctions from './globalFunctions';
import ScreenLanguage from './screenLanguage';
import ScreenMode from './screenMode';

export default class UploadStoryModal extends DiscoveryModal {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  onClosedModal() {
    this.props.onClosed(this.state.data);
    this.setState({data: null});
  }

  borderRadius = 25;
  modalHeight = 180;
  modalWidth = 200;
  position = 'center';
  modalBackground = '#f8f8f8';
  borderTopLeftRadius = 25;
  borderTopRightRadius = 25;

  openCamera = () => {
    if (this.props.video === true) {
      GlobalFunctions.pickVideoOrPhoto({condition: 'videocamera'}).then(
        (video) => {
          this.setState({data: video});
          this.props.onClosed(video);
          this.setState({data: null});
        },
      );
    } else {
      GlobalFunctions.pickVideoOrPhoto({condition: 'photocamera'}).then(
        (photo) => {
          this.setState({data: photo});
          this.props.onClosed(photo);
          this.setState({data: null});
        },
      );
    }
  };

  openGallery = () => {
    if (this.props.video) {
      GlobalFunctions.pickVideoOrPhoto({condition: 'videogallery'}).then(
        (video) => {
          this.setState({data: video});
          this.props.onClosed(video);
          this.setState({data: null});
        },
      );
    } else {
      GlobalFunctions.pickVideoOrPhoto({condition: 'photogallery'}).then(
        (photo) => {
          this.setState({data: photo});
          this.props.onClosed(photo);
          this.setState({data: null});
        },
      );
    }
  };

  modalBody() {
    return (
      <View style={{paddingTop: 38}}>
        <Button
          style={{
            alignSelf: 'center',
            width: '80%',
            borderRadius: 15,
            backgroundColor: ScreenMode.colors.bodyBackground,
            justifyContent: 'center',
            alignItem: 'center',
            marginTop: '5%',
            height: 40,
          }}
          onPress={this.openGallery}>
          <Text>{ScreenLanguage.TakeFromGallery}</Text>
        </Button>

        <Button
          style={{
            alignSelf: 'center',
            width: '80%',
            borderRadius: 15,
            backgroundColor: ScreenMode.colors.bodyBackground,
            justifyContent: 'center',
            alignItem: 'center',
            marginTop: '5%',
            height: 40,
          }}
          onPress={this.openCamera}>
          <Text>{ScreenLanguage.TakeFromCamera}</Text>
        </Button>
      </View>
    );
  }
}
