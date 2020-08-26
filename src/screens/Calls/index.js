/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Thumbnail,Icon} from 'native-base';

import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import ScreenLanguage from '../../components/screenLanguage';
import CallsList from '../../components/screenComponents/CallsList';

@observer
class  Calls extends Component{
    constructor(props){
        super(props);
    }

render(){

    return (
       <View>
           <CallsList/>
       </View>
    );
}

}

export default Calls;
