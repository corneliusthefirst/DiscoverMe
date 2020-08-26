/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Icon} from 'native-base';
import {Text} from 'react-native';
import Slider from '@react-native-community/slider';
import ScreenMode from '../../../screenMode';
import AppStyles from '../../../../config/styles';
import GlobalFunctions from '../../../globalFunctions';

const AudioBox = (props) => {
  const contentColor = props.send ? 'white' : 'black';

  return (
    <View style={[styles.outerBoxStyle]}>
      <View style={[styles.AudioBoxStyle]}>
        <Icon
          name="caret-right"
          type="FontAwesome"
          style={{color: contentColor}}
        />
        <View style={styles.slider}>
          <Slider
            style={{width: scale(200), height: 20}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={contentColor}
            maximumTrackTintColor="#000000"
            thumbTintColor={
              props.message.isSeen
                ? ScreenMode.colors.thumbTintColor
                : AppStyles.colors.onlineGreen
            }
          />
          {GlobalFunctions.renderDuration(
            {
              fontSize: 12,
              marginLeft: 10,
              color: contentColor,
            },
            props.message.duration,
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerBoxStyle: {
    flexDirection: 'column',
    width: scale(245),
    height: verticalScale(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
  AudioBoxStyle: {
    width: scale(245),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    flexDirection: 'column',
    marginTop: 20,
  },
});

export default AudioBox;
