/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import {Icon} from 'native-base';
import ScreenLanguage from './screenLanguage';
import DiscoveryMenu from '../components/DiscoveryMenu';

class UploadStoryMenuOut extends DiscoveryMenu {
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
              name="add-a-photo"
              active={true}
              type="MaterialIcons"
              style={{color: 'white', fontSize: 22}}
              onPress={() => this.showMenu()}
            />
          }>
          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={this.props.openModalForPhoto}>
            {ScreenLanguage.PhotoToStory}
          </MenuItem>
          <MenuDivider color="gray" />
          <MenuItem
            textStyle={{color: '#0A4E52'}}
            onPress={this.props.openModalForVideo}>
            {ScreenLanguage.VideoToStory}
          </MenuItem>
          <MenuDivider color="gray" />
        </Menu>
      </View>
    );
  };
}

export default UploadStoryMenuOut;
