/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {observer} from 'mobx-react';
import ScreenMode from '../../components/screenMode';
import stores from '../../stores';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 32 : StatusBar.currentHeight;

@observer
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: stores.CurrentScreenMode.currentTheme,
    };
    //StatusBar.setTranslucent(true);
  }
  componentDidMount() {
    stores.CurrentScreenMode.getCurrentMode().then((mode) => {
      this.state.theme = mode.currentTheme;
    });
  }

  render() {
    return (
      <View
        style={{
          borderWidth: 0,
        }}>
        <StatusBar
          barStyle={this.props.barStyle ? this.props.barStyle : 'light-content'}
          backgroundColor={'rgba(0, 0, 0, 0)'}
          translucent={true}
        />
        <View
          style={[
            {
              backgroundColor: this.props.statusbackground
                ? this.props.statusbackground
                : ScreenMode.colors.headerBackground,
              height: this.props.height + STATUS_BAR_HEIGHT,
            },
          ]}>
          {this.props.home
            ? this.props.headerBody(this.state.theme)
            : this.props.headerBody()}
        </View>
      </View>
    );
  }
}

export default Header;
