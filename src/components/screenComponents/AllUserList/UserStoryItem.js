/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import _ from 'lodash';
import {Card, Icon} from 'native-base';
import Images from '../../../config/images';
import styles from './styles';
import PropTypes from 'prop-types';

export default class UserStoryItem extends Component {
  shouldComponentUpdate(nextProps) {
    if (_.isEqual(this.props.item, nextProps.item)) {
      return false;
    }
    return true;
  }

  onPress = () => {
    alert('Pressed');
  };
  render() {
    const {login, dob, picture} = this.props.item;
    return (
      <Card style={styles.card} onPress={this.onPress}>
        <Image
          source={
            picture.thumbnail ? {uri: picture.large} : Images.profile.avatar
          }
          style={{
            position: 'relative',
            width: styles.card.width,
            height: styles.card.height,
            borderRadius: 5,
          }}
        />
        <View style={styles.footer}>
          <View style={styles.username}>
            <Text numberOflines={1} ellipsizeMode="tail" style={styles.members}>
              {login.username[0].toUpperCase() + login.username.slice(1)}
            </Text>
          </View>

          <View style={styles.age}>
            <Text style={styles.members}>{dob.age}</Text>
          </View>
        </View>

        <View style={styles.header}>
          <View style={styles.username} />
          <View style={styles.age}>
            <Icon
              name="heart-outline"
              type="MaterialCommunityIcons"
              style={styles.like}
            />
          </View>
        </View>
      </Card>
    );
  }
}

UserStoryItem.propTypes = {
  item: PropTypes.object,
};
