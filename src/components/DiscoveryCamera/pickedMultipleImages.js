/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback ,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import {Icon} from 'native-base';
import ScreenMode from '../screenMode';
import CreateTextInput from '../createTextInput';
import {observer} from 'mobx-react';
import Unmounter from '../unMounter';
import DiscoveryFlatList from  '../DiscoveryFlatList';
import Swiper from 'react-native-swiper';
import ProgressiveImage from '../screenComponents/ChatRoom/components/progressiveImage';
import Feather from 'react-native-vector-icons/Feather';

const screenHeight  =  Dimensions.get('window').height;
const screenWidth  =  Dimensions.get('window').width;
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


@observer
class PickedMultipleImage extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      item:null,
      mounted:false,
      showImage:false,
      resizeMode:'contain',
      mediaArray:[],
      currentIndex:0,
    };
  }

  willUnMount(){}
  didMount(){
    this.initialize();
  }

  initialize = () => {
      this.setState({mediaArray:this.props.route.params.data.mediaArray, mounted:true});
  }


  onClosed = (send) => {
    this.props.route.params.onClosed(this.state.mediaArray, send);
    //this.setState({mediaArray:[]});
    this.props.navigation.goBack();
 }

 onChangedMessage = (value) => {
    this.state.mediaArray[this.state.currentIndex].message = value;
    this.setState({mediaArray:this.state.mediaArray});
 }

 validate = () => {
    this.onClosed(true);
 }

 renderItem = ({item, index}) => {
   return (
       <View style={{borderWidth:2, borderColor:this.state.currentIndex === index ? '#1FABAB' : 'black'}}>
          <Image  source={{uri: item.type === 'image' ? item.uri : item.thumbnail}} style={{height:65,width:50}}  />
       </View>
   );
 }
 onIndexChanged = (index) => {
     this.setState({currentIndex:index});
 }


 styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      flexDirection: 'column',
      backgroundColor: 'white',
    },

    imageSize: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  };

  render(){
    return (
     this.state.mounted ?  <View style={[styles.container, { position: 'relative',justifyContent:'center' }]}>

            <View style={{height:68,width:'100%',position:'absolute',top:100}}>
               <DiscoveryFlatList
                   data={this.state.mediaArray}
                   renderItem={this.renderItem}
                   horizontal={true}
                   keyExtractor={(item) => item.id}
                   initialNumToRender={10}
                   maxToRenderPerBatch={8}
                   backgroundColor={'black'}
               />
            </View>

         <Swiper
          ref={(ref) => (this.swiper = ref)}
          showsPagination={false}
          loop={false}
          index={0}
          showsButtons={false}
          loadMinimal={true}
          loadMinimalSize={1}
          onIndexChanged={(index) => this.onIndexChanged(index)}
          >
            {this.state.mediaArray.map((item,index)=>{
              return  (
              <View
                style={{
                  height: screenHeight / 2 + screenHeight / 10,
                  width: '100%',
                  backgroundColor: '#ededed',
                  marginTop:200,
                }}>
                {item.type === 'video' ? (
                  <ProgressiveImage
                    source={{uri: item.uri}}
                    style={this.styles.imageSize}
                    duration={item.duration.toString()}
                    thumbnail={item.thumbnail}
                    {...this.props}
                    isvideo
                    disableAnimations
                    playViewStyle={{width: 46, height: 46, borderRadius: 23}}
                  />
                ) : (
                  <ProgressiveImage
                    source={item.uri}
                    style={this.styles.imageSize}
                    thumbnail={item.uri}
                    isvideo={false}
                    disableAnimations
                    {...this.props}
                  />
                )}
              </View>);
            })}
        </Swiper>

        <View style={{position:'absolute',height:60,width:'100%',top:0,alignItems:'flex-end',paddingTop:20,
              justifyContent:'center',backgroundColor:this.props.route.params.data.photo !== '' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.9)'}}>
              <Icon
                    name="close"
                    style={{color:'white', fontSize:25 , marginRight:15}}
                    type="AntDesign"
                    onPress={() => this.onClosed(false)}
               />
       </View>

       <View style={{position:'absolute',width:'100%',bottom:0,paddingBottom:15,paddingTop:15,flexDirection:'row',justifyContent:'flex-end',backgroundColor:this.props.route.params.data.photo != '' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.9)' }}>
        <View style={{width:'80%',paddingLeft:10,alignSelf:'center'}}>
          <CreateTextInput
            height={50}
            value={this.state.mediaArray[this.state.currentIndex].message}
            onChange={this.onChangedMessage}
            placeholder={this.props.route.params.messagePlaceHolder}
            backgroundColor={ScreenMode.colors.transparent}
            color={ScreenMode.colors.bodyBackground}
            placeholderTextColor={'#F5FFFA'}
            multiline={this.props.route.params.multiline}
            autogrow= {this.props.route.params.multiline ? true : false}
            maxLength={this.props.route.params.maxLength}
            />
       </View> 

       <View style={{width:'20%',alignItems:'center',justifyContent:'center'}}>
        <TouchableWithoutFeedback onPress={this.validate}>
            <View style={{height:44,width:44,borderRadius:22,backgroundColor:ScreenMode.colors.indicatorColor,alignItems:'center',justifyContent:'center'}}>
                  <Feather
                    name={'send'}
                    style={{color:'white', fontSize:25 }}
                    type={'Feather'}
                    onPress={this.validate}
                  />
           </View>
        </TouchableWithoutFeedback>

         </View>
        </View>


      </View> : null
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'black',
  },
});

export default PickedMultipleImage;

/** item.type === 'image' ? (
                <Image  source={{uri:item.uri}}  style={{height:screenHeight + statusBarHeight - 300, width: screenWidth,marginTop:200 }} resizeMode={this.state.resizeMode} /> 
               ) : (
                <View style={{marginTop: 200, height:screenHeight + statusBarHeight - 300,backgroundColor:'black',width:'100%'}}>
                <VideoView
                 open={true}
                 onLoad={(item) => {this.setState({item:item});}}
                 seekBarWidth={'84%'}
                 video={item.uri}
                />
                </View>
               ); */

/** {this.props.route.params.data.photo !== '' ?
          (this.state.showImage ? <Image  source={{uri:this.props.route.params.data.photo}}  style={{height:screenHeight + statusBarHeight - 200, width: screenWidth,marginTop:30 }} resizeMode={this.state.resizeMode} /> : null)
         :
         <View style={{marginTop: 30, height:screenHeight + statusBarHeight - 200,backgroundColor:'black',width:'100%'}}>
         <VideoView
          open={true}
          onLoad={(item) => {this.setState({item:item});}}
          seekBarWidth={'84%'}
          video={this.props.route.params.data.video}
         />
         </View>
        }
        <View style={{position:'absolute',height:60,width:'100%',top:0,alignItems:'flex-end',paddingTop:20,
              justifyContent:'center',backgroundColor:this.props.route.params.data.photo !== '' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.9)'}}>
              <Icon
                    name="close"
                    style={{color:'white', fontSize:25 , marginRight:15}}
                    type="AntDesign"
                    onPress={this.onClosed}
               />
       </View>

       <View style={{position:'absolute',width:'100%',bottom:0,paddingBottom:15,paddingTop:15,flexDirection:'row',justifyContent:'flex-end',backgroundColor:this.props.route.params.data.photo != '' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.9)' }}>
       {this.props.route.params.nomessage === false ? <View style={{width:'80%',paddingLeft:10,alignSelf:'center'}}>
          <CreateTextInput
            height={50}
            value={this.state.message}
            onChange={this.onChangedMessage}
            placeholder={this.props.route.params.messagePlaceHolder}
            backgroundColor={ScreenMode.colors.transparent}
            color={ScreenMode.colors.bodyBackground}
            placeholderTextColor={'#F5FFFA'}
            multiline={this.props.route.params.multiline}
            autogrow= {this.props.route.params.multiline ? true : false}
            maxLength={this.props.route.params.maxLength}
            />
       </View> : null}

       <View style={{width:'20%',alignItems:'center',justifyContent:'center'}}>
        <TouchableWithoutFeedback onPress={this.validate}>
            <View style={{height:44,width:44,borderRadius:22,backgroundColor:ScreenMode.colors.indicatorColor,alignItems:'center',justifyContent:'center'}}>
                  <Icon
                    name={'send'}
                    style={{color:'white', fontSize:25 }}
                    type={'Feather'}
                    onPress={this.validate}
                  />
           </View>
        </TouchableWithoutFeedback>

         </View>

       </View> */