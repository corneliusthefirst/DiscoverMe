/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Platform, Dimensions} from 'react-native';
import Modal from 'react-native-modal';

export default class DiscoveryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.initialize();
  }
  state = {};
  initialize() {}
  onOpenModal() {
    //StatusBar.setHidden(true);
  }
  onClosedModal() {}

  style = {};
  coverScreen = true;

  type = '';
  testID = 'modal';
  backdropOpacity = 0.05;
  backdropColor = 'black';
  swipeDirection = 'down';
  animationIn = 'slideInUp';
  animationOut = 'slideOutDown';
  animationInTiming = 300;
  animationOutTiming = 300;
  backdropTransitionInTiming = 300;
  backdropTransitionOutTiming = 300;
  scrollOffset = 1;
  //backdropPressToClose = true;
  //position = 'bottom';

  modalBody() {
    return <View />;
  }

  baseOntype = (type) => {
    this.animationInTiming = 300;
    this.animationOutTiming = 300;
    this.backdropTransitionInTiming = 300;
    this.backdropTransitionOutTiming = 300;
    this.backdropOpacity = 0.8;
    this.backdropColor = 'rgba(0,0,0,0.1)';
    switch (type) {
      case 'fancy':
        this.animationIn = 'zoomInDown';
        this.animationOut = 'zoomOutUp';
        break;
      case 'LeftInRightOut':
        this.animationIn = 'slideInLeft';
        this.animationOut = 'slideOutRight';
        break;
      case 'RightInLeftOut':
        this.animationIn = 'slideInRight';
        this.animationOut = 'slideOutLeft';
        break;
      case 'RightInRightOut':
        this.animationIn = 'slideInRight';
        this.animationOut = 'slideOutRight';
        break;
      case 'LeftInLeftOut':
        this.animationIn = 'slideInLeft';
        this.animationOut = 'slideOutLeft';
        break;
    }
  };

  render() {
    this.baseOntype(this.type);

    return (
      <Modal
        style={[this.style, {backgroundColor: 'rgba(0,0,0,0)', flex: 1}]}
        testID={this.testID}
        animationInTiming={this.animationInTiming}
        animationOutTiming={this.animationOutTiming}
        backdropTransitionInTiming={this.backdropTransitionInTiming}
        backdropTransitionOutTiming={this.backdropTransitionOutTiming}
        backdropOpacity={this.backdropOpacity || 0.5}
        backdropColor={this.backdropColor}
        animationIn={this.animationIn}
        animationOut={this.animationOut}
        useNativeDriver={true}
        swipeDirection={this.swipeDirection || 'down'}
        //deviceWidth={deviceWidth}
        //deviceHeight={deviceHeight}
        scrollOffset={this.scrollOffset || 1}
        onModalShow={() => {
          this.onOpenModal();
        }}
        onModalHide={() => {
          this.onClosedModal();
        }}
        onBackdropPress={() => {
          this.onClosedModal();
        }}
        isVisible={this.props.isOpen ? this.props.isOpen : true}
        coverScreen={this.coverScreen || true}>
        {this.modalBody()}
      </Modal>
    );
  }
}
