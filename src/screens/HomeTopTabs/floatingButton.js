import React, {PureComponent} from 'react';
import {StyleSheet} from 'react-native';
import ScreenMode from '../../components/screenMode';
import Icon from 'react-native-vector-icons/Feather';
import {observer} from 'mobx-react';
import ActionButton from 'react-native-action-button';

@observer
class FloatingButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    Icon: {
      color: 'white',
      fontSize: 20,
    },
  });
  render() {
    return (
      <ActionButton
        buttonColor={ScreenMode.colors.sendMessage}
        renderIcon={() => (
          <Icon name="user-plus" type="Feather" style={this.styles.Icon} />
        )}
        offsetX={20}
        onPress={() => {
          this.props.navigation.navigate('ContactsList');
        }}
      />
    );
  }
}

export default FloatingButton;
