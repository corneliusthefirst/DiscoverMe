/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import ScreenLanguage from '../../components/screenLanguage';
import { observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

@observer
class ChangeMode  extends Component{

    constructor(props){
        super(props);
        this.state = {
          mounted:true,
          darktheme:'',
          changeModedata: [
            {id:'1', title: 'redMode',name:ScreenLanguage.RedMode,selectedColor:'#c94c4c', type:'red'},
            {id:'2', title: 'darkMode',name:ScreenLanguage.DarkMode,selectedColor:'black', type:'black'},
            {id:'4', title: 'whiteMode',name:ScreenLanguage.WhiteMode,selectedColor:ScreenMode.colors.blue, type:'white'},
            {id:'3', title: 'greenMode',name:ScreenLanguage.GreenMode,selectedColor:'#128C7E', type:'green'},
          ],
        };
    }

    willUnMount(){}
    didMount(){}
    componentDidMount(){
      stores.CurrentScreenMode.getCurrentMode().then((cmode) => {
        this.setState({darktheme:cmode.currentTheme});
      });
    }

    styles = StyleSheet.create({
      Item: {
          width: '100%',
          height: 50,
          alignSelf: 'center',
          justifyContent:'center',
          flexDirection:'row',
        },
      });

    changeMode = (mode)=>{

      stores.CurrentScreenMode.getCurrentMode().then((cmode) => {
        if (mode.type === 'theme'){

          let options = {mode:cmode.currentMode,theme:mode.value};
          stores.CurrentScreenMode.setMode(options).then(() => {
            ScreenMode.setMode(options);
            this.setState({darktheme:mode.value});
          });

        } else {

          let options = {mode:mode.value,theme:cmode.currentTheme};
          stores.CurrentScreenMode.setMode(options).then(() => {
            ScreenMode.setMode(options);
          });
        }
      });
    }

    headerBody = () => {
        return (
          <HeaderBodySimple {...this.props} title={ScreenLanguage.ChangeMode}  />
        );
    }

    renderItem = ({item}) => {
      let selected = ScreenMode.colors.type === item.type;
      return (
        <View style={this.styles.Item}>
            <View style={{alignItems:'flex-start',width:'90%'}}>
              <Text style={{color: selected ? item.selectedColor : ScreenMode.colors.bodyText,fontSize:15.8,fontWeight: selected ? '700' : '300'}}>{item.name}</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity onPress={() => this.changeMode({type:'mode',value:item.title})}>
              { selected ? <MaterialIcons name="radio-button-checked" style={{color:item.selectedColor, fontSize:23}}/> : <MaterialIcons  name="radio-button-unchecked" style={{color:'gray',fontSize:23}}/>}
              </TouchableOpacity>
            </View>
        </View>
      );
    };

    render(){
      return (
        this.state.mounted ? <View style={[styles.container,{backgroundColor:ScreenMode.colors.bodyBackground}]}>
        <Header height={50} backgroundColor={ScreenMode.colors.headerBackground} barStyle = {ScreenMode.colors.statusbarStyle} headerBody={this.headerBody} />
        <View>

        <View style={{paddingHorizontal:20}}>
               <Text style={{fontWeight:'bold',fontSize:16,color:ScreenMode.colors.bodyText}}>{ScreenLanguage.Theme}</Text>
          </View>

        <View style={[this.styles.Item,{paddingHorizontal:20,paddingVertical:10}]}>
            <View style={{alignItems:'flex-start',width:'90%'}}>
           <Text style={{color: this.state.darktheme === 'dark' ? ScreenMode.colors.sendMessage : ScreenMode.colors.bodyText,fontSize:15.8,fontWeight: this.state.darktheme ? '700' : '300'}}>{ScreenLanguage.DarkTheme}</Text>
            </View>
            <View style={{alignItems:'flex-end'}}>
              <TouchableOpacity onPress={() => this.state.darktheme === 'dark' ? this.changeMode({type:'theme',value:'white'}) : this.changeMode({type:'theme',value:'dark'})}>
              { this.state.darktheme === 'dark' ? <MaterialIcons name="radio-button-checked" style={{color: ScreenMode.colors.sendMessage, fontSize:23}}/> : <MaterialIcons  name="radio-button-unchecked" style={{color:'gray',fontSize:23}}/>}
              </TouchableOpacity>
            </View>
        </View>

        <View style={{paddingHorizontal:22,paddingVertical:5}}>
            <Text style={{fontWeight:'bold',fontSize:16,color:ScreenMode.colors.bodyText}}>{ScreenLanguage.Mode}</Text>
          </View>

        </View>
        <View style={{marginHorizontal:20,marginTop:15}}>
          <DiscoveryFlatList
            data={this.state.changeModedata}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={5}
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
    height: '100%',
    width:'100%',
    flexDirection:'column',
  },
});


export default ChangeMode;
