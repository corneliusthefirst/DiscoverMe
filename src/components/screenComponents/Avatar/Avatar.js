import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Icon} from 'native-base';

import Images from '../../../config/images';
import styles from './styles';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

export default class Avatar extends Component {
  render() {
    const {uri, large, isGroup, enableDot, source} = this.props;

    return (
      <View
        style={
          this.props.style
            ? this.props.style
            : large
            ? styles.avatarLargeView
            : styles.avatarView
        }>
        {isGroup ? (
          <Icon name="octoface" type="Octicons" size={64} color="grey" />
        ) : uri ? (
          <FastImage
            source={
              source
                ? source
                : {
                    uri: uri,
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }
            }
            style={
              this.props.style
                ? this.props.style
                : large
                ? styles.avatarLarge
                : styles.avatar
            }
            resizeMode={FastImage.resizeMode.cover}
          />
        ) : (
          <Image
            source={Images.profile.avatar}
            style={
              this.props.style
                ? this.props.style
                : large
                ? styles.avatarLarge
                : styles.avatar
            }
          />
        )}
        {enableDot ? (
          <View style={large ? styles.statusDotLarge : styles.statusDot} />
        ) : (
          <View style={{}} />
        )}
      </View>
    );
  }
}

Avatar.defaultProps = {
  enableDot: true,
  large: false,
  isGroup: false,
  liveEnabled: true,
};

Avatar.propTypes = {
  large: PropTypes.bool,
  isGroup: PropTypes.bool,
  enableDot: PropTypes.bool,
  uri: PropTypes.string,
};
