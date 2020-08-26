/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {Icon, Item, Radio, Right, Left} from 'native-base';

import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import CreateTextInput from '../../components/createTextInput';
import Slider from '@react-native-community/slider';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';

@observer
class  ModifyProfile extends Unmounter{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            username:'',
            age:'',
            bio:'',
            email:'',
            maxAge:0,
            gender:'any',
            phoneNumber:'+330666406835',
            mounted:false,
        };
    }

    willUnMount(){}
    didMount(){}

onChangedName = (text) => {
  this.setState({name:text});
}
onChangedUserName = (text) => {
    this.setState({username:text});
}
onChangedAge = (text) => {
    this.setState({age:text});
  }
onChangedBio = (text) => {
    this.setState({bio:text});
}

onChangedEmail = (text) => {
  this.setState({email:text});
}

onChangedMaxAge = (num) => {
  this.setState({maxAge:num });
  //console.warn(this.state.maxAge);
}
onChangedGender = (text) => {
  this.setState({gender:text});
}

save = () => {

}

render(){

    return (

      this.state.mounted ? <View style={{flex:1, flexDirection:'column',backgroundColor:ScreenMode.colors.bodyBackground,padding:13}}>
          <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginBottom:10}}>
              <Icon
                    name={'check'}
                    style={{color:ScreenMode.colors.bodyIcon, fontSize:25 }}
                    type={'AntDesign'}
                    onPress={this.save}
                  />
           </View>

           <View style={{marginVertical:10}}>
           <CreateTextInput
            height={40}
            value={this.state.name}
            onChange={this.onChangedName}
            placeholder={ScreenLanguage.currentlang.Name}
            color={'#bababa'}
            placeholderTextColor={'#bababa'}
            maxLength={20}
            style={{fontSize:15}}
            />
           </View>

           <View style={{marginVertical:10}}>
          <CreateTextInput
            height={40}
            value={this.state.username}
            onChange={this.onChangedUserName}
            placeholder={ScreenLanguage.currentlang.UserName}
            color={'#bababa'}
            placeholderTextColor={'#bababa'}
            maxLength={20}
            style={{fontSize:15}}
            />
            </View>

            <View style={{marginVertical:10}}>
          <CreateTextInput
            height={40}
            value={this.state.age}
            onChange={this.onChangedAge}
            placeholder={ScreenLanguage.currentlang.Age}
            color={'#bababa'}
            placeholderTextColor={'#bababa'}
            maxLength={20}
            style={{fontSize:15}}
            />
            </View>

          <View style={{marginVertical:10}}>
          <CreateTextInput
            height={40}
            value={this.state.bio}
            onChange={this.onChangedBio}
            placeholder={ScreenLanguage.currentlang.Bio}
            color={'#bababa'}
            placeholderTextColor={'#bababa'}
            maxLength={20}
            style={{fontSize:15}}
            />
            </View>

          <View style={{marginVertical:10}}>
          <CreateTextInput
            height={40}
            value={this.state.email}
            onChange={this.onChangedEmail}
            placeholder={ScreenLanguage.currentlang.EmailAddress}
            color={'#bababa'}
            placeholderTextColor={'#bababa'}
            maxLength={50}
            style={{fontSize:15}}
            />
            </View>

            <View style={{marginVertical:10,flexDirection:'column'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
              <Text>{ScreenLanguage.currentlang.MaxAgeOfDiscovery}</Text>
              <Text>{Math.round( this.state.maxAge )}</Text>
              </View>

           <Slider
            style={{width: '100%', height: 30}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={ScreenMode.colors.sendMessage}
            maximumTrackTintColor="#000000"
            thumbTintColor={ScreenMode.colors.sendMessage}
            onSlidingComplete={(e) => this.onChangedMaxAge(e)}
            value={this.state.maxAge}
          />
          </View>

          <View style={{flexDirection:'column',justifyContent:'flex-start',marginVertical:10,width:'100%',paddingRight:5}}>
           <Text  style={{color:'black',margin:5}} >{ScreenLanguage.currentlang.PreferedGenderForDiscovery}</Text>
          <Item style={{height:40,width:'100%'}} noBorder>
            <Left>
              <Text  style={{color:'black'}} >{ScreenLanguage.currentlang.Male}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.gender === 'male'}
                onPress={()=> this.onChangedGender('male')}
              />
            </Right>
          </Item>

          <Item style={{height:40,width:'100%'}}  noBorder>
            <Left>
              <Text  style={{color:'black'}} >{ScreenLanguage.currentlang.Female}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.gender === 'female'}
                onPress={()=> this.onChangedGender('female')}
              />
            </Right>
          </Item>

          <Item style={{height:40,width:'100%'}} noBorder>
            <Left>
              <Text  style={{color:'black'}} >{ScreenLanguage.currentlang.Any}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.gender === 'any'}
                onPress={()=> this.onChangedGender('any')}
              />
            </Right>
          </Item>

       </View>

       <View style={{margin:5,flexDirection:'column'}}>
       <Text  style={{color:'black'}} >{ScreenLanguage.currentlang.PhoneNumber}</Text>
       <Text  style={{color:'black',margin:5}} >{this.state.phoneNumber}</Text>
       </View>

    </ScrollView>
 </View> : <WaveIndicatorView size={100} />
    );
}

}

export default ModifyProfile;
