/* eslint-disable prettier/prettier */
import { observable, action } from 'mobx';

 class  screenMode {

 redMode=['#c94c4c','#c94c4c','#c95c5c','#0084ff','red'];
 darkMode=['#505050','#0084ff','#393939','#0084ff','black'];
 whiteMode=['#0084ff','#0084ff','#0092ff','white','white'];
 greenMode=['#128C7E','#128C7E','#128C7E','#0084ff','green'];

 //Theme

 darkTheme=['white','#eeeeee','white','#202020','white','light-content','#202020','#252525','#252525'];
 whiteTheme=['black','grey','black','#FFFFFF','black','dark-content','#FFFFFF','#FFFFFF','#FFFFFF'];

 @observable colors={};

 @action setMode = (options)=>{
      var newMode = [];
      var newTheme = [];

      switch (options.mode) {
        case 'redMode':
            newMode = this.redMode;
            break;
        case 'darkMode':
            newMode = this.darkMode;
            break;
        case 'whiteMode':
            newMode = this.whiteMode;
            break;
        case 'greenMode':
            newMode = this.greenMode;
      }

      switch (options.theme) {
        case 'white':
            newTheme = this.whiteTheme;
            break;
        case 'dark':
            newTheme = this.darkTheme;
            break;
      }

      this.colors = {
        keyboardIcon: newMode[0],
        bottomIconColor: newMode[1],
        sendMessage: newMode[2],
        thumbTintColor: newMode[3],
        type: newMode[4],
        receivedMessage:"#e2e2e2",
        headerHeight:55,
        lightBlue: '#1EE0FF',
        blue:'#0084ff',
        transparent: 'rgba(0, 0, 0, 0.001)',
        underlayColor: 'rgba(52,52,52,0.2)',

        bodyText:newTheme[0],
        bodySubtext:newTheme[1],
        bodyIcon :newTheme[2],
        bodyBackground:newTheme[3],
        bodyBackgroundLight:newTheme[7],
        bodyBackgroundLightDeep : newTheme[8],

        headerBackground : newTheme[3],
        headerIconColor : newTheme[4],
        headerText : newTheme[0],

        statusbarStyle : newTheme[5],
        statusBackground : newTheme[6],

     };

 };



}

const ScreenMode =  new screenMode();
export default ScreenMode;



 //'#66cdaa' green, '#87cefa' blue
 //greenMode=['#1FABAB','white','light-content','#1FABAB','#1FABAB','white','#1FABAB','#0084ff','green'],









/*mport { observable, action } from 'mobx';

 class  screenMode {

 redMode=['#c94c4c','white','light-content','#c94c4c','#c94c4c','white','#c95c5c','#0084ff','red'],
 darkMode=['#505050','white','light-content','#202020','#0084ff','white','#393939', '#0084ff','black'],
 whiteMode=['#0084ff','black','dark-content','white','#0084ff','black','#00a7ff','white','white'],
 //greenMode=['#1FABAB','white','light-content','#1FABAB','#1FABAB','white','#1FABAB','#0084ff','green'],
 greenMode=['#128C7E','white','light-content','#128C7E','#128C7E','white','#128C7E','#0084ff','green'],
 //'#66cdaa' green, '#87cefa' blue

 @observable colors={};

 @action setMode = (mode)=>{
      var newMode = [],

      switch (mode) {
        case 'redMode':
            newMode = this.redMode;
            break;
        case 'darkMode':
            newMode = this.darkMode;
            break;
        case 'whiteMode':
            newMode = this.whiteMode;
            break;
        case 'greenMode':
            newMode = this.greenMode;
      }
      this.colors = {
        keyboardIcon: newMode[0],
        headerIconColor: newMode[1],
        statusbarStyle: newMode[2],
        headerBackground: newMode[3],
        bottomIconColor: newMode[4],
        headerText: newMode[5],
        sendMessage: newMode[6],
        thumbTintColor: newMode[7],
        type: newMode[8],
        receivedMessage:"#e2e2e2",
        headerHeight:55,
        bodyText: 'black',
        bodySubtext: 'gray',
        bodyIcon: 'black',
        bodyBackground: '#FFFFFF',
        lightBlue: '#1EE0FF',
        blue:'#0084ff',
        transparent: 'rgba(0, 0, 0, 0.001)',
        underlayColor: 'rgba(52,52,52,0.2)',

     };

 };
}

const ScreenMode : new screenMode();
export default ScreenMode;
*/