/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';

@observer
class DiscoveryMenu extends Component {
  constructor(props) {
    super(props);
  }

  _menu = null;

  setMenuRef = (ref) => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  renderBody = () => {
    return <View />;
  };

  render() {
    return this.renderBody();
  }
}

export default DiscoveryMenu;
