/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Container,ListItem,Left,Right,Radio,Text} from 'native-base';

import stores from '../../stores/index';
import ScreenMode from '../../components/screenMode';
import ScreenLanguage from '../../components/screenLanguage';
import { observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';

@observer
class ChangeMode  extends Unmounter{

    constructor(props){
        super(props);
        this.state = {
          mounted:true,
          changeModedata: [
            {id:'1', title: 'redMode',name:ScreenLanguage.currentlang.RedMode,selectedColor:'#c94c4c', type:'red'},
            {id:'2', title: 'darkMode',name:ScreenLanguage.currentlang.DarkMode,selectedColor:'black', type:'black'},
            {id:'4', title: 'whiteMode',name:ScreenLanguage.currentlang.WhiteMode,selectedColor:ScreenMode.colors.blue, type:'white'},
            {id:'3', title: 'greenMode',name:ScreenLanguage.currentlang.GreenMode,selectedColor:'#1FABAB', type:'green'},
          ],
        };
    }

    willUnMount(){}
    didMount(){}

    styles = StyleSheet.create({
      Item: {
          width: '96%',
          height: 50,
          alignSelf: 'center',
        },
      });

    changeMode = (mode)=>{
      if (stores.CurrentScreenMode.currentMode !== mode){
         stores.CurrentScreenMode.setMode(mode).then(() => {
             ScreenMode.setMode(mode);
         });
      }}

    headerBody = () => {
        return (
          <HeaderBodySimple {...this.props} title={ScreenLanguage.currentlang.ChangeMode}  />
        );
    }

    renderItem = ({item}) => {
      let selected = ScreenMode.colors.type === item.type;
      return (
        <View style={this.styles.Item}>
          <ListItem noBorder>
            <Left>
              <Text style={{color: selected ? item.selectedColor : 'black',fontWeight: selected ? '700' : '300'}}>{item.name}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                selectedColor={item.selectedColor}
                selected={selected}
                onPress={() => this.changeMode(item.title)}
              />
            </Right>
          </ListItem>
        </View>
      );
    };

    render(){
      return (
        this.state.mounted ? <Container style={styles.container}>
        <Header height={50} backgroundColor={ScreenMode.colors.headerBackground} barStyle = {ScreenMode.colors.statusbarStyle} headerBody={this.headerBody} />

        <View style={{maxHeight: 200}}>
          <DiscoveryFlatList
            data={this.state.changeModedata}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={5}
            maxToRenderPerBatch={0}
            getItemLayout={this.getItemLayout}
          />
        </View>

      </Container> : null
      );
    }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
  },
});


export default ChangeMode;
