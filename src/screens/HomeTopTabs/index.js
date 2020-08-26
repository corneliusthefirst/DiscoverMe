/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
  Text,
  Platform,
} from 'react-native';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import CurrentReminds from '../CurrentReminds';
import Votes from '../Votes';
import Relations from '../Relations';
import {Icon} from 'native-base';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

@observer
class  TopTabs extends Component{
    constructor(props){
        super(props);
    }

 renderTopTabs = () => {
    return (
     <Tab.Navigator
      tabBarOptions={{
        activeTintColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue :  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white',
        inactiveTintColor: ScreenMode.colors.type === 'white' ? '#7e7e7e' : '#dadada',
       style: { backgroundColor: ScreenMode.colors.headerBackground},
       indicatorStyle: {backgroundColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue : 'white'},
       //tabStyle : {height:60},
       labelStyle:{fontSize:14 /*,fontWeight: '700',fontFamily:'sans-serif'*/},
     }}
     removeClippedSubviews = {Platform.OS === 'ios' ? false : true}
   >
     <Tab.Screen  name="Messages"   children={()=> <Relations {...this.props} />} options={{ tabBarLabel: ScreenLanguage.currentlang.Messages }} />
    <Tab.Screen  name="Current Reminds"
    children={()=><CurrentReminds openRemind={this.props.openRemind} {...this.props} ref={ref => {this.CurrentReminds = ref; }} />}
    options={{ tabBarLabel: ScreenLanguage.currentlang.CurrentReminds}}/>
   </Tab.Navigator>
    );
  };


render(){

    return (
       <View style={{flex:1,backgroundColor:ScreenMode.colors.type}}>
            {this.renderTopTabs()}
       </View>
    );
}

}

export default TopTabs;

/**({focused, tintColor:color}) => {
         color = focused ? ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue :  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? '#7e7e7e' : '#dadada';
        return  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:12 , color:color}}>{ScreenLanguage.currentlang.CurrentReminds}</Text>
                  <Icon name="bell" type={"Entypo"} style={{color:'#ffb900',fontSize:15,marginRight: -5,marginLeft:5}} />
               </View>
      }} */

/**
 * <Tab.Screen  name="Vote Board" component = {Votes} options={{ tabBarLabel: ScreenLanguage.currentlang.VoteBoard }}/>
 *
 *     <Tab.Screen  name="Current Reminds" component = {CurrentReminds} options={{ tabBarLabel:
       ({focused, tintColor:color}) => {
         color = focused ? ScreenMode.colors.type === 'white' ||  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? '#bababa' : '#cacaca';
        return <Icon name="bell" type={"Entypo"} style={{color:color,fontSize:23}} />
      }}}/>

import React,{Component} from 'react';
import {
  View,
  Platform,
} from 'react-native';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import CurrentReminds from '../CurrentReminds';
import Votes from '../Votes';
import Relations from '../Relations';
import {Icon} from 'native-base';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

@observer
class  TopTabs extends Component{
    constructor(props){
        super(props);
    }

 renderTopTabs = () => {
    return (
     <Tab.Navigator
      tabBarOptions={{
        activeTintColor: ScreenMode.colors.type === 'white' ||  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white',
        inactiveTintColor: ScreenMode.colors.type === 'white' ? '#000000' : '#dadada',
       style: { backgroundColor: ScreenMode.colors.headerBackground},
       indicatorStyle: {backgroundColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.lightBlue : 'white'},
       //tabStyle : {height:60},
       labelStyle:{fontSize:13, fontWeight: '600'},
     }}
     removeClippedSubviews = {Platform.OS === 'ios' ? false : true}
   >
     <Tab.Screen  name="Messages" component = {Relations} options={{
       tabBarLabel: ({focused, tintColor:color}) => {
         color = focused ? ScreenMode.colors.type === 'white' ||  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? 'gray' : '#dadada';
        return <Icon name="chat" type={"MaterialCommunityIcons"} style={{color:color,fontSize:23}} />
      } }} />

     <Tab.Screen  name="Current Reminds" component = {CurrentReminds} options={{
        tabBarLabel: ({focused, tintColor:color}) => {
          color = focused ? ScreenMode.colors.type === 'white' ||  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? 'gray' : '#dadada';
        return <Icon name="bell" type={"Entypo"} style={{color:color,fontSize:23}} />
      } }}/>
     <Tab.Screen  name="Vote Board" component = {Votes} options={{
        tabBarLabel: ({focused, tintColor:color}) => {
          color = focused ? ScreenMode.colors.type === 'white' ||  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? 'gray' : '#dadada';
        return <Icon name="vote-outline" type={"MaterialCommunityIcons"} style={{color:color,fontSize:23}} />
      } }} />

   </Tab.Navigator>
    );
  }


render(){

    return (
       <View style={{flex:1,backgroundColor:ScreenMode.colors.type}}>
            {this.renderTopTabs()}
       </View>
    );
}

}

export default TopTabs;
 */