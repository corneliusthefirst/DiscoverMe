/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ScreenMode from '../../components/screenMode';
import Header from '../../components/screenComponents/header';
import ScreenLanguage from '../../components/screenLanguage';
import HeaderBodySimple from '../../components/headerBodySimple';
import Unmounter from '../../components/unMounter';
import WaveIndicatorView from '../../components/waveIndicator';
import AppStyles from '../../config/styles';
import {observer} from 'mobx-react';
import Moment from 'react-moment';
import AccordionModuleNative from '../../components/StoriesReader/components/DiscoveryAccordion';
import {Radio, Right, Left, Item, ListItem, Icon} from 'native-base';
import DiscoveryFlatList from '../../components/DiscoveryFlatList';
import RemindDInfoPage from '../../components/screenComponents/ChatRoom/components/reminderInfoPage';
import {fakegroupusers} from '../../assets/fakegroupusers';

const repeatdata = [
  {id: '1', title: 'Daily'},
  {id: '2', title: 'Weekly'},
  {id: '3', title: 'Monthly'},
  {id: '4', title: 'Yearly'},
  {id: '5', title: 'None'},
];

@observer
class CreateRemind extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
      toAll: this.props.route.params.newremind.toAll,
      newremind: this.props.route.params.newremind,
      remindInfo: false,
    };
  }

  styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: ScreenMode.colors.bodyBackground},
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
    dateView: {
      display: 'flex',
      flexDirection: 'row',
      padding: 5,
      marginTop: 5,
    },
    dateNameStyle: {
      color: ScreenMode.colors.bottomIconColor,
      fontSize: 14,
      width: '70%',
    },
    periodView: {
      paddingTop: 10,
      paddingLeft: 6,
    },
    messageStart: {fontWeight: '700', marginLeft: 4},
    chooseParticipant: {
      flexDirection: 'row',
      paddingLeft: 6,
      alignItems: 'center',
    },
    toall: {height: 40, width: 80, borderColor: 'white'},
    chooseText: {
      fontWeight: '700',
      marginLeft: 60,
      color: AppStyles.colors.green,
    },
    categoryView: {
      flexDirection: 'column',
    },
    categoriesItem: {
      width: '95%',
      height: 40,
      alignSelf: 'center',
    },
    Ok: {
      marginRight: 6,
      height: 28,
      width: 28,
      borderRadius: 14,
      borderWidth: 0.2,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ScreenMode.colors.sendMessage,
    },
    repeatText: {
      flexDirection: 'row',
    },
    infoIcon: {
      fontSize: 15,
      marginLeft: 10,
    },
  });

  headerBody = () => {
    return (
      <HeaderBodySimple
        {...this.props}
        title={
          this.props.route.params.action === 'edit'
            ? ScreenLanguage.currentlang.EditRemind
            : ScreenLanguage.currentlang.NewRemind
        }
      />
    );
  };

  willUnMount() {}
  didMount() {}
  getItemLayout = (data, index) => ({
    length: 40,
    offset: 40 * index,
    index,
  });
  toggleCategory = (index) => {
    this.state.newremind.categories[index].selected = !this.state.newremind
      .categories[index].selected;
    this.setState({newremind: this.state.newremind});
  };
  toggleToAll = () => {
    this.setState({toAll: !this.state.toAll});
  };
  openInfo = () => {
    this.setState({remindInfo: true});
  };
  openChooseParticipants = () => {
    this.props.navigation.navigate('ChooseParticipants', {
      data: fakegroupusers,
      onChoosed: (data) => this.onChoosed(data),
    });
  };

  onChoosed = (data) => {
    console.warn('participant are', data);
  };

  renderItem = ({item, index}) => {
    return (
      <View style={this.styles.categoriesItem}>
        <ListItem noBorder>
          <Left>
            <Text style={{color: 'black'}}>{item.title}</Text>
          </Left>
          <Right>
            <Radio
              color={'gray'}
              selectedColor={ScreenMode.colors.sendMessage}
              selected={
                this.state.newremind.categories[index].selected === true
              }
              onPress={() => this.toggleCategory(index)}
            />
          </Right>
        </ListItem>
      </View>
    );
  };
  renderHeader = () => {
    return (
      <View style={this.styles.periodView}>
        <Text style={this.styles.messageStart}>
          {' '}
          {ScreenLanguage.currentlang.RemindMessageToSetFor}{' '}
        </Text>
        <View style={this.styles.dateView}>
          <Text> the {'   '}</Text>
          <Moment
            format={'D MMM YYYY  [at]  LT'}
            element={Text}
            style={this.styles.dateNameStyle}
            withTitle>
            {this.props.route.params.newremind.period}
          </Moment>
        </View>
        <View style={this.styles.chooseParticipant}>
          <Item style={this.styles.toall}>
            <Left>
              <Text style={{color: 'black'}}>
                {ScreenLanguage.currentlang.ToAll}
              </Text>
            </Left>
            <Right>
              <Radio
                color={'gray'}
                selectedColor={ScreenMode.colors.sendMessage}
                selected={this.state.toAll === true}
                onPress={() => this.toggleToAll()}
              />
            </Right>
          </Item>

          <TouchableOpacity
            onPress={() => {
              this.openChooseParticipants();
            }}>
            <Text style={this.styles.chooseText}>
              {' '}
              {ScreenLanguage.currentlang.ChooseParticipant}{' '}
            </Text>
          </TouchableOpacity>
        </View>

        {this.props.route.params.newremind.categories.length > 0 ? (
          <View style={this.styles.categoryView}>
            <Text style={this.styles.messageStart}>
              {' '}
              {ScreenLanguage.currentlang.Categories}{' '}
            </Text>
            <View
              style={{
                maxHeight:
                  this.props.route.params.newremind.categories.length < 5
                    ? this.props.route.params.newremind.categories.length * 40
                    : 210,
              }}>
              <DiscoveryFlatList
                data={this.props.route.params.newremind.categories}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
                initialNumToRender={20}
                maxToRenderPerBatch={8}
                getItemLayout={this.getItemLayout}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  };

  setRepeat = (item) => {
    this.state.newremind.repeat.frequency = item.title;
    this.setState({newremind: this.state.newremind});
  };

  renderItemContent = ({item}) => {
    return (
      <View style={this.styles.categoriesItem}>
        <ListItem noBorder>
          <Left>
            <Text style={{color: 'black'}}>{item.title}</Text>
          </Left>
          <Right>
            <Radio
              color={'gray'}
              selectedColor={ScreenMode.colors.sendMessage}
              selected={this.state.newremind.repeat.frequency === item.title}
              onPress={() => this.setRepeat(item)}
            />
          </Right>
        </ListItem>
      </View>
    );
  };
  renderContent = () => {
    return (
      <View
        style={[this.styles.categoryView, {paddingTop: 15, paddingLeft: 6}]}>
        <View style={this.styles.repeatText}>
          <Text style={this.styles.messageStart}>
            {' '}
            {ScreenLanguage.currentlang.Repeat}{' '}
          </Text>

          <Icon
            name="infocirlceo"
            type="AntDesign"
            style={this.styles.infoIcon}
            onPress={() => {
              this.openInfo();
            }}
          />
        </View>

        <View style={{maxHeight: 200}}>
          <DiscoveryFlatList
            data={repeatdata}
            renderItem={this.renderItemContent}
            keyExtractor={(item) => item.id}
            initialNumToRender={5}
            maxToRenderPerBatch={0}
            getItemLayout={this.getItemLayout}
          />
        </View>
      </View>
    );
  };

  render() {
    return this.state.mounted ? (
      <View style={this.styles.container}>
        <Header
          height={50}
          backgroundColor={ScreenMode.colors.headerBackground}
          barStyle={ScreenMode.colors.statusbarStyle}
          headerBody={this.headerBody}
        />

        <AccordionModuleNative
          _renderHeader={this.renderHeader}
          _renderContent={this.renderContent}
          expandedHeight={200}
          accordionView
          withoutScrollView
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: 15,
            paddingTop: 70,
          }}>
          <TouchableOpacity onPress={() => this.sendVote()}>
            <View style={this.styles.Ok}>
              <Text style={{color: 'white'}}>ok</Text>
            </View>
          </TouchableOpacity>
        </View>

        {this.state.remindInfo ? (
          <RemindDInfoPage
            period={this.props.route.params.newremind.period}
            onClosed={() => {
              this.setState({remindInfo: false});
            }}
          />
        ) : null}
      </View>
    ) : (
      <WaveIndicatorView size={100} />
    );
  }
}

export default CreateRemind;
