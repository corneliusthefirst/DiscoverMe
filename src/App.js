/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Root, StyleProvider} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import getTheme from './native-base-theme/components';
import CommonColor from './native-base-theme/variables/commonColor';

import routerActions from 'reazy-native-router-actions';
import reazy from 'reazy';
import {Provider} from 'mobx-react';
import { YellowBox } from 'react-native';
//import {Animated,Easing} from 'react-native';
//screens
import Home from './screens/Home/index';
import ChangeMode from './screens/ChangeMode/index';
import ChangeLanguage from './screens/ChangeLanguage/index';
import StoriesComponent  from './components/StoriesReader/index';
import ChatRoom  from './components/screenComponents/ChatRoom';
import CameraScreen from './components/DiscoveryCamera/index';
import PickedImage from './components/DiscoveryCamera/pickedImage';
import PickedMultipleImage from './components/DiscoveryCamera/pickedMultipleImages';
import ParticipantList from './screens/subScreens/ParticipantList';
import ChooseParticipants from './screens/subScreens/ChooseParticipants';
import CreateRemind from './screens/subScreens/CreateRemind';
import VideoViewer from './components/screenComponents/ChatRoom/components/videoViewer';
import ImageViewer  from './components/screenComponents/ChatRoom/components/imageViewer';
import CustomImagePicker from './components/FileReader/customImagePicker';
import { enableScreens } from 'react-native-screens';
import { TouchableOpacity } from 'react-native';



TouchableOpacity.defaultProps = { activeOpacity: 0.8 };


const app = reazy();
app.use(routerActions(), 'routerActions');


const MainStack = createStackNavigator();

enableScreens();

export default () => {
        return (
            <Root>
              <StyleProvider style={getTheme(CommonColor)}>
                <Provider app={app}>

                  <NavigationContainer >

                  <MainStack.Navigator  initialRouteName="Home"  headerMode="none">
                    <MainStack.Screen  name="Home" component={Home} />
                    <MainStack.Screen  name="ChangeMode" component={ChangeMode} />
                    <MainStack.Screen  name="ChangeLanguage" component={ChangeLanguage} />
                    <MainStack.Screen   name="StoriesComponent" component={StoriesComponent} />
                    <MainStack.Screen   name="ChatRoom" component={ChatRoom}  />
                    <MainStack.Screen   name="CameraScreen" component={CameraScreen} />
                    <MainStack.Screen   name="PickedImage" component={PickedImage} />
                    <MainStack.Screen   name="PickedMultipleImage" component={PickedMultipleImage} />
                    <MainStack.Screen   name="ParticipantList" component={ParticipantList} />
                    <MainStack.Screen   name="ChooseParticipants" component={ChooseParticipants} />
                    <MainStack.Screen   name="CreateRemind" component={CreateRemind} />
                    <MainStack.Screen   name="VideoViewer" component={VideoViewer}  />
                    <MainStack.Screen   name="ImageViewer" component={ImageViewer} />
                    <MainStack.Screen   name="CustomImagePicker" component={CustomImagePicker} />
                  </MainStack.Navigator>

                  </NavigationContainer>

                </Provider>
              </StyleProvider>
            </Root>
          );
};

/*
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;*/
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
