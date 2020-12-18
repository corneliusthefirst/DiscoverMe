/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
  Platform,
  Text,
} from 'react-native';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import ActiveUsers from '../ActiveUsers/index';
import Received from '../Received/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

@observer
class  Discover extends Component{
    constructor(props){
        super(props);
        this.state = {
          mounted:true,
        };
    }
    /*willUnMount(){}
    didMount(){}*/


    renderTopTabs = () => {
        return (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue :  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white',
                inactiveTintColor: ScreenMode.colors.type === 'white' ? '#7e7e7e' : '#dadada',
                style: { backgroundColor: ScreenMode.colors.headerBackground,marginTop:1},
                indicatorStyle: {backgroundColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue : 'white'},
               // tabStyle : {height:60},
                labelStyle:{fontSize:14, fontWeight: '600'},
              }}
              removeClippedSubviews = {Platform.OS === 'ios' ? false : true}
            >
              <Tab.Screen  name="Active"   component = {ActiveUsers} options={{ tabBarLabel: ScreenLanguage.Active }}/>
              <Tab.Screen  name="Received" component = {Received} options={{ tabBarLabel: ScreenLanguage.Received }} />

            </Tab.Navigator>

        );
    }


render(){
    return (
      this.state.mounted ?  <View style={{height:'100%',backgroundColor:ScreenMode.colors.bodyBackground}}>

          {/*</View>} <TouchableOpacity onPress={() => this.props.navigation.navigate('Received')}>
           <View style={{height:30,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',marginHorizontal:10}}>

               {/*<View style={{position:'absolute',left:0,bottom:8,justifyContent:'center',alignItems:'center'}}>
                 <Text style={{marginHorizontal:10,fontWeight:'bold',color:'black'}}>{ScreenLanguage.Active.toUpperCase()}</Text>
               </View>

              <View style={{height:20,width:20,borderRadius:10,borderWidth:0.2,borderColor:'black',justifyContent:'center',alignItems:'center',backgroundColor:AppStyles.colors.onlineGreen}}>
                <Text style={{color:'white'}}>5</Text>
              </View>*

              <Text style={{marginHorizontal:10,fontWeight:'bold',color:ScreenMode.colors.sendMessage}}>{ScreenLanguage.Received.toUpperCase()}</Text>
                <MaterialIcons name="call-received" style={{fontSize:18}}/>
              </View>
           </TouchableOpacity>*/}

            <ActiveUsers/>
       </View> : <WaveIndicatorView size={100} />
    );
 }

}

export default Discover;
