/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {Component } from 'react';
import { View,TouchableOpacity,Animated, StyleSheet} from 'react-native';

import VideoController from './VideoController';
import { Icon } from 'native-base';

class VideoView extends Component {
    constructor(props){
        super(props);
        this.state = {
            thumbnailOpacity:new Animated.Value(0),
            Pause:false,
            showControls:false,
        };
    }

    shouldComponentUpdate(nextProps) {
        if (this.state === nextProps.state ) {
            return false;
          }
          return true;
        }

onLoad = (item) => {
    this.props.onLoad(item);
    this.setState({showControls:true});
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250,
      useNativeDriver:true,
    }).start();
    this.setState({Pause:true});
  };


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
        return (
            <View
                   backgroundColor={'black'}
                   style={{alignItems:'center',justifyContent:'center',borderTopRightRadius:5,borderTopLeftRadius:5, flex:1}}
                  >
                    <VideoController
                    ref={(elm) => {this.playerRef = elm;}}
                    source={{uri:this.props.video}}// Can be a URL or a local file.
                    onError={(error) => {
                        //console.warn(error);
                    }}
                    onLoad={(item) => this.onLoad(item)}
 
                    onPause={() => this.onPause()}
                    onPlay={() => this.onPlay()}
                    resizeMode={this.props.resizeMode ? this.props.resizeMode : 'contain'}
                    disableVolume={true}
                    seekColor="white"
                    controlTimeout={4000}
                    fullscreenOrientation={'landscape'}
                    paused = {this.state.Pause}
                    disableBack={true}
                    disableFullscreen={true}
                    nextPrev={false}
                    //for controls
                    onShowControls={() => {this.showControls();}}
                    onHideControls={() => {this.hideControls();}}

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
         { this.state.Pause === true  ?
            <TouchableOpacity style={styles.playView} onPress={() => {this.onPlay();}} >
             <Icon name="play" type="MaterialCommunityIcons" style={styles.playIcon} onPress={() => {this.onPlay();}}/>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.playView} onPress={() => {this.onPause();}} >
              <Icon name="pause" type="MaterialIcons" style={[styles.playIcon,{fontSize:35}]} onPress={() => {this.onPause();}}/>
            </TouchableOpacity> }

        </Animated.View> : null}

    </View>
        );
  }
}

export default VideoView;


const styles = StyleSheet.create({

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
    playIcon: {
       color:'white',
       fontSize: 46,
    },

  });
