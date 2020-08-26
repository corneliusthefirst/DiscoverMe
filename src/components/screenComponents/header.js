import React, {Component} from 'react';
import {View, StatusBar, Platform} from 'react-native';
import shadower from '../shadower';
import {observer} from 'mobx-react';
import ScreenMode from '../../components/screenMode';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 32 : StatusBar.currentHeight;

@observer
class Header extends Component {
  constructor(props) {
    super(props);
    //StatusBar.setTranslucent(true);
  }

  render() {
    return (
      <View style={{borderWidth: 0}}>
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
            ? this.props.headerBody(ScreenMode.colors.type)
            : this.props.headerBody()}
        </View>
      </View>
    );
  }
}

export default Header;
