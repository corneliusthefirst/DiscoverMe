/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Thumbnail,Icon} from 'native-base';

import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import {observer} from 'mobx-react';
import Header from '../../components/screenComponents/header';
import HeaderParamsMenu from '../../components/headerParamsMenu';
import ScreenLanguage from '../../components/screenLanguage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import request from '../../services/requestObjects';
//import DiscoveryCamera from '../../components/DiscoveryCamera';
import uuid from 'react-native-uuid';
import { createThumbnail } from 'react-native-create-thumbnail';
//tabs
import Discoveries from '../Discoveries';
import Discover from '../Dicover';
import Profile from '../Profile';
import TopTabs from '../HomeTopTabs';
import RemindDetailPage from '../../components/screenComponents/ChatRoom/components/remindDetailPage';
//import FloatingButton from '../HomeTopTabs/floatingButton';
//import moment from 'moment';


const Tab = createBottomTabNavigator();

@observer
class Home  extends Component{

    constructor(props){
        super(props);
        this.state = {
          openCamera:false,
          thumbnail:'',
          isopenRemind: false,
          remindData: {},
        };
    }

    openRemind = (data, passed) => {
      this.setState({remindData: {data: data, passed: passed}});
      this.setState({isopenRemind: true});
    };

    componentDidMount(){
        stores.CurrentScreenMode.getCurrentMode().then((mode) => {
           if (mode !== null ){
              let options = {mode:mode.currentMode,theme:mode.currentTheme};
              ScreenMode.setMode(options);
              stores.CurrentScreenMode.currentTheme = mode.currentTheme;
             } else {
              let options = {mode:stores.CurrentScreenMode.currentMode,theme:stores.CurrentScreenMode.currentTheme};
              stores.CurrentScreenMode.setMode(options).then(() => {
                ScreenMode.setMode(options);
              });
            }
          });

        stores.CurrentScreenLanguage.getCurrentLanguage().then((lang)=>{
          stores.CurrentScreenLanguage.setLanguage(lang);
        });

    }

title = (type) => {
   /* switch (type) {
        case 'red':
            return  <Thumbnail source={require('../../../assets/AppTitleRed.png')} style={{width: 120 , height :50}} />;
        case 'black':
            return <Thumbnail source={require('../../../assets/AppTitleBlack.png')} style={{width: 120,height :50}} />;
        case 'white':
            return <Thumbnail source={require('../../../assets/AppTitleWhite.png')} style={{width: 120 ,height :50}} />;
        case 'green':
            return <Thumbnail source={require('../../../assets/AppTitleGreen.png')} style={{width: 120,height :50 }} />;
      }*/
     /* stores.CurrentScreenMode.getCurrentMode().then((mode)=>{
        this.setState({theme:mode.currentTheme});
      });*/
      switch (stores.CurrentScreenMode.currentTheme) {
        case 'dark':
            return <Thumbnail source={require('../../../assets/AppTitleBlack.png')} style={{width: 120,height :50}} />;
        case 'white':
            return <Thumbnail source={require('../../../assets/AppTitleWhite.png')} style={{width: 120 ,height :50}} />;
      }

}


openCamera = () => {
   this.props.navigation.navigate('CameraScreen',{
    onCaptureFinish:(result) => this.createStory(result),
    onCameraReady:()=>{},
    onMountError :(e)=>{console.warn(e);},
    onClosed:()=>{this.props.navigation.goBack();},
    nomessage:false,
    directreturn:false,
    multiline:true,
    novideo: false,
  });

}




generateThumbnail = (source,duration) => {
  createThumbnail({
    url: source,
    timeStamp: duration / 2,
    format:'png',
  }).then(response => {
      this.setState({ thumbnail: response.path });
      console.warn('here 1',this.state.thumbnail);
    }).catch((err) => console.log({ err }));
    console.warn('here 2',this.state.thumbnail);
};

createStory = (data) => {
  let newStory = request.Story();
  newStory.id = uuid.v1();
  newStory.creator = stores.LoginStore.user.phone;
  if (data.content_type === 'video'){
    newStory.url.source = data.source;
    newStory.url.duration = data.item.duration * 1000;
    //this.generateThumbnail(data.source,newStory.url.duration);
    createThumbnail({
      url: newStory.url.source,
      timeStamp: newStory.url.duration / 2,
      format:'png',
    }).then(response => {
      newStory.url.thumbnail = response.path;
      newStory.message = data.message;
      newStory.type = data.content_type;
      //console.warn(newStory);
      stores.MystoriesStore.addStory(newStory).then((stories) => {
        console.warn('story added', stories);
      });

      }).catch((err) => console.log({ err }));
  }
  else {
    newStory.url = data.source;
    newStory.message = data.message;
    newStory.type = data.content_type;
    //console.warn(newStory);
    stores.MystoriesStore.addStory(newStory).then((stories) => {
      console.warn('story added', stories);
    });
  }

};

  headerBody = (type)=>{
        return (
              <View style={styles.mainheaderView}>
                  <View style={{justifyContent:'center',height:'94%',alignSelf:'flex-end',paddingLeft:10}}>
                     {this.title(type)}
                  </View>
                  <View style={styles.leftHeaderContent}>
                  <Icon  name="camera"   type="EvilIcons" style={{ marginRight: 20, fontSize: 32, color: ScreenMode.colors.headerIconColor}}
                   onPress={() => this.openCamera()} />
                      <HeaderParamsMenu  style={{marginRight: 10,fontSize:17,color:ScreenMode.colors.headerIconColor}}  {...this.props} />
                  </View>
              </View>

        );
    }



    renderBottomTabs = () => {
        return (
            <Tab.Navigator

              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName,iconType,iconColor,fontSize;

                  iconColor = focused ?  ScreenMode.colors.sendMessage : ScreenMode.colors.bodyIcon;

                  if (route.name === 'Home') {
                    iconName = 'home';
                    iconType = focused ? 'Entypo' : 'SimpleLineIcons';
                    fontSize = focused ? 18 : 17;

                  }
                  else if (route.name === 'Discoveries') {
                    iconName = focused ?  'people' : 'people-outline';
                    iconType =  'MaterialIcons';
                    fontSize = focused ? 18 : 23;
                  }
                   else if (route.name === 'Discover') {
                    iconName = 'tripadvisor';
                    iconType = focused ? 'Entypo' : 'FontAwesome5';
                    fontSize = focused ? 18 : 23;
                  }
                  else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                    iconType = 'MaterialIcons';
                    fontSize = focused ? 19 : 24;
                  }

                  return <Icon name={iconName} size={size}  type={iconType} style={{fontSize:fontSize, color:iconColor}} />;
                },
              })}
              tabBarOptions={{
                activeTintColor:ScreenMode.colors.sendMessage,
                inactiveTintColor: ScreenMode.colors.bodySubtext,
                keyboardHidesTabBar:true,
                //labelStyle:{fontWeight: 'bold'},
                style:{backgroundColor:ScreenMode.colors.bodyBackgroundLight},
              }}
            >
              <Tab.Screen  name="Home"  options={{ tabBarLabel: ScreenLanguage.Home /*,unmountOnBlur:true*/ }}
               children={()=><TopTabs   ref={ref => {this.TopTabs = ref;}} openRemind={this.openRemind} {...this.props} />} />
              <Tab.Screen  name="Discoveries" component={Discoveries} options={{ tabBarLabel: ScreenLanguage.Discoveries , unmountOnBlur:true}} />
              <Tab.Screen  name="Discover" component={Discover}  options={{ tabBarLabel: ScreenLanguage.Discover /*, unmountOnBlur:true*/ }}/>
              <Tab.Screen  name="Profile" component={Profile} options={{ tabBarLabel: ScreenLanguage.Profile, unmountOnBlur:true }}/>
            </Tab.Navigator>

        );
    }


    render(){

        return (

              <View style={[styles.Body,{backgroundColor:ScreenMode.colors.bodyBackground}]}>
                  <Header height={70}  barStyle = {ScreenMode.colors.statusbarStyle}  headerBody={this.headerBody} home />
                   {this.renderBottomTabs()}
                   {this.state.isopenRemind && (
                  <RemindDetailPage
                    onClosed={() => {
                       this.setState({isopenRemind: false});
                    }}
                    {...this.props}
                    remindData={this.state.remindData.data}
                    passed={this.state.remindData.passed}
                  donotBlur={() => {/*this.TopTabs.CurrentReminds.donotBlur();*/}}
                  />
        )}
              </View>

      );
    }
}


const styles = StyleSheet.create({
   Body : {
       flex:1,
    },
   headerBody : {
     flex:1,
     alignItems: 'center',
     paddingTop: 15,
     flexDirection:'column',
   },
   leftHeaderContent: {
    paddingTop:17,
    position:'absolute',
    right:0,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainheaderView: {
    flex:1,
    alignItems: 'center',
    paddingTop: 15,
    height:'100%',
    width:'100%',
    flexDirection:'row',
  },


});

export default  Home;


/**  {this.state.openCamera &&  <DiscoveryCamera  isOpen={this.state.openCamera} onClosed = {this.closeCamera} onCaptureFinish={this.createStory} nomessage={false}  directreturn={false} multiline={true} onCameraReady={()=>{console.warn('camera is  ready');}}  onMountError = {(e)=>{console.warn(e);}} />} */
