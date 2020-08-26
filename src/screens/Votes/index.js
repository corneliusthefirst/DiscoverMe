/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import {Thumbnail,Icon} from 'native-base';

import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';

import Allvotes from './fake_votes';
import VoteList from './components/voteList';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import Orientation from 'react-native-orientation-locker';

@observer
class  Votes extends Unmounter {
    constructor(props){
        super(props);
        this.state = {
          mounted:true,
        };
    }
styles  = StyleSheet.create({
  container:{
   flex:1,
   flexDirection:'column',
   backgroundColor:'white',
  },
  participations:{
   flexDirection:'row',
   justifyContent:'space-between',
   paddingHorizontal:20,
   paddingTop:15,
  },
  row:{
    flexDirection:'row',
    paddingHorizontal:15,
    paddingTop:15,
    //justifyContent:'center',
    alignItems:'center',
  },
  roundIcon: {
      borderWidth:0.2,
      height:40,
      width:40,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      marginRight:20,
   },
  allvotes: {
    flex:1,
    backgroundColor:'red',
    marginTop:15,
  },
});

willUnMount(){
  Orientation.unlockAllOrientations();
}
didMount(){
  Orientation.lockToPortrait();
}

render(){

    return (
      this.state.mounted ?  <View style={this.styles.container}>
           <View style={this.styles.participations}>
              <Text style={{fontSize:12.5}}>{ScreenLanguage.currentlang.NoOfParticipations} : </Text>
              <Text style={{color:ScreenMode.colors.sendMessage}}>25</Text>
           </View>

           <View style={this.styles.row}>
           <View style={[this.styles.roundIcon,{ backgroundColor:ScreenMode.colors.sendMessage}]}>
          <Icon
              name="create"
              type="MaterialIcons"
              style={{color: 'white', fontSize: 22}}
              onPress={() => this.openCamera()}
            />
          </View>

             <Text>{ScreenLanguage.currentlang.NewVote}</Text>
           </View>

           <View style={this.styles.row}>
           <View style={[this.styles.roundIcon,{ backgroundColor:ScreenMode.colors.sendMessage}]}>
           <Icon
              name="view-dashboard"
              active={true}
              type="MaterialCommunityIcons"
              style={{color: 'white', fontSize: 22}}
              onPress={() => this.openCamera()}
            />
            </View>
             <Text>{ScreenLanguage.currentlang.DashBoard}</Text>
           </View>

           <View style={this.styles.allvotes}>
               <VoteList votes={Allvotes} donotBlur={() => {this.donotBlur();}} />
           </View>
       </View>  : <WaveIndicatorView size={100} />
    );
}

}

export default Votes;
