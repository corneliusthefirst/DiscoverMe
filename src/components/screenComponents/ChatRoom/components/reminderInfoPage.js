/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenMode from '../../../screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../../screenLanguage';
import moment from 'moment';
import { Icon } from 'native-base';

@observer
class RemindDInfoPage extends Component {

 styles = StyleSheet.create({
    Icon: {
        color:'black',
        fontSize: 22,
        marginRight:5,
    },
  boldText: {
      fontSize:14,
      fontWeight:'700',
      paddingRight:10,
  },
  close: {width:'100%',justifyContent:'flex-end',alignItems:'flex-end',paddingTop:10, paddingBottom:5},
  listView: { flexDirection:'row',width:'100%',paddingHorizontal:10,paddingVertical:8},
 });

    render() {

    return (
      <View
        style={{
          height: 280,
          width: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderWidth:0.5,
          borderBottomColor:'white',
          position:'absolute',
          bottom:0,
        }}>
        <ScrollView>
          <View style={{flex:1, flexDirection:'column',paddingHorizontal:5}} >
            <View style={this.styles.close}>
            <Icon name="close" type="AntDesign" style={this.styles.Icon} onPress={() => {this.props.onClosed();}}/>
           </View>


          <View style={this.styles.listView} >
              <Text style={this.styles.boldText} >{ScreenLanguage.Daily} :</Text>
              <View style={{flex:1}}>
              <Text numberOfLines={3} >{ScreenLanguage.DailyInfo} {moment(this.props.period).format('LT')}</Text>
              </View>

          </View>

          <View style={this.styles.listView} >
              <Text style={this.styles.boldText} >{ScreenLanguage.Weekly} :</Text>
              <View style={{flex:1}}>
                 <Text numberOfLines={3} >{ScreenLanguage.WeeklyInfo} {moment(this.props.period).format('dddd [at] LT')}</Text>
              </View>
          </View>


          <View style={this.styles.listView} >
              <Text style={this.styles.boldText} >{ScreenLanguage.Monthly} :</Text>
              <View style={{flex:1}}>
                   <Text numberOfLines={3} >{ScreenLanguage.MonthlyInfo} {moment(this.props.period).format('Do [at] LT')}</Text>
               </View>
        </View>



          <View style={this.styles.listView} >
              <Text style={this.styles.boldText} >{ScreenLanguage.Yearly} :</Text>
              <View style={{flex:1}}>
                 <Text numberOfLines={3} >{ScreenLanguage.YearlyInfo} {moment(this.props.period).format('Do MMMM  [at] LT')}</Text>
              </View>

          </View>




          </View>
        </ScrollView>
      </View>

    );
  }
}

export default RemindDInfoPage;

