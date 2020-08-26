/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Container,ListItem,Left,Right,Radio,Text} from 'native-base';

import stores from '../../stores/index';
import ScreenLanguage from '../../components/screenLanguage';
import ScreenMode from '../../components/screenMode';
import { observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';

@observer
class ChangeLanguage  extends Unmounter{

    constructor(props){
        super(props);
        this.state = {
          englishMode:stores.CurrentScreenLanguage.currentlanguage === 'English',
          mandarinChineseMode:stores.CurrentScreenLanguage.currentlanguage === 'Mandarin Chinese',
          hindiMode:stores.CurrentScreenLanguage.currentlanguage === 'Hindi',
          spanishMode:stores.CurrentScreenLanguage.currentlanguage === 'Spanish',
          frenchMode:stores.CurrentScreenLanguage.currentlanguage === 'French',
          germanMode:stores.CurrentScreenLanguage.currentlanguage === 'German',
          russianMode:stores.CurrentScreenLanguage.currentlanguage === 'Russian',
          japaneseMode:stores.CurrentScreenLanguage.currentlanguage === 'Japanese',
          portugueseMode:stores.CurrentScreenLanguage.currentlanguage === 'Portuguese',
          begaliMode:stores.CurrentScreenLanguage.currentlanguage === 'Bengali',
          indonesianMode:stores.CurrentScreenLanguage.currentlanguage === 'Indonesian',
          mounted:true,
        };
    }

    willUnMount(){}
    didMount(){}

    ChangeLanguage = (language)=>{
      if (stores.CurrentScreenLanguage.currentlanguage !== language){
          stores.CurrentScreenLanguage.setLanguage(language).then(() => {
             //console.warn(language);
             ScreenLanguage.setLanguage(language);
             this.setState({
                englishMode:stores.CurrentScreenLanguage.currentlanguage === 'English',
                mandarinChineseMode:stores.CurrentScreenLanguage.currentlanguage === 'Mandarin Chinese',
                hindiMode:stores.CurrentScreenLanguage.currentlanguage === 'Hindi',
                spanishMode:stores.CurrentScreenLanguage.currentlanguage === 'Spanish',
                frenchMode:stores.CurrentScreenLanguage.currentlanguage === 'French',
                germanMode:stores.CurrentScreenLanguage.currentlanguage === 'German',
                russianMode:stores.CurrentScreenLanguage.currentlanguage === 'Russian',
                japaneseMode:stores.CurrentScreenLanguage.currentlanguage === 'Japanese',
                portugueseMode:stores.CurrentScreenLanguage.currentlanguage === 'Portuguese',
                begaliMode:stores.CurrentScreenLanguage.currentlanguage === 'Bengali',
                indonesianMode:stores.CurrentScreenLanguage.currentlanguage === 'Indonesian',
             });
         });
      }

       }


       headerBody = () => {
        return (
            <HeaderBodySimple {...this.props} title={ScreenLanguage.currentlang.ChangeLanguage} />
        );
    }


    render(){
      return (
       this.state.mounted ?  <Container style={styles.container}>
        <Header height={50} backgroundColor={ScreenMode.colors.statusBarColor} barStyle = {ScreenMode.colors.statusbarStyle} headerBody={this.headerBody} />

          <ListItem selected={this.state.englishMode} noBorder >
            <Left>
             <Text style={{color:this.state.englishMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.englishMode ? '700' : '300'}} >{ScreenLanguage.currentlang.English}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.englishMode}
                onPress={()=> this.ChangeLanguage('English')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.mandarinChineseMode} noBorder>
            <Left>
              <Text style={{fontWeight:this.state.mandarinChineseMode ? '700' : '300' , color:this.state.mandarinChineseMode ? (ScreenMode.colors.sendMessage) : 'black'}}  >{ScreenLanguage.currentlang.MandarinChinese}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.mandarinChineseMode}
                onPress={()=> this.ChangeLanguage('Mandarin Chinese')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.hindiMode} noBorder>
            <Left>
              <Text  style={{color:this.state.hindiMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.hindiMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Hindi}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.hindiMode}
                onPress={()=> this.ChangeLanguage('Hindi')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.spanishMode} noBorder>
            <Left>
              <Text  style={{color:this.state.spanishMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.spanishMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Spanish}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.spanishMode}
                onPress={()=> this.ChangeLanguage('Spanish')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.frenchMode} noBorder>
            <Left>
              <Text  style={{color:this.state.frenchMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.frenchMode ? '700' : '300'}} >{ScreenLanguage.currentlang.French}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.frenchMode}
                onPress={()=> this.ChangeLanguage('French')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.germanMode} noBorder>
            <Left>
              <Text  style={{color:this.state.germanMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.germanMode ? '700' : '300'}} >{ScreenLanguage.currentlang.German}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.germanMode}
                onPress={()=> this.ChangeLanguage('German')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.russianMode} noBorder>
            <Left>
              <Text  style={{color:this.state.russianMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.russianMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Russian}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.russianMode}
                onPress={()=> this.ChangeLanguage('Russian')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.japaneseMode} noBorder>
            <Left>
              <Text  style={{color:this.state.japaneseMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.japaneseMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Japanese}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.japaneseMode}
                onPress={()=> this.ChangeLanguage('Japanese')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.portugueseMode} noBorder>
            <Left>
              <Text  style={{color:this.state.portugueseMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.portugueseMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Portuguese}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.portugueseMode}
                onPress={()=> this.ChangeLanguage('Portuguese')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.begaliMode} noBorder>
            <Left>
              <Text  style={{color:this.state.begaliMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.begaliMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Bengali}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.begaliMode}
                onPress={()=> this.ChangeLanguage('Bengali')}
              />
            </Right>
          </ListItem>

          <ListItem selected={this.state.spanishMode} noBorder>
            <Left>
              <Text  style={{color:this.state.indonesianMode ? (ScreenMode.colors.sendMessage) : 'black',fontWeight:this.state.indonesianMode ? '700' : '300'}} >{ScreenLanguage.currentlang.Indonesian}</Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                 selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.indonesianMode}
                onPress={()=> this.ChangeLanguage('Indonesian')}
              />
            </Right>
          </ListItem>

      </Container> : null
      );
    }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
  },
});


export default ChangeLanguage;


/**
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Container,ListItem,Left,Right,Radio,Text} from 'native-base';

import stores from '../../stores/index';
import ScreenLanguage from '../../components/screenLanguage';
import ScreenMode from '../../components/screenMode';
import { observer, Observer } from 'mobx-react';
import Header from '../../components/screenComponents/header';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';



@observer
class ChangeLanguage  extends Unmounter{

    constructor(props){
        super(props);
        this.state = {
          mounted:true,
          currentlang: stores.CurrentScreenLanguage.currentlanguage,
          changeLanguagedata : [
            {id:'1', name:ScreenLanguage.currentlang.English, lang:'English'},
            {id:'2', name:ScreenLanguage.currentlang.MandarinChinese, lang:'Mandarin Chinese'},
            {id:'3', name:ScreenLanguage.currentlang.Hindi, lang:'Hindi'},
            {id:'4', name:ScreenLanguage.currentlang.Spanish, lang:'Spanish'},
            {id:'5', name:ScreenLanguage.currentlang.French, lang:'French'},
            {id:'6', name:ScreenLanguage.currentlang.German, lang:'German'},
            {id:'7', name:ScreenLanguage.currentlang.Russian, lang:'Russian'},
            {id:'8', name:ScreenLanguage.currentlang.Japanese, lang:'Japanese'},
            {id:'9', name:ScreenLanguage.currentlang.Portuguese, lang:'Portuguese'},
            {id:'10', name:ScreenLanguage.currentlang.Bengali, lang:'Bengali'},
            {id:'11', name:ScreenLanguage.currentlang.Indonesian, lang:'Indonesian'},
          ],
        };
    }



    willUnMount(){}
    didMount(){}
    styles = StyleSheet.create({
      Item: {
          width: '96%',
          height: 40,
          alignSelf: 'center',
        },
      });

    ChangeLanguage = (language)=>{
      if (stores.CurrentScreenLanguage.currentlanguage !== language){
          stores.CurrentScreenLanguage.setLanguage(language).then(() => {
             ScreenLanguage.setLanguage(language);
             this.setState({currentlang:language});
             this.setState({changeLanguagedata:this.state.changeLanguagedata});
         });
      }

       }


       headerBody = () => {
        return (
            <HeaderBodySimple {...this.props} title={ScreenLanguage.currentlang.ChangeLanguage} />
        );
    }

    renderItem = ({item}) => {
      let selected = this.state.currentlang === item.lang;
      return (
       <Observer>
         {()=> 
          <View style={this.styles.Item}>
           <ListItem noBorder>
            <Left>
              <Text style={{color: selected ? ScreenMode.colors.sendMessage : 'black',fontWeight: selected ? '700' : '300'}}>{item.name}</Text>
            </Left>
            <Right>
            <Radio
             color={'gray'}
             selected={selected}
             selectedColor={ScreenMode.colors.sendMessage}
             onPress={() => this.ChangeLanguage(item.lang)}
            />
            </Right>
           </ListItem>
          </View>

         }
       </Observer>
      );
    };

    render(){
      return (
       this.state.mounted ?  <View style={styles.container}>
        <Header height={50} backgroundColor={ScreenMode.colors.statusBarColor} barStyle = {ScreenMode.colors.statusbarStyle} headerBody={this.headerBody} />

        <View style={{maxHeight: '100%'}}>
          <DiscoveryFlatList
            data={this.state.changeLanguagedata}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={20}
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
    backgroundColor:'white',
  },
});


export default ChangeLanguage;
 */
