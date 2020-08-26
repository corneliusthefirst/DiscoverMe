/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenMode from '../../../screenMode';
import Moment from 'react-moment';
import {Button,Icon} from 'native-base';
import stores from '../../../../stores/index';
import {find} from 'lodash';
import AppStyles from '../../../../config/styles';
import { observer } from 'mobx-react';
import CreateTextInput from '../../../createTextInput';
import ScreenLanguage from '../../../screenLanguage';

@observer
class RemindDetailPage extends Component {
  state = {
      isParticipant:false,
      participant:{},
      refusedClick:false,
  };

  /*
  shouldComponentUpdate(nextProps) {
    if (_.isEqual(this.props.item, nextProps.item)) {
      return false;
    }
    return true;
  }
*/

  renderParticipant = (participants) => {
    let participantString = ' ';
    participants.map((participant, index) => {
      if (index === 0) {
        participantString = participantString + '#' + participant.nickname;
      } else {
        participantString =
          participantString + ',' + '#' + participant.nickname;
      }
    });
    return participantString;
  };
  initParticipant = (participant) => {
    if (participant) {
       this.setState({isParticipant:true, participant:participant});
    }
  }

  initialize = () => {
    let participant = find(this.props.remindData.remind.participant,{phone:stores.LoginStore.user.phone});
    this.initParticipant(participant);
  }

 componentDidMount(){
    this.initialize();
 }

 goToParticipantList = () => {
     this.props.donotBlur();
     this.props.navigation.navigate('ParticipantList',{data:this.props.remindData.remind});
 }
s
 styles = {
    participantView: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
    },
    participantNameStyle: {
      color: ScreenMode.colors.bottomIconColor,
      fontSize: 14,
      width: '50%',
    },
    dateView: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
    },
    dateNameStyle: {
      color: ScreenMode.colors.bottomIconColor,
      fontSize: 14,
      width: '70%',
    },
    Icon: {
        color:'black',
        fontSize: 22,
        marginRight:5,
    },
  }


  acceptedRemind = () => {};
  refusedRemind = () => {};
  savedRefusedMessage = () => {};

  render() {

    return (
      <View
        style={{
          height: 210,
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

        <View style={{width:'100%',justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:5,paddingTop:10}}>
          <Icon name="close" type="AntDesign" style={this.styles.Icon} onPress={() => {this.props.onClosed();}}/>
        </View>

        {this.state.refusedClick ?
        <View style={{marginTop:10,width:'90%',alignSelf:'center',alignItems:'center',justifyContent:'center',borderWidth:0.7,borderColor:'black',borderRadius:8}}>
            <CreateTextInput height={90} numberOfLines={4} multiline={true} placeholder={ScreenLanguage.currentlang.RefusalMessage + ' ?'} noBoder placeholderTextColor={'gray'} />
        </View>
        : null}

       {!this.state.refusedClick ?
       <TouchableOpacity onPress={()=>{this.goToParticipantList();}}>
       <View style={this.styles.participantView}>
         <Text style={{fontWeight: '700'}}> Remind Message Set For </Text>

         <Text
           ellipsizeMode="tail"
           numberOfLines={2}
           style={this.styles.participantNameStyle}>
           {this.renderParticipant(this.props.remindData.remind.participant)}
         </Text>
       </View>
       </TouchableOpacity> : null}

       {!this.state.refusedClick ? <View style={this.styles.dateView}>
            <Text> On the{'   '}</Text>
            <Moment
              format={'D MMM YYYY  [at]  LT'}
              element={Text}
              style={this.styles.dateNameStyle}
              withTitle>
              {this.props.remindData.created_at}
            </Moment>
          </View> : null }

        {!this.state.refusedClick ? <View style={this.styles.dateView}>
             <Text> To the {'   '}</Text>
            <Moment
               format={'D MMM YYYY  [at]  LT'}
              element={Text}
              style={this.styles.dateNameStyle}
              withTitle>
              {this.props.remindData.remind.period}
            </Moment>
          </View> : null }


          {this.state.isParticipant ?
                  (this.props.passed ?
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end',padding:10,marginTop:18}}>
                    <Text style={{color:AppStyles.colors.green, fontSize:12}}>#Out of Date</Text>
               </View> :
            <View style={{flexDirection: 'row', alignSelf: 'flex-end',padding:10,marginTop:7}}>
            {!this.state.participant.accepted.state && !this.state.participant.refused.state ?
            <Button
            style={{
              alignSelf: 'center',
              width: 100,
              borderRadius: 5,
              borderColor: '#1FABAB',
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItem: 'center',
              height: 40,
            }}
            onPress={() => {
              this.state.refusedClick ? this.props.onClosed(this.state.messageWithUrl) : this.setState({refusedClick:true});
            }}>
            <Text style={{color: '#e74c3c'}}>{this.state.refusedClick ? ScreenLanguage.currentlang.None : ScreenLanguage.currentlang.Deny}</Text>
          </Button> : null }

          {!this.state.participant.accepted.state && !this.state.participant.refused.state ?
          <Button
            style={{
              alignSelf: 'center',
              width: 100,
              borderRadius: 5,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItem: 'center',
              marginLeft: 15,
              height: 40,
              marginRight: 5,
            }}
            onPress={this.state.refusedClick ? this.savedRefusedMessage : this.acceptedRemind}>
            <Text style={{color: AppStyles.colors.green}} >{this.state.refusedClick ? ScreenLanguage.currentlang.Save : ScreenLanguage.currentlang.Accept }</Text>
          </Button> : null }

           {this.state.participant.accepted.state  ?
                 (!this.state.participant.done.state  ? <Button
                 style={{
                   alignSelf: 'center',
                   paddingHorizontal: 15,
                   borderRadius: 5,
                   backgroundColor: 'white',
                   justifyContent: 'center',
                   alignItem: 'center',
                   marginLeft: 15,
                   height: 35,
                   marginRight: 5,
                 }}
                 onPress={this.createStory}>
                 <Text style={{color: AppStyles.colors.green}}>Done</Text>
               </Button> : <Text style={{color: AppStyles.colors.green, marginRight:3}}>#done</Text> ) : null}

               {this.state.participant.refused.state ? <Text style={{color: AppStyles.colors.red, marginRight:8}}>#refused</Text> : null }

           </View>
        ) :
        <View style={{flexDirection: 'row', alignSelf: 'flex-end',padding:10,marginTop:20}}>
             <Text style={{color:AppStyles.colors.green, fontSize:12}}>#You are not a participant</Text>
        </View>
         }

        </ScrollView>
      </View>

    );
  }
}

export default RemindDetailPage;

