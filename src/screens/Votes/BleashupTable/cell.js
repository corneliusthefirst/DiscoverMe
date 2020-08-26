import React, {Component} from 'react';
import {View, ViewPropTypes, Text, StyleSheet} from 'react-native';

export class Cell extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    borderStyle: ViewPropTypes.style,
  };

  render() {
    const {
      data,
      width,
      height,
      flex,
      style,
      textStyle,
      borderStyle,
      ...props
    } = this.props;
    const textDom = React.isValidElement(data) ? (
      data
    ) : (
      <Text style={[textStyle, styles.text]} {...props}>
        {data}
      </Text>
    );
    const borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
    const borderRightWidth = borderTopWidth;
    const borderColor = (borderStyle && borderStyle.borderColor) || '#000';

    return (
      <View
        style={[
          {
            borderTopWidth,
            borderRightWidth,
            borderColor,
          },
          styles.cell,
          width && {width},
          height && {height},
          flex && {flex},
          !width && !flex && !height && !style && {flex: 1},
          style,
        ]}>
        {textDom}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {justifyContent: 'center'},
  text: {backgroundColor: 'transparent'},
});
