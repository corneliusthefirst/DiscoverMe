/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Animated, View, Text , StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import VideoController from '../../../customVideoViewer/VideoController';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import _ from 'lodash';
import DiscoveryPureComponent from '../../../pureComponent';
import ScreenLanguage from '../../../screenLanguage';
import GlobalFunctions from '../../../globalFunctions';

class ProgressiveVideo  extends DiscoveryPureComponent {
 constructor(props){
    super(props);
    this.state = {
        thumbnailOpacity:new Animated.Value(0),
        isVideoLoaded:false,
        Pause:false,
        startVideo:false,
        retry:false,
        mounted:false,
    };
 }

 shouldComponentUpdate(nextProps) {
  if (_.isEqual(this.state, nextProps.state )) {
      return false;
    }
    return true;
  }

   onLoad = (item) => {
    this.setStatePure({isVideoLoaded:true});
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver:true,
    }).start();
  };

  onThumbnailLoad = (event) => {
    if (!this.state.isVideoLoaded)
      {Animated.timing(this.state.thumbnailOpacity, {
        toValue: 0.75,
        duration: 250,
        useNativeDriver:true,
      }).start();}
  };


 StartVideo = () => {
    //console.warn("here we start");
    this.setStatePure({startVideo:true});
    setTimeout(()=>{
        if (this.state.isVideoLoaded === false){
            this.setStatePure({retry:true});
            this.setStatePure({startVideo:false});
        }
    }, 15000);
  };

  retryBack = () => {
    this.setStatePure({retry:false});
    this.setStatePure({startVideo:true});
    setTimeout(()=>{
        if (this.state.isVideoLoaded === false){
         this.setStatePure({retry:true});
         this.setStatePure({startVideo:false});
        }
    }, 10000);
 };

 tooglePause = () => {
    //console.warn("here we pause");
    this.setStatePure({Pause:false});
    /*if (this.state.isVideoLoaded === false){
     this.retryBack();
    }*/
    //this.player.seekTo(0);
    //console.warn("toogled");
 }
 onEnd = () => {
    this.setStatePure({Pause:true});
 }
 onPause = () => {
   this.setStatePure({Pause:true});
 }
 onPlay = () => {
    this.setStatePure({Pause: false});
 }

 controlMounting = () => {
    let  diff = this.props.previousOffset - this.props.currentOffset;
    if (diff < 0){diff = -diff;}
    if (diff > 150){
        if (this.state.Pause === false){
           this.state.Pause = true;
        }
    }
 }


 render() {
    //this.controlMounting();
    //console.warn(this.props.sender);
    return (
      <View
        width={this.props.style.width}
        height={this.props.style.height}
        backgroundColor={'rgba(0,0,0,0.8)'} //rgba(52,52,52,0.4)
        style={this.props.style, {alignItems:'center',justifyContent:'center',borderTopRightRadius:5,borderTopLeftRadius:5}}
      >
           {this.state.startVideo  ?
                    <VideoController
                    ref={(ref) => {this.player = ref;}}
                    source={this.props.source}// Can be a URL or a local file.
                    onError={(error) => {
                       //console.error(error);
                    }}
                    onLoad={(item) => this.onLoad(item)}
                   /* onEnd={()=> {
                        //this.player.methods.togglePlayPause();
                        //this.onEnd();
                    }}*/
                    onPause={() => this.onPause()}
                    onPlay={() => this.onPlay()}
                    videoStyle={this.props.style}
                    resizeMode={'contain'}
                    disableVolume={true}
                    seekColor="white"
                    seekBarWidth={this.props.seekBarWidth}
                    controlTimeout={4000}
                    fullscreenOrientation={'landscape'}
                    paused = {this.state.Pause}
                    disableBack={true}
                    disableFullscreen={true}
                    nextPrev={false}
                    nextVideo = {this.props.nextVideo}
                    previousVideo = {this.props.prevVideo}
            /> : null}

     {this.state.startVideo === false ?
      <Animated.Image
          resizeMode={'cover'}
          style={[{opacity: this.state.thumbnailOpacity},
            this.props.style,
          ]}
          source={this.props.thumbnail}
          onLoad={event => this.onThumbnailLoad(event)}
        /> : null}

        {this.state.Pause === true && this.state.retry === false ? <View style={{position:'absolute'}}>
            <Icon name="play-circle" type="MaterialCommunityIcons" style={styles.playIcon} onPress={() => {this.tooglePause();}}/>
        </View> : null}

         {this.state.startVideo === false && this.state.retry === false ? <View style={{position:'absolute'}}>
            <Icon name="play-circle" type="MaterialCommunityIcons" style={styles.playIcon}  onPress={() => {this.StartVideo();}}/>
        </View> : null}

        {this.state.retry === true ?
         <View style={styles.retryView}>
             <Icon name="reload1" type="AntDesign" style={styles.retryIcon} onPress={() => {this.retryBack();}}/>
             <TouchableNativeFeedback onPress={() => {this.retryBack();}}>
                    <Text style={{color:'white'}}>{ScreenLanguage.currentlang.Retry }</Text>
             </TouchableNativeFeedback>
        </View> : null}

        {this.state.startVideo === false || this.state.retry === true  || this.state.Pause === true  && this.props.message ?  <View style={styles.durationView}>
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


export default ProgressiveVideo;

const styles = StyleSheet.create({
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
       color:'rgba(255,255,255,0.7)',
       fontSize: 50,
    },
    durationIcon: {
       color:'rgba(255,255,255,0.6)',
       fontSize: 28,
    },
    tickIcon: {
        color:'rgba(255,255,255,0.8)',
        fontSize: 20,
     },
    durationView: {
      position: 'absolute',
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      bottom: 0,
      left: 5,
    },
    tickView: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        bottom: 0,
        right: 8,
      },
  });

/**
 *
 *
 *         {this.props.message && this.props.sender && !this.props.gotText ?  ( this.state.startVideo === false || this.state.retry === true  || this.state.Pause === true ?  <View style={styles.tickView}>
            {this.props.message.sender.send ? (this.props.message.sender.isSeen ?
            <Icon  name="check-all" type="MaterialCommunityIcons" style={[styles.tickIcon,{color:this.props.tickColor}]} /> : <Icon  name="check-all" type="MaterialCommunityIcons" style={styles.tickIcon} />)
        : <Icon  name="checkmark" type="Ionicons" style={styles.tickIcon} />}
        </View> : null) : null }

 * videoStyle={{
    alignItems: 'center',
    height: "100%",
    width: "100%",
    top:0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity:0.7,
    backgroundColor:'black',
}}
 *
 *      <Animated.Image
          resizeMode={'cover'}
          //key={props.key}
          style={[
            {
              position: 'absolute',
            },
            props.style,
          ]}
          source={props.source}
          onLoad={event => this.onLoad(event)}
        />



         <Video
           source={props.source}
           onPause={() => {setPause(true)}}
          //paused={props.pause || props.isNewStory}
          onLoad={event => this.onLoad(event)}
          style={props.style}
          fullscreen={true}
          resizeMode="contain"
        /> */



        /**


import React, { useState, useRef} from 'react';
import { Animated, View, Text , StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import VideoController from '../../../customVideoViewer/VideoController';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const ProgressiveVideo  = (props) => {
 const [thumbnailOpacity, setThumbnailOpacity] = useState(new Animated.Value(0));
 const [isVideoLoaded,setVideoLoaded] = useState(false);
 const [Pause,setPause] = useState(false);
 const [startVideo,setStartVideo] = useState(false);
 const [retry,setRetry] = useState(false);



  const onLoad = () => {
    setVideoLoaded(true);
    Animated.timing(thumbnailOpacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver:true,
    }).start();
  };

 const onThumbnailLoad = (event) => {
    if (isVideoLoaded === false)
      {Animated.timing(thumbnailOpacity, {
        toValue: 0.6,
        duration: 250,
        useNativeDriver:true,
      }).start();}
  };

  const StartVideo = () => {
    setStartVideo(true);
    setTimeout(()=>{
        if (isVideoLoaded === false){
            console.warn('start',isVideoLoaded);
         setRetry(true);
         setStartVideo(false);
        }
    }, 15000);
  };

 const retryBack = () => {
    setRetry(false);
    setStartVideo(true);
    setTimeout(()=>{
        console.warn('retry',isVideoLoaded);
        if (isVideoLoaded === false){
         setRetry(true);
         setStartVideo(false);
        }
    }, 15000);
 };

    return (
      <View
        width={props.style.width}
        height={props.style.height}
        backgroundColor={'rgba(0,0,0,0.4)'}
        style={props.style, {alignItems:'center',justifyContent:'center'}}
      >
           {startVideo ?
                    <VideoController
                    source={props.source}// Can be a URL or a local file.
                    onError={(error) => {
                       //console.error(error);
                    }}
                    onLoad={(item) => {onLoad()}}
                    videoStyle={props.style}
                    resizeMode={"contain"}
                    disableVolume={true}
                    seekColor="white"
                    seekBarWidth={props.seekBarWidth}
                    controlTimeout={10000}
                    fullscreenOrientation={"landscape"}
                    //paused = {props.isPause && props.isPause}
                    disableBack={true}
                    disableFullscreen={true}
                    nextPrev={false}
                    nextVideo = {props.nextVideo}
                    previousVideo = {props.prevVideo}
            /> : null}

     {!startVideo ? <Animated.Image
          resizeMode={'cover'}
          style={[{opacity: thumbnailOpacity},
            props.style,
          ]}
          source={props.thumbnail}
          onLoad={event => onThumbnailLoad(event)}
        /> : null}

         {!startVideo && !retry ? <View style={{position:'absolute'}}>
            <Icon name="play-circle" type="MaterialCommunityIcons" style={styles.playIcon}  onPress={() => {StartVideo()}}/>
        </View> : null}
        {Pause ? <View style={{position:'absolute'}}>
            <Icon name="play-circle" type="MaterialCommunityIcons" style={styles.playIcon} onPress={() => {setPause(false)}}/>
        </View> : null}
        {retry ?
         <View style={styles.retryView}>
             <Icon name="reload1" type="AntDesign" style={styles.retryIcon} onPress={() => {retryBack()}}/>
             <TouchableNativeFeedback onPress={() => {retryBack()}}>
             <Text style={{color:'white'}}>Retry</Text>
             </TouchableNativeFeedback>
        </View> : null}
      </View>
    );
};

export default ProgressiveVideo;
 */
