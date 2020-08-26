/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
} from 'react-native';

//import stores from '../../stores/index';
//import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
//import Header from '../../components/screenComponents/header';
//import ScreenLanguage from '../../components/screenLanguage';
import  ActiveList from '../../components/screenComponents/ActiveList/index';
import FloatingButton from '../HomeTopTabs/floatingButton';

@observer
class  Relations extends Component {
    constructor(props){
        super(props);
    }
render(){
    return (
        <View style={{height:'100%', width:'100%'}}>
            <ActiveList active={false} {...this.props} />
            <FloatingButton  {...this.props} />
       </View>
    );
}

}

export default Relations;
