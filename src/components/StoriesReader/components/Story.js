/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unused-prop-types */
import React, {useState, Component} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
// import Image from 'react-native-scalable-image';
import PropTypes from 'prop-types';

const Story = (props) => {
  const {story} = props;
  const {url, type} = story || {};
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [resizeMode, setResizeMode] = useState('contain');

  const newHeight = () => {
    if (type === 'image') {
      Image.getSize(url, (Iwidth, Iheight) => {
        setWidth(Iwidth);
        if (Iheight > 1000) {
          setHeight(props.height);
          setResizeMode('cover');
        } else {
          setHeight(Iheight);
          setResizeMode('contain');
        }
      });
    }
    return {height: height, resizeMode: resizeMode};
  };

  return (
    <View style={styles.container}>
      {type === 'image' ? (
        <Image
          source={{uri: url}}
          onLoadEnd={props.onImageLoaded}
          style={{
            height: newHeight().height,
            width: '100%',
          }}
          resizeMode={newHeight().resizeMode}
          //fullscreen={true}
        />
      ) : (
        <Video
          source={{uri: url.source}}
          paused={props.pause || props.isNewStory}
          onLoad={(item) => props.onVideoLoaded(item)}
          style={styles.content}
          //fullscreen={true}  //nice but was causing disruption
          resizeMode="contain"
        />
      )}
    </View>
  );
};

Story.propTypes = {
  story: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  height: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {width: '100%', height: '100%'},
  loading: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Story;
