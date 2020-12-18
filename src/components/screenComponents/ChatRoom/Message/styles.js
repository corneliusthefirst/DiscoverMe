import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const style = StyleSheet.create({
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: 'row',
  },
  itemIn: {
    marginLeft: 20,
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  balloon: {
    maxWidth: '78%',
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
  replyballoon: {
    maxWidth: '78%',
    paddingHorizontal: moderateScale(5, 3),
    paddingTop: 1,
    paddingBottom: moderateScale(7, 2),
    borderRadius: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-5, 0.5),
  },

  image: {
    maxWidth: scale(245),
    paddingHorizontal: 1,
    //paddingTop: 1,
    paddingBottom: moderateScale(3, 2),
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignItems: 'center',
  },
  imageSize: {
    width: scale(245),
    height: verticalScale(240),
    borderTopLeftRadius: 3,
    borderTopRightRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    alignSelf: 'flex-start',
    width: scale(20),
    marginHorizontal: 2,
  },
  timeView: {
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  timeStyle: {
    fontSize: 10,
    opacity: 0.5,
  },
  mainMessageView: {
    flexDirection: 'column',
    marginVertical: moderateScale(5, 2),
  },
  dateView: {
    height: scale(25),
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    opacity: 0.5,
  },
  tickView: {
    //position: 'absolute',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    //bottom: 0,
    //right: 8,
  },
  tickIcon: {
    //color: 'rgba(255,255,255,0.8)',
    fontSize: 15,
    marginVertical: 0,
  },
  replyView: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingHorizontal: 10,
    //flexDirection: 'row',
  },
  repyIconStyle: {
    fontSize: 22,
    color: 'white',
    //marginVertical: 0,
  },
  btn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  replyOuter: {
    padding: 5,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.06)',
    marginVertical: 3,
  },
  replyInner: {
    flexDirection: 'row',
    width: '100%',
  },
  durationIcon: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 28,
  },
  durationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
});

export default style;
