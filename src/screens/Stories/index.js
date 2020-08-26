/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import ScreenLanguage from '../../components/screenLanguage';
import Orientation from 'react-native-orientation-locker';
import MyStoriesProfile from './myStoryProfile';
import AllStoriesView from './allStoriesView';
import { Icon } from 'native-base';

@observer
class  Stories extends Component{
    constructor(props){
        super(props);
        this.state = {
            mystories:{},
        };
    }

componentDidMount(){
    Orientation.lockToPortrait();
    stores.MystoriesStore.fetchMyStories().then((mystories)=>{
        this.setState({mystories:mystories});
        //console.warn(mystories);
    });
}


render(){
    //console.warn('props are', this.props);

    return (
       <View style={{flexDirection:'column',height:'100%',backgroundColor:ScreenMode.colors.bodyBackground}}>
           <MyStoriesProfile mystories={this.state.mystories}  {...this.props} />
           <View
            style={{
            height: 40,
            alignItems: 'center',
           // backgroundColor: '#F8F8FF',
            marginTop: 15,
            flexDirection:'row',
          }}>
          <Text style={{fontWeight: "bold",fontSize:16, marginLeft: 15}}>All Stories</Text>

         <View style={{position:'absolute',right:15}}>
              <Icon  name="search1" type="AntDesign" style={{fontSize:25}} />
         </View>

        </View>
         <AllStoriesView {...this.props}  />
       </View>
    );
}

}

export default  Stories;
