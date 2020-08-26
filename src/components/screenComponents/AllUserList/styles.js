import {StyleSheet} from 'react-native';
import AppStyles from '../../../config/styles';
import Metrics from '../../../config/metrics';

const cardheight = Metrics.screenHeight / 4;
const cardwidth = Metrics.screenWidth / 2.2;

const styles = StyleSheet.create({
  card: {
    width: cardwidth,
    height: cardheight,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cardView: {
    width: cardwidth,
    height: cardheight,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: cardwidth,
    height: cardheight - Metrics.screenWidth / 2.5,
    //paddingVertical: 22,
    backgroundColor: 'rgba(52,52,52,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: AppStyles.colors.separator,
  },
  like: {
    color: AppStyles.colors.white,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: cardwidth,
    height: cardheight - Metrics.screenWidth / 2.5,
    backgroundColor: 'rgba(52,52,52,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: AppStyles.colors.separator,
  },
  age: {
    width: cardwidth / 4,
    paddingLeft: 12,
  },
  username: {
    width: cardwidth - cardwidth / 4,
  },
  nameView: {
    alignItems: 'center',
    padding: 8,
    paddingTop: 16,
  },
  nameText: {
    marginTop: 8,
    color: AppStyles.colors.black,
    fontSize: 15,
    textAlign: 'center',
  },
  last: {
    marginTop: 4,
    color: AppStyles.colors.grey,
    fontSize: 12,
    textAlign: 'center',
  },
  members: {
    color: AppStyles.colors.white,
    fontSize: 14,
    paddingLeft: 5,
    //textAlign: 'center',
  },
  list: {
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
