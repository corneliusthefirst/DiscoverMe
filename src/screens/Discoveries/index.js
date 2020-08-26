/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Item} from 'native-base';

import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import ScreenLanguage from '../../components/screenLanguage';
import ActiveList from '../../components/screenComponents/ActiveList/ActiveList';
import shadower from '../../components/shadower';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';


@observer
class  Discoveries extends Unmounter{
constructor(props){
    super(props);
    this.state = {
      mounted:false,
    };
}
willUnMount(){}
didMount(){}

render(){
    return (
     this.state.mounted ?  <View>
        {/*<Item style={{...shadower(0)}}/>*/}
         <ActiveList active={false} {...this.props} />
      </View> : <WaveIndicatorView />
    );
}
}

export default Discoveries;
