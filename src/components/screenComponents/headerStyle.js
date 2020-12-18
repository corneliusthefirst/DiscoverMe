import shadower from '../shadower';
import ScreenMode from '../screenMode';

export default {
  marginLeft: '0%',
  marginRight: '0%',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...shadower(5),
  backgroundColor: ScreenMode.bodyBackground,
  color: ScreenMode.headerText,
  width: '100%',
  //flexWrap: 'wrap',
  height: '100%',
};
