/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,

} from 'react-native';
import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import Orientation from 'react-native-orientation-locker';
import MyStoriesProfile from './myStoryProfile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ModifyProfile from '../ModifyProfile/index';
import MyStoriesView from '../MyStoriesView/index';
import ScreenLanguage from '../../components/screenLanguage';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import { ScrollView } from 'react-native-gesture-handler';


const Tab = createMaterialTopTabNavigator();

@observer
class  Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            mystories:{},
            mounted:true,
        };
    }


componentWillUnmount(){
  Orientation.unlockAllOrientations();
}
componentDidMount(){
  Orientation.lockToPortrait();
  stores.MystoriesStore.fetchMyStories().then((mystories)=>{
      this.setState({mystories:mystories});
  });
}

renderTopTabs = () => {
    return (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: ScreenMode.colors.sendMessage,
            inactiveTintColor: ScreenMode.colors.bodySubtext,
            indicatorStyle: {backgroundColor: ScreenMode.colors.sendMessage},
            tabStyle : {shadowRadius : 0},
            style: {backgroundColor:ScreenMode.colors.bodyBackground},
            labelStyle: {fontSize:13, fontWeight: '700'},
          }}
          swipeEnabled={false}
          initialRouteName="MyStories"
          //removeClippedSubviews={true}
        >
           <Tab.Screen  name="ModifyProfile" component = {ModifyProfile} options={{ tabBarLabel: ScreenLanguage.ModifyProfile }} />
          <Tab.Screen  name="MyStories"  options={{ tabBarLabel: ScreenLanguage.MyStories }}  children={()=><MyStoriesView {...this.props} donotBlur={()=>{/*this.donotBlur();*/}}/>}/>

        </Tab.Navigator>

    );
}

render(){
    return (
       <View style={{flexDirection:'column',height:'100%',backgroundColor:ScreenMode.colors.bodyBackground}}>
           <MyStoriesProfile mystories={this.state.mystories}  {...this.props} donotBlur={()=>{/*this.donotBlur();*/}}/>

           {this.state.mounted ?
            <View style={{flex:1,backgroundColor:ScreenMode.colors.bodyBackground,marginTop:40}}>
                {this.renderTopTabs()}
           </View> : <WaveIndicatorView size={100} /> }
       </View>
    );
}

}

export default  Profile;


const styles = StyleSheet.create({
  storyTitle: {
    height: 40,
    alignItems: 'center',
    marginTop: 15,
    flexDirection:'row',
  },
  modificationView: {
      height:100,
      flexDirection:'row',
   },
   modificationItem: {
       flexDirection: 'column',
       width:150,
       justifyContent:'center',
       alignItems:'center',
   },
   modifText:{
      fontWeight: 'bold',
      fontSize:16,
      marginLeft: 12,
    },
    modifIcon:{
      fontSize:23,
      color:ScreenMode.colors.bodyIcon,
    },
});

/**
 * 
           <View
            style={styles.storyTitle}>
           <Text style={{fontWeight: 'bold',fontSize:16, marginLeft: 15}}>My Stories</Text>
          </View>

 *     <View style={styles.modificationView} >
              <View style={styles.modificationItem}>
                <Icon name=''   type='' style={styles.modifIcon} />
                <Text style={styles.modifText}>Change Name</Text>
              </View>
          </View> */
