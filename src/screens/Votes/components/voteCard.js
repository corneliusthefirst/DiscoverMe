/* eslint-disable */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import UserView from '../../../components/StoriesReader/components/UserView';
import ScreenMode from '../../../components/screenMode';

class VoteCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  styles  = StyleSheet.create({
    container:{
     height:120,
     flexDirection:'column',
     paddingHorizontal:10,
     paddingVertical:5,
     backgroundColor:'white',
    },
    row:{
      flexDirection:'row',
      paddingHorizontal:5,
      paddingRight:12,
      alignItems:'center',
    },

  });
  

  openVote = () => {

  }

  render() {
    return (
      <View style={this.styles.container}>
            <View style={{width:'100%',alignItems:'flex-end',justifyContent:'center'}}>
                <Text style={{color:ScreenMode.colors.sendMessage,fontSize:12}}>{this.props.item.type === 'vote' ? '#vote' : '#survey'}</Text>
            </View>
          <View style={this.styles.row}>
             
              <UserView profile={this.props.item.creatorInfo.profile} name={this.props.item.creatorInfo.nickname}
              updated_at={this.props.item.updated_at} imagesize={40} namefontsize={13} />
            

             <Entypo
              name="dots-three-vertical"
              type="Entypo"
              style={{color: 'black', fontSize: 15}}
              onPress={() => this.openVote()}
            />
          </View>

          <View
          style={{
            height: 70,
            width: '85%',
            flexDirection: 'row',
            alignItems: 'flex-start',
            backgroundColor: 'white',
            padding: 5,
            paddingLeft: 10,
          }}>
          <Text style={{fontWeight: 'bold',fontSize:10}}>Context : </Text>
          <View
            style={{display: 'flex', padding: 5, paddingTop: 0, width: '100%'}}>
            <Text numberOfLines={3} ellipsizeMode="tail" style={{fontSize:11,color:'#595959'}}>
              {this.props.item.context}
            </Text>
          </View>
        </View>

       
      </View>
    );
  }
}



export default VoteCard;
