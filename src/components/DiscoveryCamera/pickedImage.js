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
import VideoView from '../customVideoViewer/videoView';
import CreateTextInput from '../createTextInput';
import {observer} from 'mobx-react';
import Unmounter from '../unMounter';
import Feather from 'react-native-vector-icons/Feather';

const screenHeight  =  Dimensions.get('window').height;
const screenWidth  =  Dimensions.get('window').width;
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;


@observer
class PickedImage extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      message:'',
      item:null,
      mounted:true,
    };
  }

  willUnMount(){
    this.setState({message:''});
  }
  didMount(){ }


  onClosed = () => {
    let data = {photo:'',video:'',message:''};
    this.props.route.params.onClosed(data);
 }

 onChangedMessage = (value) => {
     this.setState({message:value});
 }

 validate = () => {
   if (this.props.route.params.nomessage){
    //console.warn("before return s",this.props.route.params.dataToreturn);
    this.props.route.params.onClosed(this.props.route.params.dataToreturn);
   }
   else {
     if (this.state.item){
      this.props.route.params.onClosed({...this.props.route.params.dataToreturn,message:this.state.message, item:this.state.item});
     }
     else {
      this.props.route.params.onClosed({...this.props.route.params.dataToreturn,message:this.state.message});
     }

    this.setState({message:''});
   }
 }

  render(){
    return (
     this.state.mounted ?  <View style={[styles.container, { position: 'relative',justifyContent:'center' }]}>

        {this.props.route.params.data.photo !== '' ?
         <Image  source={{uri:this.props.route.params.data.photo}}  style={{height:screenHeight + statusBarHeight - 200, width: screenWidth,marginTop:30 }} resizeMode={this.props.route.params.resizeMode ? this.props.route.params.resizeMode : 'contain'} />
         :
         <View style={{marginTop: 30, height:screenHeight + statusBarHeight - 200,backgroundColor:'black',width:'100%'}}>
         <VideoView
          open={true}
          onLoad={(item) => {this.setState({item:item});}}
          video={this.props.route.params.data.video}
          resizeMode={this.props.route.params.resizeMode ? this.props.route.params.resizeMode : 'contain'}
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

export default PickedImage;
