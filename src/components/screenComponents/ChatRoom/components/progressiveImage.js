/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Animated, View, StyleSheet, TouchableNativeFeedback, Text, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import ScreenLanguage from '../../../screenLanguage';
import GlobalFunctions from '../../../globalFunctions';
import { scale } from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import DiscoveryPureComponent from '../../../pureComponent';

 class ProgressiveImage extends DiscoveryPureComponent {
 constructor(props){
   super(props);
   this.state = {
    thumbnailOpacity:new Animated.Value(0),
    isImageLoaded:false,
    retry:false,
    showImage: true,

   };
 }

 shouldComponentUpdate(nextProps) {

  if (this.props.source !== nextProps.source || this.state !== nextProps.state || this.props.source !== nextProps.source ) {
    return true;
  }
  return false;
}


  onLoad = () => {
    this.setStatePure({isImageLoaded:true});
    if (!this.props.disableAnimations){
      Animated.timing(this.state.thumbnailOpacity, {
        toValue: 0.75,
        duration: 1000,
        useNativeDriver:true,
      }).start();
     }
    }


 onThumbnailLoad = () => {
    if (!this.state.isImageLoaded)
      {Animated.timing(this.state.thumbnailOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver:true,
      }).start();}
  }

 retryBack = () => {
  this.setStatePure({showImage:true,retry:false});
    setTimeout(()=>{
      if (this.state.isImageLoaded === false){
        this.setStatePure({retry:true});
      }
    }, 5000);
  };

  reload = () => {
    this.setStatePure({showImage:false,retry:true});
  };

  StartVideo = () => {
    if (this.props.donotBlur){
      this.props.donotBlur();
    }
    this.props.navigation.navigate('VideoViewer', {source: this.props.source, message:this.props.message ? this.props.message : null });
  }

  enlargePhoto = () => {
    if (this.props.donotBlur){
      this.props.donotBlur();
    }
    this.props.navigation.navigate('ImageViewer', {source: this.props.source, message:this.props.message ? this.props.message : null });
  }

  render(){
    return (
      <View
        width={this.props.style.width}
        height={this.props.style.height}
        backgroundColor={'#ffffff'}
        style={[this.props.style]}
      >
       {this.state.showImage ?
       <TouchableNativeFeedback onPress={()=>{this.props.isvideo ? null : this.enlargePhoto();}}>
          <FastImage
              style = {this.props.style}
              source={{
                  uri: this.props.isvideo ? this.props.thumbnail : this.props.source,
                  headers: { Authorization: 'someAuthToken' },
                  priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
              onLoad={event => this.onLoad(event)}
              onError={(event) => {this.reload();}}
          />
       </TouchableNativeFeedback>
         : null}


        {this.state.retry ?
         <View style={styles.retryView}>
             <Icon name="reload1" type="AntDesign" style={styles.retryIcon} onPress={() => {this.retryBack();}}/>
             <TouchableNativeFeedback onPress={() => {this.retryBack();}}>
        <Text style={{color:'white'}}>{ScreenLanguage.Retry}</Text>
             </TouchableNativeFeedback>
        </View> : null}

        {this.props.isvideo  && this.state.retry === false ? <TouchableOpacity onPress={() => {this.StartVideo();}} style={[styles.playView,{position:'absolute',alignSelf:'center'},this.props.playViewStyle]}>
            <Icon name="play" type="MaterialCommunityIcons" style={styles.playIcon}  onPress={() => {this.StartVideo();}}/>
        </TouchableOpacity> : null}

        {this.props.isvideo ?  <View style={styles.durationView}>
            <Icon  name="videocam" type="MaterialIcons" style={styles.durationIcon} />
        {GlobalFunctions.renderDuration({
              fontSize: 12,
              marginLeft: 10,
              color: 'white',
            },this.props.duration)}
        </View> : null }

      </View>
    );
  }

}
const styles = StyleSheet.create({
  playView:{
    position:'absolute',
    height:44,
    width:44,
    borderRadius:22,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
},
  retryView: {
      position:'absolute',
      flexDirection:'row',
      padding:10,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgba(0,0,0,0.4)',
      borderRadius:20},
  retryIcon: {
      color:'white',
      fontSize: 22,
      marginRight:5,
  },
  playIcon: {
     color:'white',
     fontSize: 40,
  },
  durationIcon: {
     color:'rgba(255,255,255,0.6)',
     fontSize: 28,
  },

  durationView: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    bottom: 0,
    left: 5,
  },

});

export default ProgressiveImage;

