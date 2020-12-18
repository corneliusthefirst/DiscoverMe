/* eslint-disable react-native/no-inline-styles */
/**
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  Button,
} from 'react-native';
import Contacts from 'react-native-contacts';

import ListItem from './ListItem';
import SearchBar from './SearchBar';
import AvatarItem from './Avatar2';
import Header from '../screenComponents/header';
import HeaderBodySimple from '../headerBodySimple';
import ScreenMode from '../screenMode';
import ScreenLanguage from '../screenLanguage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DiscoveryFlatList from '../DiscoveryFlatList';
import {observer} from 'mobx-react';
import {uniqBy, find, includes, remove} from 'lodash';
import countries from './countries';

@observer
class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      contacts: [],
      searchPlaceholder: ScreenLanguage.Search,
      typeText: null,
      loading: true,
      search: false,
    };
    // if you want to read/write the contact note field on iOS, this method has to be called
    // WARNING: by enabling notes on iOS, a valid entitlement file containing the note entitlement as well as a separate
    //          permission has to be granted in order to release your app to the AppStore. Please check the README.md
    //          for further information.
    Contacts.iosEnableNotesUsage(false);
  }

  codeObj = find(countries, {id: 'FR'});

  async componentDidMount() {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        this.loadContacts();
      });
    } else {
      this.loadContacts();
    }
  }

  uniqarray = [];
  contactsArray = [];
  regexStr =
    '^(?:(?:\\+?1\\s*(?:[.-]\\s*)?)?(?:\\(\\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\\s*\\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\\s*(?:[.-]\\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\\s*(?:[.-]\\s*)?([0-9]{4})(?:\\s*(?:#|x\\.?|ext\\.?|extension)\\s*(\\d+))?$';
  filterContacts = (contacts) => {
    contacts.map((contact) => {
      let lengthOfArrayBefore = this.uniqarray.length;

      contact.phoneNumbers.forEach((subcontact) => {
        if (subcontact.number.match(this.regexStr)) {
          !includes(this.uniqarray, subcontact.number)
            ? this.uniqarray.push(subcontact.number)
            : null;
        }
        subcontact.number.charAt(0) !== '+'
          ? (subcontact.number = '00' + this.codeObj.code + subcontact.number)
          : (subcontact.number = subcontact.number.replace('+', '00'));
      });

      // console.warn(this.uniqarray.length, lengthOfArrayBefore);
      if (this.uniqarray.length >= lengthOfArrayBefore) {
        this.contactsArray.push(contact);
      }
    });

    //console.warn('here man', this.uniqarray.length);

    return uniqBy(contacts, 'phoneNumbers');
  };

  loadContacts() {
    Contacts.getAll()
      .then((contacts) => {
        contacts = this.filterContacts(contacts);
        this.setState({
          contacts: contacts,
          loading: false,
          searchPlaceholder: `${ScreenLanguage.Search}  ${contacts.length}  ${ScreenLanguage.Contacts}`,
        });
      })
      .catch((e) => {
        this.setState({loading: false});
      });

    /*Contacts.getCount().then((count) => {
      this.setState({
        searchPlaceholder: `${ScreenLanguage.Search}  ${count}  ${ScreenLanguage.Contacts}`,
      });
   });*/

    Contacts.checkPermission();
  }

  search(text) {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (text === '' || text === null) {
      this.loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then((contacts) => {
        this.setState({contacts: this.filterContacts(contacts)});
      });
    } else if (emailAddressRegex.test(text)) {
      Contacts.getContactsByEmailAddress(text).then((contacts) => {
        this.setState({contacts: this.filterContacts(contacts)});
      });
    } else {
      Contacts.getContactsMatchingString(text).then((contacts) => {
        this.setState({contacts: this.filterContacts(contacts)});
      });
    }
  }

  onPressContact(contact) {
    var text = this.state.typeText;
    this.setState({typeText: null});
    if (text === null || text === '') {
      Contacts.openExistingContact(contact);
    } else {
      var newPerson = {
        rawContactId: contact.rawContactId,
        phoneNumbers: [{label: 'mobile', number: text}],
      };
      Contacts.editExistingContact(newPerson).then((contac) => {
        //contact updated
      });
    }
  }

  addNew() {
    Contacts.openContactForm({}).then((contact) => {
      // Added new contact
      this.setState(({contacts}) => ({
        contacts: [contact, ...contacts],
        loading: false,
      }));
    });
  }

  headerBody = () => {
    return (
      <HeaderBodySimple
        {...this.props}
        title={ScreenLanguage.Contacts}
        goBack={() => {
          this.props.navigation.navigate('Home');
        }}
      />
    );
  };

  renderItem = ({item, index}) => {
    let contact = item;
    return (
      <View style={{marginHorizontal: 15}}>
        <ListItem
          leftElement={
            <AvatarItem
              img={
                contact.hasThumbnail ? {uri: contact.thumbnailPath} : undefined
              }
              placeholder={getAvatarInitials(
                `${contact.givenName} ${contact.familyName}`,
              )}
              width={40}
              height={40}
            />
          }
          key={contact.rawContactId}
          title={`${contact.givenName} ${contact.familyName}`}
          description={`${contact.company}`}
          onPress={() => this.onPressContact(contact)}
          onDelete={() => {
            if (Platform.OS === 'android') {
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
                {
                  title: 'Contacts',
                  message: 'This app would like to view your contacts.',
                },
              ).then(() => {
                Contacts.deleteContact(contact).then(() => {
                  this.loadContacts();
                });
              });
            } else {
              Contacts.deleteContact(contact).then(() => {
                this.loadContacts();
              });
            }
          }}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {backgroundColor: ScreenMode.colors.bodyBackground},
        ]}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            //borderBottomWidth: 1,
            //borderBottomColor: '#ddd',
          }}>
          <View style={{width: '50%'}}>
            <Header
              height={50}
              backgroundColor={ScreenMode.colors.headerBackground}
              barStyle={ScreenMode.colors.statusbarStyle}
              headerBody={this.headerBody}
            />
          </View>

          <View
            style={{
              width: '50%',
              alignItems: 'center',
              flexDirection: 'row',
              paddingTop: 20,
              paddingRight: 12,
              justifyContent: 'flex-end',
              backgroundColor: ScreenMode.colors.headerBackground,
            }}>
            {/*</View><TouchableOpacity
              onPress={() => {
                this.setState({search: !this.state.search});
              }}>
              <AntDesign
                name="search1"
                style={{
                  fontSize: 22,
                  marginRight: 15,
                  color: this.state.search
                    ? ScreenMode.colors.sendMessage
                    : 'black',
                }}
              />
            </TouchableOpacity>*/}

            <Entypo
              name="dots-three-vertical"
              style={{fontSize: 19, color: ScreenMode.colors.headerIconColor}}
            />
          </View>
        </View>

        {/*<View
          style={{
            paddingLeft: 100,
            paddingRight: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./logo.png')}
            style={{
              aspectRatio: 6,
              resizeMode: 'contain',
            }}
          />
          </View>*/}

        {/* <Button title="Add new" onPress={() => this.addNew()} />*/}

        {/* <View style={{paddingLeft: 10, paddingRight: 10}}>
          <TextInput
            keyboardType="number-pad"
            style={styles.inputStyle}
            placeholder="Enter number to add to contact"
            onChangeText={(text) => this.setState({typeText: text})}
            value={this.state.typeText}
          />
        </View>*/}

        <TouchableOpacity
          style={{
            height: 50,
            alignItems: 'center',
            marginLeft: 10,
            marginVertical: 10,
          }}
          onPress={() => this.addNew()}>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingLeft: '2%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                //marginLeft: '2%',
                borderRadius: 23,
                backgroundColor: ScreenMode.colors.sendMessage,
              }}>
              <AntDesign
                name="adduser"
                active={true}
                type="AntDesign"
                style={{
                  color: 'white',
                  paddingRight: 6,
                  fontSize: 20,
                }}
              />
            </View>
            <View style={{marginLeft: '4%'}}>
              <Text style={{color: ScreenMode.colors.bodyText}}>
                {ScreenLanguage.NewContact}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            alignItems: 'center',
            marginLeft: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            //this.addNew()
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              paddingLeft: '2%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                //marginLeft: '2%',
                borderRadius: 23,
                backgroundColor: ScreenMode.colors.sendMessage,
              }}>
              <AntDesign
                name="addusergroup"
                active={true}
                type="AntDesign"
                style={{
                  color: 'white',
                  paddingRight: 6,
                  fontSize: 20,
                }}
              />
            </View>
            <View style={{marginLeft: '4%'}}>
              <Text style={{color: ScreenMode.colors.bodyText}}>
                {ScreenLanguage.NewGroups}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {
          //this.state.search ? (
          <SearchBar
            searchPlaceholder={this.state.searchPlaceholder}
            onChangeText={this.search}
          />
          //) : null
        }

        {this.state.loading === true ? (
          <View style={styles.spinner}>
            <ActivityIndicator
              size="large"
              color={ScreenMode.colors.sendMessage}
            />
          </View>
        ) : (
          <DiscoveryFlatList
            data={this.state.contacts}
            renderItem={this.renderItem}
            horizontal={false}
            keyExtractor={(item) => item.rawContactId}
            initialNumToRender={12}
            maxToRenderPerBatch={10}
            //backgroundColor={'white'}
          />
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'white',
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  },
});

const getAvatarInitials = (textString) => {
  if (!textString) {
    return '';
  }

  const text = textString.trim();

  const textSplit = text.split(' ');

  if (textSplit.length <= 1) {
    return text.charAt(0);
  }

  const initials =
    textSplit[0].charAt(0) + textSplit[textSplit.length - 1].charAt(0);

  return initials;
};

export default ContactsList;
