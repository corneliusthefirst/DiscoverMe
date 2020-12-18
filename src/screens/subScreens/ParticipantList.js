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

export default class ParticipantList extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
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
      width: '50%',
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
  });

  renderItem = ({item}) => {
    return (
      <View style={this.styles.ItemView}>
        <View style={this.styles.innerTopView}>
          <View style={this.styles.userView}>
            <UserItem
              item={{name: item.nickname, picture: item.picture}}
              {...this.props}
              simple
            />
          </View>

          <View style={this.styles.state}>
            {item.accepted.state ? (
              item.done.state ? (
                <Text style={[this.styles.textGreen, {paddingRight: 5}]}>
                  #done
                </Text>
              ) : item.accepted.state &&
                !this.props.route.params.data.doneBymeOnly ? (
                <Text style={[this.styles.textGreen, {paddingRight: 5}]}>
                  #accepted
                </Text>
              ) : null
            ) : item.refused.state ? (
              <Text style={[this.styles.textRed, {paddingRight: 5}]}>
                #refused
              </Text>
            ) : null}

            {this.props.route.params.data.doneBymeOnly &&
            item.master &&
            item.accepted.state &&
            item.done.state === false ? (
              <Button style={this.styles.button} onPress={this.createStory}>
                <Text style={this.styles.textGreen}>done</Text>
              </Button>
            ) : null}
          </View>
        </View>
      </View>
    );
  };
  headerBody = () => {
    return (
      <HeaderBodySimple
        {...this.props}
        title={ScreenLanguage.Participants}
      />
    );
  };

  willUnMount() {}
  didMount() {}

  render() {
    return this.state.mounted ? (
      <View style={styles.container}>
        <Header
          height={50}
          backgroundColor={ScreenMode.colors.headerBackground}
          barStyle={ScreenMode.colors.statusbarStyle}
          headerBody={this.headerBody}
        />

        <DiscoveryFlatList
          data={this.props.route.params.data.participant}
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

const styles = StyleSheet.create({
  container: {flex: 1},
});
