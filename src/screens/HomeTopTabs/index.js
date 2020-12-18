/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
} from 'react-native';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import CurrentReminds from '../CurrentReminds';
import Votes from '../Votes';
import Relations from '../Relations';
import {Icon} from 'native-base';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Received from '../Received';
import AppStyles from '../../config/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import shadower from '../../components/shadower';


const Tab = createMaterialTopTabNavigator();

@observer
class  TopTabs extends Component{
    constructor(props){
        super(props);
        this.state = {
          messages:true,
          reminds:false,
          received:false,
        };
    }

buttonPress = (opt) => {
  switch (opt){
    case 'messages':
      this.setState({messages:true,reminds:false,received:false});
      break;
      case 'reminds':
      this.setState({messages:false,reminds:true,received:false});
      break;
      case 'received':
        this.setState({messages:false,reminds:false,received:true});
        break;
  }
}

styles = StyleSheet.create({
  circle:{
      height:36,
      width:36,
      borderRadius:20,
      //borderWidth:0.5,
      justifyContent:'center',
      alignItems:'center',
  },
  column:{
      flexDirection:'column',
  },
  row:{
   flexDirection:'row',
   paddingLeft:12,
   paddingRight:6,
   justifyContent:'flex-end',
   position:'absolute',
   //paddingBottom:5,
  },
  text:{
      fontSize:10,
  },

})

resetTab=()=>{
  this.setState({messages:true,reminds:false,received:false});
}

  Title = () => {
    return (
     this.state.reminds || this.state.received ?

             <View style={{position:'absolute',alignSelf:'flex-end',height:35,width:35,borderRadius:18,backgroundColor:'rgba(52,52,52,0.01)',opacity:0.5,justifyContent:'center',alignItems:'center'}}>
               <TouchableOpacity  onPress={()=>{this.resetTab();}}  style={{height:35,width:35,borderRadius:18,justifyContent:'center',alignItems:'center'}}>
             <Icon
                  style={{fontSize: 22, color: ScreenMode.colors.bodyIcon}}
                  type="FontAwesome"
                  name="angle-double-left"
                  onPress={()=>{this.resetTab();}}
                />
                 </TouchableOpacity>
             </View>

         :
        <View style={[this.styles.row,{backgroundColor:ScreenMode.colors.transparent,height:42,width:'100%'}]}>

           <View style={{width:'100%',height:'100%',justifyContent:'flex-start',flexDirection:'row',backgroundColor:ScreenMode.colors.transparent}}>

           <TouchableOpacity onPress={()=>{this.buttonPress('reminds');}}>
                 <View style={[this.styles.circle]}>
                    <Icon name="bell-outline" type={'MaterialCommunityIcons'} style={{color:ScreenMode.colors.headerIconColor,fontSize:24}} />
                  </View>
          </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.buttonPress('received');}}>
              <View style={[this.styles.circle,{marginLeft:15}]}>
               <Icon name="call-received" type={'MaterialCommunityIcons'} style={{color: ScreenMode.colors.headerIconColor,fontSize:24}} />
              </View>
            </TouchableOpacity>

           </View>
      </View>
    );
  }

render(){

    return (
       <View style={{flex:1,backgroundColor:ScreenMode.colors.bodyBackground}} >
         {this.state.messages ? <Relations {...this.props} /> : null}
         {this.state.reminds ? <CurrentReminds {...this.props} /> : null}
         {this.state.received ? <Received {...this.props} /> : null}
         {this.Title()}
       </View>
    );
}

}

export default TopTabs;







/*<View style={{width:'20%',justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row', backgroundColor:ScreenMode.colors.headerBackground}}>

<TouchableOpacity onPress={()=>{this.buttonPress('received');}}>

     <View style={[this.styles.circle,{ borderColor:this.state.received ? ScreenMode.colors.sendMessage : ScreenMode.colors.bodyBackground}]}>
        <Icon name="call-received" type={'MaterialCommunityIcons'} style={{color:this.state.received ? ScreenMode.colors.sendMessage : ScreenMode.colors.headerIconColor,fontSize:23}} />
     </View>

</TouchableOpacity>


 </View>*/


   /*} <TouchableOpacity onPress={()=>{this.buttonPress('messages');}}>
                <View style={[this.styles.circle,{marginRight:20, borderColor:this.state.messages ? ScreenMode.colors.sendMessage : ScreenMode.colors.bodyBackground}]}>
                     <Icon name="message1" type={'AntDesign'} style={{color:this.state.messages ? ScreenMode.colors.sendMessage : ScreenMode.colors.headerIconColor,fontSize:24}} />
                  </View>
           </TouchableOpacity>*/




/**
 *
 renderTopTabs = () => {
    return (
     <Tab.Navigator
      tabBarOptions={{
        activeTintColor:  ScreenMode.colors.type === 'white' ?  ScreenMode.colors.sendMessage : ScreenMode.colors.type === 'black' ? ScreenMode.colors.lightBlue : 'white',
        inactiveTintColor: ScreenMode.colors.type === 'white' ? '#999' : '#dadada',
       style: { backgroundColor: ScreenMode.colors.headerBackground,
         //height:70,marginTop:-5
        },
       indicatorStyle: {backgroundColor: ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue : 'white'},
       //tabStyle : {height:60},
       labelStyle:{fontSize:12 ,fontWeight: '700',fontFamily:'serif'},
       //showIcon:true,
     }}
     //removeClippedSubviews = {Platform.OS === 'ios' ? false : true}
   >

<Tab.Screen  name="Messages"   children={()=> <Relations {...this.props} />}
     options={{ tabBarLabel: ScreenLanguage.Messages , tabBarIcon:({focused, tintColor:color}) => {
      color = focused ? ScreenMode.colors.type === 'white' ?  ScreenMode.colors.sendMessage : ScreenMode.colors.type === 'black' ? ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? '#444' : '#cacaca';
     return <Icon name="message1" type={'AntDesign'} style={{color:color,fontSize:23}} />;
   }}}/>

     <Tab.Screen  name="Reminds"
    children={()=><CurrentReminds openRemind={this.props.openRemind} {...this.props} ref={ref => {this.CurrentReminds = ref; }} />}
    options={{ tabBarLabel: ScreenLanguage.CurrentReminds , tabBarIcon:({focused, tintColor:color}) => {
      color = focused ? ScreenMode.colors.type === 'white' ?  ScreenMode.colors.sendMessage : ScreenMode.colors.type === 'black' ? ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? '#444' : '#cacaca';
     return <Icon name="bell" type={'SimpleLineIcons'} style={{color:color,fontSize:23}} />;
   }}}/>

    <Tab.Screen  name="Received"   children={()=> <Received {...this.props} />}
     options={{ tabBarLabel: ScreenLanguage.Received , tabBarIcon:({focused, tintColor:color}) => {
      color = focused ? ScreenMode.colors.type === 'white' ?  ScreenMode.colors.sendMessage : ScreenMode.colors.type === 'black' ? ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? '#444' : '#cacaca';
     return <Icon name="call-received" type={'MaterialCommunityIcons'} style={{color:color,fontSize:23}} />;
   }}}/>


   </Tab.Navigator>
    );
  };



 */

























































/**({focused, tintColor:color}) => {
         color = focused ? ScreenMode.colors.type === 'white' ? ScreenMode.colors.blue :  ScreenMode.colors.type === 'black' ?  ScreenMode.colors.lightBlue : 'white' :  ScreenMode.colors.type === 'white' ? '#7e7e7e' : '#dadada';
        return  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:12 , color:color}}>{ScreenLanguage.CurrentReminds}</Text>
                  <Icon name="bell" type={"Entypo"} style={{color:'#ffb900',fontSize:15,marginRight: -5,marginLeft:5}} />
               </View>
      }} */

/**
 * <Tab.Screen  name="Vote Board" component = {Votes} options={{ tabBarLabel: ScreenLanguage.VoteBoard }}/>
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
