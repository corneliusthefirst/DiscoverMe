/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import FastImage from 'react-native-fast-image';

const checkIcon = require('../../assets/images/circle-check.png');

const styles = StyleSheet.create({
  marker: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'transparent',
  },
  videoMarker:{ 
    fontSize: 20,
    position:'absolute',
    alignSelf:'center' ,
    color:'white'
  },
});


class ImageItem extends Component {
  UNSAFE_componentWillMount() {
    let { width } = Dimensions.get('window');
    const { imageMargin, imagesPerRow, containerWidth } = this.props;

    if (typeof containerWidth !== 'undefined') {
      width = containerWidth;
    }
    this.imageSize = (width - (imagesPerRow + 1) * imageMargin) / imagesPerRow;
  }

  handleClick(item) {
    this.props.onClick(item);
  }

  render() {
    const {
      item, selected, selectedMarker, imageMargin,
    } = this.props;

    const marker = selectedMarker || (<Image
      style={[styles.marker, { width: 25, height: 25 }]}
      source={checkIcon}
    />);
    const videoMarker = (<Icon name="playcircleo" type="AntDesign" style={styles.videoMarker} />);

    const { image } = item.node;
    return (
      <TouchableOpacity
        style={{ marginBottom: imageMargin, marginRight: imageMargin,justifyContent:'center',backgroundColor:'#dddddd' }}
        onPress={() => this.handleClick({...image,type:item.node.type.slice(0,5)})}
      >
             <FastImage
               style={{ height: this.imageSize, width: this.imageSize }}
              source={{
                  uri: image.uri,
                  headers: { Authorization: 'someAuthToken' },
                  priority: FastImage.priority.normal,
              }}
          />
        {(selected) ? marker : null}
        {item.node.type.slice(0,5) === 'video' ? videoMarker : null}
      </TouchableOpacity>
    );
  }
}

ImageItem.defaultProps = {
  item: {},
  selected: false,
};

ImageItem.propTypes = {
  item: PropTypes.object,
  selected: PropTypes.bool,
  selectedMarker: PropTypes.element,
  imageMargin: PropTypes.number,
  imagesPerRow: PropTypes.number,
  onClick: PropTypes.func,
};

export default ImageItem;