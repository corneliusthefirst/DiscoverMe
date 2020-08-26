/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import { View,StyleSheet, Dimensions, Platform, StatusBar,Image} from 'react-native';
import _ from 'lodash';
import VideoTopView from './videoTopView';
import FastImage from 'react-native-fast-image';
import Unmounter from '../../../unMounter';
import GlobalIndicator from './GlobalIndicators';


let {height, width} = Dimensions.get('window');
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

class ImageViewer  extends Unmounter {
 constructor(props){
    super(props);
    this.state = {
      height:height,
      width:width,
      resizeMode:FastImage.resizeMode.contain,
      mounted:true,
      showImage:false,
    };
 }
 willUnMount(){}
 didMount(){
   this.newHeight();
 }


 newHeight = () => {

    Image.getSize(this.props.route.params.source, (Iwidth, Iheight) => {

      if (Iheight > 1000 || Iwidth < width) {
        this.setState({resizeMode:FastImage.resizeMode.cover,showImage:true});
      } else {
        this.setState({resizeMode:FastImage.resizeMode.contain,showImage:true});
      }
    });
};

 render() {
  //console.warn("here3",this.state.resizeMode);
    return (
     this.state.mounted ? <View
        backgroundColor={'black'}
        style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center',borderTopRightRadius:5,borderTopLeftRadius:5}}
      >
      {this.state.showImage ? <FastImage
        style={{
           height: height + statusBarHeight - 200,
           width: width,
           alignSelf:'center',
           marginTop: 40,
       }}
        source={{
            uri: this.props.route.params.source,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
        }}
        resizeMode={this.state.resizeMode}
    /> : <GlobalIndicator type={'UIActivityIndicator'} color={'white'} size={80} />}


         <View style={{position:'absolute',top:0,paddingBottom:10,width:'100%'}}>
          <VideoTopView sender={this.props.route.params.message ? this.props.route.params.message.sender : {}} created_at={this.props.route.params.message ? this.props.route.params.message.created_at : ''}
            onBackPress={() => {this.props.navigation.goBack();}} showall={this.props.route.params.message ? true : false} />
         </View>


      </View> : null
    );
  }
}

export default ImageViewer;
