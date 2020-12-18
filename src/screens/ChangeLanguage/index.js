/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import ScreenLanguage from '../../components/screenLanguage';
import { observer,Observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';



@observer
class ChangeLanguage  extends Unmounter{

    constructor(props){
        super(props);
        this.state = {
          mounted:true,
          currentlang: stores.CurrentScreenLanguage.currentlanguage,
          changeLanguagedata : [
            {id:'1', name:ScreenLanguage.English, lang:'English'},
            {id:'2', name:ScreenLanguage.MandarinChinese, lang:'Mandarin Chinese'},
            {id:'3', name:ScreenLanguage.Hindi, lang:'Hindi'},
            {id:'4', name:ScreenLanguage.Spanish, lang:'Spanish'},
            {id:'5', name:ScreenLanguage.French, lang:'French'},
            {id:'6', name:ScreenLanguage.German, lang:'German'},
            {id:'7', name:ScreenLanguage.Russian, lang:'Russian'},
            {id:'8', name:ScreenLanguage.Japanese, lang:'Japanese'},
            {id:'9', name:ScreenLanguage.Portuguese, lang:'Portuguese'},
            {id:'10', name:ScreenLanguage.Bengali, lang:'Bengali'},
            {id:'11', name:ScreenLanguage.Indonesian, lang:'Indonesian'},
          ],
        };
    }



    willUnMount(){}
    didMount(){}
    styles = StyleSheet.create({
      Item: {
        width: '100%',
        height: 50,
        alignSelf: 'center',
        justifyContent:'center',
        flexDirection:'row',
      },
      });

    ChangeLanguage = (language)=>{
      if (stores.CurrentScreenLanguage.currentlanguage !== language){
          stores.CurrentScreenLanguage.setLanguage(language).then(() => {
             //ScreenLanguage.setLanguage(language);
             this.setState({currentlang:language});
             this.setState({changeLanguagedata: [
              {id:'1', name:ScreenLanguage.English, lang:'English'},
              {id:'2', name:ScreenLanguage.MandarinChinese, lang:'Mandarin Chinese'},
              {id:'3', name:ScreenLanguage.Hindi, lang:'Hindi'},
              {id:'4', name:ScreenLanguage.Spanish, lang:'Spanish'},
              {id:'5', name:ScreenLanguage.French, lang:'French'},
              {id:'6', name:ScreenLanguage.German, lang:'German'},
              {id:'7', name:ScreenLanguage.Russian, lang:'Russian'},
              {id:'8', name:ScreenLanguage.Japanese, lang:'Japanese'},
              {id:'9', name:ScreenLanguage.Portuguese, lang:'Portuguese'},
              {id:'10', name:ScreenLanguage.Bengali, lang:'Bengali'},
              {id:'11', name:ScreenLanguage.Indonesian, lang:'Indonesian'},
            ]});
         });
      }

       }


       headerBody = () => {
        return (
            <HeaderBodySimple {...this.props} title={ScreenLanguage.ChangeLanguage} />
        );
    }

    renderItem = ({item}) => {
        let selected = this.state.currentlang === item.lang;
        return (
             <View style={this.styles.Item}>
                 <View style={{alignItems:'flex-start',width:'90%'}}>
                   <Text style={{color: selected ? ScreenMode.colors.sendMessage : ScreenMode.colors.bodyText,fontSize:15.8,fontWeight: selected ? '700' : '300'}}>{item.name}</Text>
                 </View>
                 <View style={{alignItems:'flex-end'}}>
                   <TouchableOpacity onPress={() => this.ChangeLanguage(item.lang)} >
                   { selected ? <MaterialIcons name="radio-button-checked" style={{color:ScreenMode.colors.sendMessage, fontSize:23}}/> : <MaterialIcons  name="radio-button-unchecked" style={{color:'gray',fontSize:23}}/>}
                   </TouchableOpacity>
                 </View>
             </View>
        );
    };

    render(){
      return (
       this.state.mounted ?  <View style={[styles.container,{backgroundColor:ScreenMode.colors.bodyBackground}]}>
        <Header height={50} backgroundColor={ScreenMode.colors.statusBarColor} barStyle = {ScreenMode.colors.statusbarStyle} headerBody={this.headerBody} />

        <View style={{maxHeight: '100%',marginHorizontal:18,marginTop:15}}>
          <DiscoveryFlatList
            data={this.state.changeLanguagedata}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={30}
            maxToRenderPerBatch={0}
            getItemLayout={this.getItemLayout}
          />
        </View>

      </View> : null
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});


export default ChangeLanguage;