/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {
  View,
  TextInput,
  Keyboard,
  Platform,
  TouchableHighlight,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {Icon} from 'native-base';
import AppStyles from '../../../../config/styles';
import {isIphoneX} from '../../../../config/isIphoneX';
import ScreenMode from '../../../screenMode';
import {observer} from 'mobx-react';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import CameraRollPicker from '../../../CameraRoll/index';
import GlobalIndicator from '../components/GlobalIndicators';
import {RNFFprobe} from 'react-native-ffmpeg';
import uuid from 'react-native-uuid';
import {createThumbnail} from 'react-native-create-thumbnail';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import stores from '../../../../stores';
import Pickers from '../../../../services/Picker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

let width = Dimensions.get('window').width;

@observer
class InputModule extends Component {
  constructor(props) {
    super(props);
    this.getSelectedImages = this.getSelectedImages.bind(this);
  }

  state = {
    text: '',
    typing: false,
    heightIncrease: 0,
    keyboardShown: false,
    isOpenEmoji: false,
    isOpenCameraRoll: false,
    isfocus: false,
    emojiSearch: false,
    searchActive: false,
    num: 0,
    selected: [],
    duration: 0,
    isOpenOptions: false,
    isDatePickerVisible: false,
  };

  height = isIphoneX() ? 74 : 50;
  myheight = 40 + this.state.heightIncrease;

  styles = StyleSheet.create({
    container: {
      height: this.height + this.state.heightIncrease,
      flexDirection: 'row',
      paddingHorizontal: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: AppStyles.colors.grey,
      paddingBottom: isIphoneX() ? 24 : 0,
    },
    customContainer: {
      height: this.height + this.state.heightIncrease,
      flexDirection: 'row',
      paddingHorizontal: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: AppStyles.colors.grey,
      paddingBottom: 0,
    },
    btn: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      bottom: 8,
      borderRadius: 16,
      overflow: 'hidden',
      //position: 'absolute',
    },
    input: {
      flex: 1,
      paddingRight: 33,
      height: 36 + this.state.heightIncrease,
    },
    inputBox: {
      flex: 1,
      marginHorizontal: 5,
      height: 36 + this.state.heightIncrease,
      borderRadius: 24,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: AppStyles.colors.grey,
      marginVertical: 8,
      flexDirection: 'row',
    },
    emoji: {
      position: 'absolute',
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      overflow: 'hidden',
      right: 5,
      bottom: 4,
    },
    calendar: {
      position: 'absolute',
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 16,
      overflow: 'hidden',
      right: 32,
      bottom: 4,
    },
    Icon: {
      color: ScreenMode.colors.keyboardIcon,
      fontSize: 24,
    },
    outerView: {
      width: '100%',
      flexDirection: 'column',
    },
    emojiView: {
      height: 300,
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      borderTopWidth: 0.2,
      borderTopColor: '#dddddd',
    },
    subEmojiView: {
      width: '100%',
      height: 40,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      //alignItems: 'center',
      //backgroundColor:'#F0F0F0'
    },
    emojiBtn: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 16,
      //position: 'absolute',
    },
    emojiIcon: {
      color: AppStyles.colors.grey,
      fontSize: 22,
    },
    checkView: {
      position: 'absolute',
      top: 4,
      right: 4,
      height: 18,
      width: 18,
      borderRadius: 9,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    checkIcon: {
      fontSize: 14,
      color: ScreenMode.colors.sendMessage,
    },
    uploadPhotosView: {
      position: 'absolute',
      bottom: 10,
      right: 8,
      height: 45,
      width: 45,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ScreenMode.colors.sendMessage,
    },
    optionView: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      padding: 8,
    },
    optionItemView: {
      height: 80,
      width: 70,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    round: {
      height: 50,
      width: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      fontSize: 12,
      marginTop: 3,
    },
    optionIcon: {
      fontSize: 20,
      color: 'white',
    },
  });

  componentDidMount() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      this.keyboardDidShowListener = Keyboard.addListener(
        'keyboardWillShow',
        this._keyboardDidShow,
      );
      this.keyboardDidHideListener = Keyboard.addListener(
        'keyboardWillHide',
        this._keyboardDidHide,
      );
    }
  }

  componentWillUnmount() {
    //if (Platform.OS === 'ios' || Platform.OS === 'android') {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    //}
  }

  _keyboardDidShow = () => {
    this.setState({
      keyboardShown: true,
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      keyboardShown: false,
    });
  };

  onChangeText = (text) => {
    this.setState({text, typing: text.length > 0});
  };

  setIncrease = (height) => {
    //console.warn("height is", height);
    this.setState({heightIncrease: height - 36});
    //console.warn("my height is", this.myheight, this.state.heightIncrease);
  };
  reduceInputSize = () => {
    this.setState({typing: false});
  };

  openCamera = () => {
    this.props.navigation.navigate('CameraScreen', {
      onCaptureFinish: (result) => this.sendCameraMessage(result),
      onCameraReady: () => {},
      onMountError: (e) => {
        console.warn(e);
      },
      onClosed: () => {
        this.props.navigation.goBack();
      },
      nomessage: false,
      directreturn: false,
      multiline: true,
      novideo: false,
    });
  };

  //for date picker
  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleConfirm = (date) => {
    let newRemind = {
      groupname: this.props.groupname ? this.props.groupname : '',
      period: date,
      doneBymeOnly: false,
      categories: [],
      /*[
        {id: '1', title: 'Directors', selected: false},
        {id: '2', title: 'Employee', selected: false},
        {id: '3', title: 'subContractors', selected: false},
        {id: '4', title: 'Human Resources', selected: false},
      ],*/
      repeat: {state: false, frequency: 'none'},
      toAll: false,
      participant: [
        {
          phone: stores.LoginStore.user.phone,
          nickname: stores.LoginStore.user.login.username,
          picture: {
            thumbnail: stores.LoginStore.user.picture.thumbnail,
            large: stores.LoginStore.user.picture.large,
          },
          master: true,
          accepted: {state: false, period: ''},
          refused: {state: false, period: ''},
          done: {state: false, period: ''},
        },
      ],
    };

    this.props.donotBlur();
    this.props.navigation.navigate('CreateRemind', {
      newremind: newRemind,
      action: 'new',
    });

    this.hideDatePicker();
  };

  toggleOptions = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      this.setState({
        isfocus: false,
        isOpenEmoji: false,
        isOpenCameraRoll: false,
        isOpenOptions: !this.state.isOpenOptions,
      });
    }, 50);
  };

  sendCameraMessage = () => {};

  render() {
    return (
      <View style={this.styles.outerView}>
        <View
          style={
            this.state.keyboardShown
              ? {
                  height: this.height + this.state.heightIncrease,
                  flexDirection: 'row',
                  paddingHorizontal: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTopWidth: StyleSheet.hairlineWidth,
                  borderColor: AppStyles.colors.grey,
                  paddingBottom: 0,
                  backgroundColor: 'white',
                }
              : {
                  height: this.height + this.state.heightIncrease,
                  flexDirection: 'row',
                  paddingHorizontal: 8,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTopWidth: StyleSheet.hairlineWidth,
                  borderColor: AppStyles.colors.grey,
                  paddingBottom: isIphoneX() ? 24 : 0,
                  backgroundColor: 'white',
                }
          }>
          {!this.state.typing && (
            <TouchableHighlight
              onPress={() => {
                this.toggleOptions();
              }}
              style={[this.styles.btn]}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon
                style={this.styles.Icon}
                type="MaterialIcons"
                name="add-circle-outline"
              />
            </TouchableHighlight>
          )}
          {!this.state.typing && (
            <TouchableHighlight
              onPress={() => {
                this.toggleCameraRoll();
              }}
              style={this.styles.btn}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon style={this.styles.Icon} name="images" type="Ionicons" />
            </TouchableHighlight>
          )}
          {!this.state.typing && (
            <TouchableHighlight
              onPress={() => {
                this.openCamera();
              }}
              style={this.styles.btn}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon
                name="camera"
                type="EvilIcons"
                style={{color: ScreenMode.colors.keyboardIcon, fontSize: 30}}
              />
            </TouchableHighlight>
          )}

          <View
            style={{
              flex: 1,
              marginHorizontal: 5,
              height: 36 + this.state.heightIncrease,
              borderRadius: 24,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: AppStyles.colors.grey,
              marginVertical: 8,
              flexDirection: 'row',
            }}>
            {this.state.typing && (
              <TouchableHighlight
                onPress={() => {
                  this.reduceInputSize();
                }}
                style={this.styles.btn}
                underlayColor={ScreenMode.colors.underlayColor}>
                <Text
                  style={{color: ScreenMode.colors.keyboardIcon, fontSize: 30}}>
                  ›
                </Text>
              </TouchableHighlight>
            )}

            <TextInput
              label="Email"
              value={this.state.text}
              ref={(ref) => (this.textInput = ref)}
              style={{
                flex: 1,
                paddingRight: 63,
                marginLeft: 5,
                height: 36 + this.state.heightIncrease,
              }}
              onChangeText={(text) => this.onChangeText(text)}
              onContentSizeChange={(e) =>
                this.setIncrease(e.nativeEvent.contentSize.height)
              }
              onFocus={(e) => {
                this.setState({isfocus: true});
              }}
              underlineColorAndroid="transparent"
              placeholder={'Write a message'}
              multiline
            />

            <TouchableHighlight
              onPress={() => {
                this.showDatePicker();
              }}
              style={this.styles.calendar}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon
                style={{color: AppStyles.colors.grey, fontSize: 26}}
                type="EvilIcons"
                name="calendar"
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.toggleEmoji();
              }}
              style={this.styles.emoji}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon
                style={{
                  color:
                    this.state.isOpenEmoji && !this.state.isfocus
                      ? ScreenMode.colors.sendMessage
                      : AppStyles.colors.grey,
                  fontSize: 18,
                }}
                type={'Entypo'}
                name={'emoji-happy'}
              />
            </TouchableHighlight>
          </View>

          {this.state.typing ? (
            <TouchableHighlight
              onPress={() => console.log('Pressed')}
              style={this.styles.btn}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Feather style={this.styles.Icon} type="Feather" name="send" />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              onPress={() => console.log('Pressed')}
              style={this.styles.btn}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon style={this.styles.Icon} type="MaterialIcons" name="mic" />
            </TouchableHighlight>
          )}
        </View>
        {this.state.isOpenEmoji && !this.state.isfocus
          ? this.renderEmoji()
          : null}
        {this.state.isOpenCameraRoll && !this.state.isfocus
          ? this.renderImages()
          : null}
        {this.state.isOpenOptions && !this.state.isfocus
          ? this.renderOptions()
          : null}

        {this.state.isDatePickerVisible ? (
          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="datetime"
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
        ) : null}
      </View>
    );
  }

  toggleEmoji = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      this.setState({
        isfocus: false,
        isOpenOptions: false,
        isOpenCameraRoll: false,
        isOpenEmoji: !this.state.isOpenEmoji,
      });
    }, 50);
  };
  toogleEmojiSearch = () => {
    this.setState({
      emojiSearch: !this.state.emojiSearch,
      searchActive: !this.state.searchActive,
    });
  };
  setEmoji = (emoji) => {
    this.setState({text: this.state.text + emoji});
  };
  removeText = () => {
    if (this.state.text.length >= 1) {
      this.setState({
        text: this.state.text.slice(0, this.state.text.length - 2),
      });

      if (this.state.text.length === 1) {
        this.setState({
          typing: false,
        });
      }
    }
  };

  renderEmoji = () => {
    return (
      <View style={this.styles.emojiView}>
        <EmojiSelector
          onEmojiSelected={(emoji) => this.setEmoji(emoji)}
          showSearchBar={this.state.emojiSearch}
          showTabs={true}
          showHistory={true}
          showSectionTitles={false}
          category={Categories.all}
          theme={ScreenMode.colors.sendMessage}
          columns={Math.round(width / 45)}
        />
        <View style={this.styles.subEmojiView}>
          <TouchableHighlight
            onPress={() => {
              this.toogleEmojiSearch();
            }}
            style={this.styles.emojiBtn}
            underlayColor={ScreenMode.colors.underlayColor}>
            <Icon
              style={[
                this.styles.emojiIcon,
                {
                  color: this.state.searchActive
                    ? ScreenMode.colors.sendMessage
                    : AppStyles.colors.grey,
                },
              ]}
              type="MaterialIcons"
              name="search"
            />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => this.removeText()}
            style={[this.styles.emojiBtn, {marginLeft: 10, marginRight: 12}]}
            underlayColor={ScreenMode.colors.underlayColor}>
            <Icon
              style={[
                this.styles.emojiIcon,
                //{color: ScreenMode.colors.sendMessage},
              ]}
              type="MaterialCommunityIcons"
              name="backspace"
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  //Camera Roll

  toggleCameraRoll = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      this.setState({
        isfocus: false,
        isOpenEmoji: false,
        isOpenOptions: false,
        isOpenCameraRoll: !this.state.isOpenCameraRoll,
      });
    }, 50);
  };

  async getSelectedImages(images, current) {
    var num = images.length;
    var newImageArray = [];
    for (let i = 0; i < num; i++) {
      let item = {};
      item.id = uuid.v1();
      item.message = '';
      item.uri = images[i].uri;
      item.type = images[i].type;
      if (images[i].type === 'video') {
        let info = await RNFFprobe.getMediaInformation(images[i].uri);
        let thumbnailInfo = await createThumbnail({
          url: images[i].uri,
          timeStamp: info.duration / 2,
          format: 'png',
        });
        item.thumbnail = thumbnailInfo.path;
        item.duration = Math.round(info.duration / 1000);
      }
      newImageArray.push(item);
    }

    this.setState({
      num: num,
      selected: newImageArray,
    });

    //console.warn(this.state.selected);
  }

  uploadPhotos = () => {
    this.setState({isOpenCameraRoll: false});
    this.props.donotBlur();
    this.props.navigation.navigate('PickedMultipleImage', {
      onClosed: (data, send) => {
        this.closePicked(data, send);
      },
      dataToreturn: this.state.dataToreturn,
      data: {mediaArray: this.state.selected},
      nomessage: false,
      messagePlaceHolder: 'write something...',
      maxLength: 1000,
      multiline: true,
    });
  };
  closePicked = (data, send) => {
    console.warn(data);
    this.setState({selected: []});
  };

  renderImages = () => {
    return (
      <View style={this.styles.emojiView}>
        <CameraRollPicker
          groupTypes="All"
          maximum={10}
          initialNumToRender={12}
          selected={this.state.selected}
          assetType="All"
          imagesPerRow={Math.round(width / 120)}
          imageMargin={4}
          callback={(images, current) => {
            this.getSelectedImages(images, current);
          }}
          loader={
            <GlobalIndicator
              type={'MaterialIndicator'}
              size={40}
              color={ScreenMode.colors.sendMessage}
            />
          }
          emptyText={'No Photo Found !!'}
          emptyTextStyle={{textAlign: 'center', fontSize: 15}}
          selectedMarker={
            <View style={this.styles.checkView}>
              <Icon
                style={this.styles.checkIcon}
                type="AntDesign"
                name="check"
              />
            </View>
          }
        />
        <View style={this.styles.uploadPhotosView}>
          <Feather
            name={'send'}
            style={{color: 'white', fontSize: 23}}
            type={'Feather'}
            onPress={this.uploadPhotos}
          />
        </View>
      </View>
    );
  };

  chooseFiles = async () => {
    let data = await Pickers.TakeFile();
    //console.warn("file choosed", data);
  };
  chooseAudio = async () => {
    let data = await Pickers.TakeAudio();
    //console.warn("audio choosed", data);
  };

  renderOptions = () => {
    return (
      <View style={this.styles.emojiView}>
        <View style={this.styles.optionView}>
          <TouchableOpacity
            onPress={() => {
              this.chooseFiles();
            }}>
            <View style={this.styles.optionItemView}>
              <View style={[this.styles.round, {backgroundColor: '#037D74'}]}>
                <Icon
                  style={this.styles.optionIcon}
                  type={'AntDesign'}
                  name={'addfile'}
                />
              </View>
              <Text
                ellipsizeMode={'tail'}
                numberOfLines={1}
                style={this.styles.textStyle}>
                Files
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.chooseAudio();
            }}>
            <View style={this.styles.optionItemView}>
              <View style={[this.styles.round, {backgroundColor: '#ff8c00'}]}>
                <Icon
                  style={this.styles.optionIcon}
                  type={'Ionicons'}
                  name={'headset'}
                />
              </View>
              <Text
                ellipsizeMode={'tail'}
                numberOfLines={1}
                style={this.styles.textStyle}>
                Audio
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={this.styles.optionItemView}>
              <View style={[this.styles.round, {backgroundColor: '#0084ff'}]}>
                <Feather
                  style={this.styles.optionIcon}
                  type={'Feather'}
                  name={'user'}
                />
              </View>
              <Text
                ellipsizeMode={'tail'}
                numberOfLines={1}
                style={this.styles.textStyle}>
                Contacts
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

export default InputModule;
