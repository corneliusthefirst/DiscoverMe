/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';
import UserItem from '../../components/screenComponents/ActiveList/UserItem';
import {StyleSheet, View, Text} from 'react-native';
import ScreenMode from '../../components/screenMode';
import Header from '../../components/screenComponents/header';
import ScreenLanguage from '../../components/screenLanguage';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import AppStyles from '../../config/styles';
import {Button} from 'native-base';
import {observer} from 'mobx-react';
import received from '../../assets/fake_received_data';

@observer
class Received extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
    };
  }

  styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
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
      width: '60%',
    },
    textGreen: {color: AppStyles.colors.green},
    textRed: {color: AppStyles.colors.red},
    button: {
      //width: 75,
      borderRadius: 5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      height: 33,
      paddingHorizontal: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginTop: -20,
    },
  });

  willUnMount() {}
  didMount() {}

  onClickAccept = () => {};
  onClickRefuse = () => {};

  renderItem = ({item}) => {
    return (
      <View style={this.styles.ItemView}>
        <View style={this.styles.innerTopView}>
          <View style={this.styles.userView}>
            <UserItem
              item={{
                name: item.senderInfo.nickname,
                picture: {
                  thumbnail: item.senderInfo.picture.thumbnail,
                  large: item.senderInfo.picture.large,
                },
              }}
              {...this.props}
              simple
            />
          </View>

          <View style={this.styles.state}>
            {item.accept ? (
              <Text style={[this.styles.textGreen, {paddingRight: 5}]}>
                #accepted
              </Text>
            ) : null}

            {item.refuse ? (
              <Text style={[this.styles.textRed, {paddingRight: 5}]}>
                #refused
              </Text>
            ) : null}

            <View style={this.styles.buttonContainer}>
              {!item.accept && !item.refuse ? (
                <Button
                  style={[this.styles.button, {marginRight: 20}]}
                  onPress={this.onClickAccept}>
                  <Text style={this.styles.textGreen}>accept</Text>
                </Button>
              ) : null}
              {!item.accept && !item.refuse ? (
                <Button style={this.styles.button} onPress={this.onClickRefuse}>
                  <Text style={this.styles.textRed}>refuse</Text>
                </Button>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return this.state.mounted ? (
      <View style={this.styles.container}>
        <DiscoveryFlatList
          data={received}
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

export default Received;
