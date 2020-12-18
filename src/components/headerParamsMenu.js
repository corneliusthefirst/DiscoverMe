/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Icon} from 'native-base';
import ScreenLanguage from './screenLanguage';
import {observer} from 'mobx-react';
import DiscoveryMenu from './DiscoveryMenu';

@observer
class HeaderParamsMenu extends DiscoveryMenu {
  constructor(props) {
    super(props);
  }

  changeMode = () => {
    this.hideMenu();
    this.props.navigation.navigate('ChangeMode');
  };
  changeLanguage = () => {
    this.hideMenu();
    this.props.navigation.navigate('ChangeLanguage');
  };
  discoveryWeb = () => {};
  Settings = () => {};

  renderBody = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Menu
          style={{backgroundColor: '#FFFFFF'}}
          ref={this.setMenuRef}
          button={
            <Icon
              name="dots-three-vertical"
              active={true}
              type="Entypo"
              style={this.props.style}
              onPress={() => this.showMenu()}
            />
          }>
          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={() => this.changeMode()}>
            {ScreenLanguage.ChangeMode}
          </MenuItem>
          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={() => this.changeLanguage()}>
            {ScreenLanguage.ChangeLanguage}
          </MenuItem>

          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={() => this.discoveryWeb()}>
            {ScreenLanguage.DiscoveryWeb}
          </MenuItem>

          {/* <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={() => this.discoveryWeb()}>
            {ScreenLanguage.MaskedStories}
          </MenuItem>*/}

          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={() => this.Settings()}>
            {ScreenLanguage.Settings}
          </MenuItem>
        </Menu>
      </View>
    );
  };
}

export default HeaderParamsMenu;
