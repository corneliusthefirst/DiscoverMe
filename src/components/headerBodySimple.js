import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ScreenMode from './screenMode';
import {observer} from 'mobx-react';
import {Icon} from 'native-base';

@observer
class HeaderBodySimple extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerBody}>
        <Icon
          name="arrowleft"
          type="AntDesign"
          style={[styles.arrowBack, {color: ScreenMode.colors.headerIconColor}]}
          onPress={() =>
            this.props.goBack
              ? this.props.goBack()
              : this.props.navigation.goBack()
          }
        />
        <Text
          style={[styles.headerText, {color: ScreenMode.colors.headerText}]}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  arrowBack: {
    marginLeft: 10,
    fontSize: 22,
  },
  headerText: {
    marginLeft: 15,
    fontSize: 17,
  },
  headerBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default HeaderBodySimple;
