/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
} from 'react-native';
import { observer } from 'mobx-react';
import MessageList from '../../components/screenComponents/ChatRoom/MessageList';
import newMessages from '../../assets/fake_currentreminds';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';

@observer
class  CurrentReminds extends Unmounter{
    constructor(props){
        super(props);
        this.state = {
          mounted:true,
        };
    }

    willUnMount(){}
    didMount(){}


render(){

    return (
       this.state.mounted ? <View  style={{height:'100%',width:'100%'}}>
         <View style={{flex: 1}}>
         <MessageList {...this.props} newMessages={newMessages} Cremind
          donotBlur={() => {this.donotBlur();}}
          openRemind={(data, passed) => {
            this.props.openRemind(data, passed);
          }} />
        </View>

       </View> : <WaveIndicatorView />
    );
}

}

export default CurrentReminds;
