/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Easing} from 'react-native';
import ProgressBar from './ProgressBar';

const ProgressArray = (props) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (props.pause) {
      Animated.timing(opacity, {
        toValue: 0,
        easing: Easing.linear,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 1,
        easing: Easing.linear,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [props.pause]);

  return (
    <Animated.View style={[styles.progressBarArray, {opacity}]}>
      {props.length.map((i, index) => (
        <ProgressBar
          index={index}
          duration={props.duration || 4}
          isNewStory={props.isNewStory}
          currentIndex={props.currentIndex}
          next={props.next}
          length={props.stories.length}
          active={i === props.currentIndex ? 1 : i < props.currentIndex ? 2 : 0}
          isLoaded={props.isLoaded}
          pause={props.pause}
        />
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  progressBarArray: {
    flexDirection: 'row',
    //position: 'absolute',
    //top: 30,
    width: '100%',
    padding: '1%',
    height: 10,
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProgressArray;
