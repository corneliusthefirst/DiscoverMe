/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
} from 'react-native';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import ScreenLanguage from '../../components/screenLanguage';
import CreateTextInput from '../../components/createTextInput';
import Slider from '@react-native-community/slider';
//import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';


@observer
class  ModifyProfile extends Component{
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
            mounted:true,
            isEnabled:false,
        };
    }

    /*willUnMount(){}
    didMount(){}*/


    styles = StyleSheet.create({
      Item: {
          width: '100%',
          height: 50,
          alignSelf: 'center',
          justifyContent:'center',
          flexDirection:'row',
        },
    });

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

toggleSwitch = () => {
  this.setState({isEnabled:!this.state.isEnabled});
}


save = () => {

}

renderItem = (selected,selectedColor,name,title) => {
  return (
    <View style={this.styles.Item}>
        <View style={{alignItems:'flex-start',width:'90%'}}>
          <Text style={{color: selected ? selectedColor : ScreenMode.colors.bodyText,fontSize:15.8,fontWeight: selected ? '700' : '300'}}>{name}</Text>
        </View>
        <View style={{alignItems:'flex-end',marginTop:-8}}>
          <TouchableOpacity onPress={() => this.onChangedGender(title)}>
          { selected ? <MaterialIcons name="radio-button-checked" style={{color:selectedColor, fontSize:23}}/> : <MaterialIcons  name="radio-button-unchecked" style={{color:'gray',fontSize:23}}/>}
          </TouchableOpacity>
        </View>
    </View>
  );
};


render(){

    return (

      this.state.mounted ? <View style={{flex:1, flexDirection:'column',backgroundColor:ScreenMode.colors.bodyBackground,padding:12}}>
          <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10,width:'100%'}}>
             <View>
             <Switch
               trackColor={{ false: 'grey', true: ScreenMode.colors.type === 'black' ? '#0084ff' : ScreenMode.colors.sendMessage }}
               thumbColor={'#f4f3f4'}
               ios_backgroundColor="#3e3e3e"
               onValueChange={this.toggleSwitch}
               value={this.state.isEnabled}
              />
             </View>
              <View style={{flex:1,justifyContent:'center',alignItems:'flex-end'}}>
              <MaterialIcons
                    name={'check'}
                    style={{color:ScreenMode.colors.bodyIcon, fontSize:28 }}
                    onPress={this.save}
                  />
              </View>
           </View>

           <View style={{marginVertical:10}}>
           <CreateTextInput
            height={40}
            value={this.state.name}
            onChange={this.onChangedName}
            placeholder={ScreenLanguage.Name}
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
            placeholder={ScreenLanguage.UserName}
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
            placeholder={ScreenLanguage.Age}
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
            placeholder={ScreenLanguage.Bio}
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
            placeholder={ScreenLanguage.EmailAddress}
            color={'#bababa'}
            placeholderTextColor={'#bababa'}
            maxLength={50}
            style={{fontSize:15}}
            />
            </View>

            <View style={{marginVertical:10,flexDirection:'column'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
              <Text style={{color:ScreenMode.colors.bodyIcon}}>{ScreenLanguage.MaxAgeForDiscovery}</Text>
              <Text style={{marginRight:5, color:ScreenMode.colors.bodyIcon}}>{Math.round( this.state.maxAge )}</Text>
              </View>

           <Slider
            style={{width: '100%', height: 30}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={ScreenMode.colors.sendMessage}
            maximumTrackTintColor={ScreenMode.colors.bodyIcon}
            thumbTintColor={ScreenMode.colors.sendMessage}
            onSlidingComplete={(e) => this.onChangedMaxAge(e)}
            value={this.state.maxAge}
          />
          </View>

          <View style={{flexDirection:'column',justifyContent:'flex-start',marginVertical:10,width:'100%'}}>
           <Text  style={{color:ScreenMode.colors.bodyText,fontWeight:'bold',margin:5,marginBottom:15}} >{ScreenLanguage.PreferedGenderForDiscovery}</Text>

           {this.renderItem(this.state.gender === 'male',ScreenMode.colors.sendMessage,ScreenLanguage.Male,'male',this.onChangedGender)}
           {this.renderItem(this.state.gender === 'female',ScreenMode.colors.sendMessage,ScreenLanguage.Female,'female',this.onChangedGender)}
           {this.renderItem(this.state.gender === 'any',ScreenMode.colors.sendMessage,ScreenLanguage.Any,'any',this.onChangedGender)}

       </View>

       <View style={{margin:5,flexDirection:'column'}}>
       <Text  style={{color:ScreenMode.colors.bodyText,fontWeight:'bold'}} >{ScreenLanguage.PhoneNumber}</Text>
       <Text  style={{margin:5, color:ScreenMode.colors.bodyText}} >{this.state.phoneNumber}</Text>
       </View>

    </ScrollView>
 </View> : <WaveIndicatorView size={100} />
    );
}

}

export default ModifyProfile;
