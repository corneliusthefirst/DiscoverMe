/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DiscoveryModal from '../../../DiscoveryModal';
import {ScrollView} from 'react-native-gesture-handler';
import ScreenMode from '../../../screenMode';
import Moment from 'react-moment';
import {Button} from 'native-base';
import stores from '../../../../stores/index';
import {find} from 'lodash';
import AppStyles from '../../../../config/styles';
import { observer } from 'mobx-react';
//import moment from 'moment';

/*
const calendarStrings = {
  //lastDay: '[Yesterday] [at]  LT',
  //sameDay: '[Today] [at]  LT ',
  //lastWeek: '[Last Week] D MMM  [at]  LT',
  sameElse: 'D MMM YYYY  [at]  LT',
  //nextDay: '[Tomorrow at] LT',
};*/

@observer
class RemindDetailModal extends DiscoveryModal {
  state = {
      isParticipant:false,
      participant:{},
  };
  initialize() {}

  onClosedModal() {
    this.props.onClosed();
  }
  style = {justifyContent: 'flex-end', margin: 0};
  backdropOpacity = 0.2;
  swipeDirection = 'down';
  coverScreen = true;
  noshadow = false;
  scrollOffset = 1;

  //type = 'LeftInRightOut';

  renderParticipant = (participants) => {
    let participantString = ' ';
    //console.warn(participants);
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
 componentDidMount(){
   let participant = find(this.props.remindData.remind.participant,{phone:stores.LoginStore.user.phone});
    this.initParticipant(participant);
 }

 goToParticipantList = () => {
     this.props.donotBlur();
     this.props.navigation.navigate('ParticipantList',{data:this.props.remindData.remind.participant});
     this.onClosedModal();
 }

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
  }

  modalBody() {

    return (
      <View
        style={{
          height: 190,
          width: '100%',
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <ScrollView>
        <TouchableOpacity onPress={()=>{this.goToParticipantList()}}>
          <View style={this.styles.participantView}>
            <Text style={{fontWeight: '700'}}> Remind Message Set For </Text>

            <Text
              ellipsizeMode="tail"
              numberOfLines={2}
              style={this.styles.participantNameStyle}>
              {this.renderParticipant(this.props.remindData.remind.participant)}
            </Text>
          </View>
          </TouchableOpacity>

          <View style={this.styles.dateView}>
            <Text> On the{'   '}</Text>
            <Moment
              format={'D MMM YYYY  [at]  LT'}
              element={Text}
              style={this.styles.dateNameStyle}
              withTitle>
              {this.props.remindData.created_at}
            </Moment>
          </View>

          <View style={this.styles.dateView}>
             <Text> To the {'   '}</Text>
            <Moment
               format={'D MMM YYYY  [at]  LT'}
              element={Text}
              style={this.styles.dateNameStyle}
              withTitle>
              {this.props.remindData.remind.period}
            </Moment>
          </View>

 
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
              this.props.onClosed(this.state.messageWithUrl);
            }}>
            <Text style={{color: '#e74c3c'}}>Deny</Text>
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
            onPress={this.createStory}>
            <Text style={{color: AppStyles.colors.green}} >Accept</Text>
          </Button> : null }

           {this.state.participant.accepted.state  ?
                 (!this.state.participant.done.state  ? <Button
                 style={{
                   alignSelf: 'center',
                   width: 90,
                   borderRadius: 5,
                   backgroundColor: 'white',
                   justifyContent: 'center',
                   alignItem: 'center',
                   marginLeft: 15,
                   height: 40,
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

export default RemindDetailModal;

