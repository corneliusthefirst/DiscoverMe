/* eslint-disable react-native/no-inline-styles */
import {Icon, Text} from 'native-base';
import React, {Component} from 'react';
import {ScrollView, View, Dimensions, TouchableOpacity} from 'react-native';
import DiscoveryAccordion from './DiscoveryAccordion';
import Hyperlink from 'react-native-hyperlink';
import _ from 'lodash';

let {height, width} = Dimensions.get('window');
//const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default class TransparentAccordion extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    discover: false,
    like: false,
  };

  /*
  shouldComponentUpdate(nextProps) {
    if (
      _.isEqual(this.props.item, nextProps.item) ||
      _.isEqual(this.state, nextProps.state)
    ) {
      return false;
    }
    return true;
  }*/

  toggleLike = () => {
    this.setState({like: !this.state.like});
  };

  toggleDiscover = () => {
    this.setState({discover: !this.state.discover});
  };

  toggle = null;
  toggleFunc = () => {
    return this.toggle();
  };

  _renderHeader = (item, expanded, toggle) => {
    this.toggle = toggle;
    return (
      <View
        style={{
          height: 60,
          width: width,
          flexDirection: 'row',
          borderColor: 'black',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <View
          style={{
            width: width / 3,
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingLeft: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.toggleLike();
            }}>
            <Icon
              style={{fontSize: 30, color: 'white'}}
              type="AntDesign"
              name={this.state.like ? 'heart' : 'hearto'}
              onPress={() => this.toggleLike()}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: width / 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 23,
              borderWidth: 0.2,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              //alignSelf: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                toggle();
                this.props.onPause(!this.props.pause);
              }}>
              {expanded ? (
                <Icon
                  style={{fontSize: 30, color: 'white'}}
                  type="FontAwesome"
                  name="angle-double-up"
                  onPress={() => {
                    toggle();
                    this.props.onPause(!this.props.pause);
                  }}
                />
              ) : (
                <Icon
                  style={{fontSize: 30, color: 'white'}}
                  type="FontAwesome"
                  name="angle-double-down"
                  onPress={() => {
                    toggle();
                    this.props.onPause(!this.props.pause);
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: width / 3,
            borderWidth: 0,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.toggleDiscover();
            }}>
            <Icon
              style={{fontSize: 30, color: 'white'}}
              type={this.state.discover ? 'Entypo' : 'FontAwesome5'}
              name="tripadvisor"
              onPress={() => this.toggleDiscover()}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  _renderContent = (item) => {
    return (
      <View
        style={{
          height: item.message.length > 0 ? height / 4 : 0,
          marginBottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <ScrollView
          style={{
            height: item.message.length > 0 ? height / 4 : 0,
          }}>
          <Hyperlink linkDefault={true} linkStyle={{color: '#2980b9'}}>
            <Text style={{padding: 10, color: 'white'}}>{item.message}</Text>
          </Hyperlink>
        </ScrollView>
      </View>
    );
  };
  render() {
    //console.warn("story is",this.props.dataArray);
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width: width,
          borderColor: 'black',
          alignItems: 'center',
        }}>
        <DiscoveryAccordion
          dataArray={this.props.dataArray}
          _renderHeader={this._renderHeader}
          _renderContent={this._renderContent}
        />
      </View>
    );
  }
}
