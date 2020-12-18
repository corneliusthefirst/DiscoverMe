/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Header from '../../components/screenComponents/header';
import AppStyles from '../../config/styles';
import ScreenMode from '../../components/screenMode';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
    };
  }
  shouldComponentUpdate(nextProps) {
    if (
      this.props.route.params.data === nextProps.route.params.data &&
      this.state === nextProps.state
    ) {
      return false;
    }
    return true;
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerBody: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 15,
    },
    leftHeaderContent: {
      alignSelf: 'flex-end',
      right: 0,
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    textGreen: {color: AppStyles.colors.green},
    textRed: {color: AppStyles.colors.red},
    button: {
      alignSelf: 'center',
      //width: 75,
      borderRadius: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      paddingHorizontal: 10,
    },
  });

  headerBody = () => {
    return (
      <View style={this.styles.headerBody}>
        <View style={{height: '100%', width: '100%', flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              //height: '94%',
              alignSelf: 'flex-end',
            }}>
            <Image
              source={require('../../../assets/AppTitleWhite.png')}
              style={{width: 120}}
            />
          </View>
          <View style={this.styles.leftHeaderContent}>
            <Text>Language</Text>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={this.styles.container}>
        <Header
          height={50}
          backgroundColor={ScreenMode.colors.headerBackground}
          barStyle={ScreenMode.colors.statusbarStyle}
          headerBody={this.headerBody}
        />
      </View>
    );
  }
}
