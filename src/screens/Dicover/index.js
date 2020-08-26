/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
  Platform,
} from 'react-native';

import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import ActiveUsers from '../ActiveUsers/index';
import Received from '../Received/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';

const Tab = createMaterialTopTabNavigator();

@observer
class  Discover extends Unmounter{
    constructor(props){
        super(props);
        this.state = {
          mounted:true,
        };
    }
    willUnMount(){}
    didMount(){}


    renderTopTabs = () => {
        return (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue :  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white',
                inactiveTintColor: ScreenMode.colors.type === 'white' ? '#7e7e7e' : '#dadada',
                style: { backgroundColor: ScreenMode.colors.headerBackground},
                indicatorStyle: {backgroundColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue : 'white'},
               // tabStyle : {height:60},
                labelStyle:{fontSize:14, fontWeight: '600'},
              }}
              removeClippedSubviews = {Platform.OS === 'ios' ? false : true}
            >
              <Tab.Screen  name="Active"   component = {ActiveUsers} options={{ tabBarLabel: ScreenLanguage.currentlang.Active }}/>
              <Tab.Screen  name="Received" component = {Received} options={{ tabBarLabel: ScreenLanguage.currentlang.Received }} />

            </Tab.Navigator>

        );
    }


render(){
    return (
      this.state.mounted ?  <View style={{flex:1,backgroundColor:ScreenMode.colors.bodyBackground}}>
            {this.renderTopTabs()}
       </View> : <WaveIndicatorView size={100} />
    );
 }

}

export default Discover;
