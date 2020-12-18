/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';
import UserItem from '../../components/screenComponents/ActiveList/UserItem';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import ScreenMode from '../../components/screenMode';
import Header from '../../components/screenComponents/header';
import ScreenLanguage from '../../components/screenLanguage';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import AppStyles from '../../config/styles';
import {Icon} from 'native-base';
import {remove, uniq, findIndex} from 'lodash';

export default class ChooseParticipants extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
      choosedArray: [],
      data: this.props.route.params.data,
    };
  }
  shouldComponentUpdate(nextProps) {
    if (
      this.props.route.params.data === nextProps.route.params.data &&
      this.state === nextProps.state
    ) {
      return false;
    }
    return true;
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 10,
    },
    ItemView: {
      flexDirection: 'column',
      width: '100%',
    },
    innerTopView: {
      flexDirection: 'row',
      width: '100%',
    },
    state: {
      flex: 1,
      alignItems: 'center',
      paddingRight: 15,
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    userView: {
      width: '70%',
    },
    textGreen: {color: AppStyles.colors.green},
    textRed: {color: AppStyles.colors.red},
    button: {
      alignSelf: 'center',
      //width: 75,
      borderRadius: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      paddingHorizontal: 10,
    },
    check: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingRight: 15,
    },
    checkbase: {
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 20,
      height: 70,
      backgroundColor: 'white',
      paddingTop: 20,
    },
  });

  selectedUser = (participant) => {
    let state = findIndex(this.state.choosedArray, [
      'phone',
      participant.phone,
    ]);
    if (state >= 0) {
      remove(this.state.choosedArray, {phone: participant.phone});
      this.setState({choosedArray: this.state.choosedArray});
    } else {
      this.state.choosedArray.push(participant);
      this.setState({choosedArray: uniq(this.state.choosedArray)});
    }
  };

  renderItem = ({item}) => {
    let participant = {
      phone: item.phone,
      nickname: item.login.username,
      picture: {
        thumbnail: item.picture.thumbnail,
        large: item.picture.large,
      },
      master: false,
      accepted: {state: false, period: ''},
      refused: {state: false, period: ''},
      done: {state: false, period: ''},
    };
    let state = findIndex(this.state.choosedArray, [
      'phone',
      participant.phone,
    ]);

    return (
      <View style={this.styles.ItemView}>
        <View style={this.styles.innerTopView}>
          <View style={this.styles.userView}>
            <UserItem
              item={{
                name: item.login.username,
                picture: item.picture,
              }}
              {...this.props}
              simple
              onPress={() => {
                this.selectedUser(participant);
              }}
            />
          </View>

          {state >= 0 ? (
            <View style={this.styles.check}>
              <Icon name="check" type="AntDesign" style={{fontSize: 15}} />
            </View>
          ) : null}
        </View>
      </View>
    );
  };
  headerBody = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <HeaderBodySimple
          {...this.props}
          title={ScreenLanguage.ChooseParticipants}
        />
        <TouchableOpacity
          onPress={() => {
            this.props.route.params.onChoosed(this.state.choosedArray);
            this.props.navigation.goBack();
          }}>
          <View style={[this.styles.checkbase]}>
            <Icon
              name="check"
              type="AntDesign"
              style={{fontSize: 22, color: ScreenMode.colors.sendMessage}}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  willUnMount() {}
  didMount() {}

  render() {
    return this.state.mounted ? (
      <View style={this.styles.container}>
        <Header
          height={50}
          backgroundColor={ScreenMode.colors.headerBackground}
          barStyle={ScreenMode.colors.statusbarStyle}
          headerBody={this.headerBody}
        />
        <DiscoveryFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.phone}
          initialNumToRender={12}
          maxToRenderPerBatch={8}
        />
      </View>
    ) : (
      <WaveIndicatorView size={100} />
    );
  }
}
