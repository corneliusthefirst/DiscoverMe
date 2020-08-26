/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Icon} from 'native-base';
import ScreenLanguage from './screenLanguage';
import ScreenMode from './screenMode';
import DiscoveryMenu from '../components/DiscoveryMenu';

class UploadStoryMenu extends DiscoveryMenu {
  constructor(props) {
    super(props);
  }

  renderBody = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Menu
          style={{backgroundColor: '#FFFAFA'}}
          ref={this.setMenuRef}
          button={
            <Icon
              name="camera"
              active={true}
              type="EvilIcons"
              style={{
                marginRight: 20,
                fontSize: 32,
                color: ScreenMode.colors.headerIconColor,
              }}
              onPress={() => this.showMenu()}
            />
          }>
          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={this.props.openModalForPhoto}>
            {ScreenLanguage.currentlang.PhotoToStory}
          </MenuItem>
          <MenuDivider color="gray" />
          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={this.props.openModalForVideo}>
            {ScreenLanguage.currentlang.VideoToStory}
          </MenuItem>
          <MenuDivider color="gray" />
        </Menu>
      </View>
    );
  };
}

export default UploadStoryMenu;
