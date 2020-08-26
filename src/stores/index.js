//import Session from './session';
//import Contacts from './contacts';
//import Likes from './likes';
//import Invitations from './Invitations';
//import LoginStore from './LoginStore';
//import TempLoginStore from './TempLoginStore';
//import ChatStore from './ChatStore';
//import TemporalUsersStore from './temporalUsersStore';
//import StoriesStore from './StoriesStore';
//import PrivacyStore from './PrivacyStore';
import CurrentScreenMode from './screenModeStore';
import CurrentScreenLanguage from './screenLanguageStore';
import RelationsStore from './relationsStore';
import DiscoveriesStore from './discoveriesStore';
import ReceivedStore from './receivedDiscoveryStore';
import ActiveStore from './ActiveDiscoveryStore';
import MystoriesStore from './myStoriesStore';
import AllStoriesStore from './allStoriesStore';
import LoginStore from './LoginStore';

export default {
  // LoginStore: new LoginStore(),
  // TempLoginStore: new TempLoginStore(),
  // Session: new Session(),
  // Contacts: new Contacts(),
  //Invitations: new Invitations(),
  // Likes: new Likes(),
  //TemporalUsersStore: new TemporalUsersStore(),
  //StoriesStore: new StoriesStore(),
  // Privacy: new PrivacyStore(),
  // Messages: new ChatStore(),
  CurrentScreenMode: new CurrentScreenMode(),
  CurrentScreenLanguage: new CurrentScreenLanguage(),
  RelationsStore: new RelationsStore(),
  DiscoveriesStore: new DiscoveriesStore(),
  ReceivedStore: new ReceivedStore(),
  ActiveStore: new ActiveStore(),
  MystoriesStore: new MystoriesStore(),
  AllStoriesStore: new AllStoriesStore(),
  LoginStore: new LoginStore(),
};
