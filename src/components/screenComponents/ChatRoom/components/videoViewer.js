/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Animated, View, Text , StyleSheet,TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base';
import VideoController from '../../../customVideoViewer/VideoController';
import _ from 'lodash';
import ScreenLanguage from '../../../screenLanguage';
import VideoTopView from './videoTopView';
import Unmounter from '../../../unMounter';

class VideoViewer  extends Unmounter {
 constructor(props){
    super(props);
    this.state = {
        thumbnailOpacity:new Animated.Value(0),
        isVideoLoaded:false,
        Pause:false,
        showControls:false,
        retry:false,
        mounted:true,
    };
 }

 willUnMount(){}
 didMount(){}

 shouldComponentUpdate(nextProps) {
  if (_.isEqual(this.state, nextProps.state )) {
      return false;
    }
    return true;
  }

   onLoad = (item) => {
    this.setState({isVideoLoaded:true, showControls:true});
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver:true,
    }).start();
  };


  retryBack = () => {
    this.setState({retry:false});
    setTimeout(()=>{
        if (!this.state.isVideoLoaded){
         this.setState({retry:true});
        }
    }, 10000);
 };

 tooglePause = () => {
     if (!this.state.isVideoLoaded){
        setTimeout(()=>{
            if (this.state.isVideoLoaded === false){
             this.setState({retry:true});
            }
        }, 15000);
     }
    this.setState({Pause:false, showControls:false});
 }


 onEnd = () => {
    this.setState({Pause:true});
 }
 onPause = () => {
   this.setState({Pause:true});
 }
 onPlay = () => {
    this.setState({Pause: false, showControls:false});
 }

 showControls = () => {
    this.setState({showControls: true});
 }
hideControls = () => {
    this.setState({showControls: false});
}

 render() {
    //this.controlMounting();
    //console.warn(this.props.sender);
    return (
     this.state.mounted ?  <View
                   backgroundColor={'black'}
                   style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:5,borderTopLeftRadius:5, flex:1}}
                  >
                    <VideoController
                    ref={(elm) => {this.playerRef = elm;}}
                    source={this.props.route.params.source}// Can be a URL or a local file.
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
                    resizeMode={'contain'}
                    disableVolume={true}
                    seekColor="white"
                    //seekBarWidth={this.props.seekBarWidth}
                    controlTimeout={4000}
                    fullscreenOrientation={'landscape'}
                    paused = {this.state.Pause}
                    disableBack={true}
                    disableFullscreen={true}
                    nextPrev={false}
                    //for controls
                    onShowControls={() => {this.showControls();}}
                    onHideControls={() => {this.hideControls();}}

                    //nextVideo = {this.props.nextVideo}
                    //previousVideo = {this.props.prevVideo}
                    videoStyle={{
                        backgroundColor:'rgba(0,0,0,0.8)',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
            />

        { this.state.showControls  ?

        <Animated.View
         style={[
           styles.centerControls,
           {
             //opacity: this.playerRef.animations.topControl.opacity,
             marginTop: this.playerRef.animations.topControl.marginTop,
            },
        ]}>
          { this.state.Pause === true && this.state.retry === false  ?
           <TouchableOpacity style={styles.playView} onPress={() => {this.tooglePause();}} >
            <Icon name="play" type="MaterialCommunityIcons" style={styles.playIcon} onPress={() => {this.tooglePause();}}/>
           </TouchableOpacity> :
           <TouchableOpacity style={styles.playView} onPress={() => {this.onPause();}} >
             <Icon name="pause" type="Ionicons" style={[styles.playIcon,{fontSize: 28}]} onPress={() => {this.onPause();}}/>
           </TouchableOpacity> }

    </Animated.View> : null}



        {this.state.retry === true ?
         <View style={styles.retryView}>
             <Icon name="reload1" type="AntDesign" style={styles.retryIcon} onPress={() => {this.retryBack();}}/>
             <TouchableNativeFeedback onPress={() => {this.retryBack();}}>
                    <Text style={{color:'white'}}>{ScreenLanguage.currentlang.Retry }</Text>
             </TouchableNativeFeedback>
        </View> : null}


       { this.state.showControls ?
             <Animated.View
             style={[
               styles.topControls,
               {
                 opacity: this.playerRef.animations.topControl.opacity,
                 marginTop: this.playerRef.animations.topControl.marginTop,
               },
             ]}>
            <VideoTopView sender={this.props.route.params.message ? this.props.route.params.message.sender : {}} created_at={this.props.route.params.message ? this.props.route.params.message.created_at : ''}
            onBackPress={() => {this.props.navigation.goBack();}} showall={this.props.route.params.message ? true : false} />
        </Animated.View>
        : null}

      </View> : null
    );
  }
}


export default VideoViewer;

const styles = StyleSheet.create({
    topControls:{
      position:'absolute',
      top:0,width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    centerControls:{
      position:'absolute',
      alignSelf:'center',
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    playView:{
        position:'absolute',
        height:65,
        width:65,
        borderRadius:35,
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
       fontSize: 46,
    },

  });
