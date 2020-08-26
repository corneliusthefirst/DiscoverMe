import {StyleSheet} from 'react-native';
import AppStyles from '../../../config/styles';

const styles = StyleSheet.create({
  avatarView: {
    width: 46,
    height: 46,
    backgroundColor: AppStyles.colors.separator,
    borderRadius: 23,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    overflow: 'hidden',
  },
  statusDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 16,
    height: 16,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: AppStyles.colors.white,
    backgroundColor: AppStyles.colors.onlineGreen,
  },
  avatarLargeView: {
    width: 64,
    height: 64,
    backgroundColor: AppStyles.colors.separator,
    borderRadius: 32,
  },
  avatarLarge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
  },
  statusDotLarge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppStyles.colors.white,
    backgroundColor: AppStyles.colors.onlineGreen,
  },
});

export default styles;
