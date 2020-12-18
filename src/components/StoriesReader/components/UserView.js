/* eslint-disable */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Icon} from 'native-base';
import RenderDate from '../../RenderDate';
import ScreenLanguage from '../../screenLanguage';

class UserView extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    image: {
      width: this.props.imagesize ? this.props.imagesize : 50,
      height: this.props.imagesize ? this.props.imagesize : 50,
      borderRadius: 25,
      marginLeft: this.props.story ? 8 : 0,
    },
    userView: {
      flexDirection: 'row',
      //position: 'absolute',
      //top: 55,
      width: '98%',
      alignItems: 'center',
    },
    name: {
      fontSize: this.props.namefontsize ? this.props.namefontsize : 18,
      fontWeight: '500',
      marginLeft: 12,
      color: this.props.story ? 'white' : 'black',
    },
    time: {
      fontSize: 12,
      fontWeight: '400',
      marginTop: 3,
      marginLeft: 12,
      color: this.props.story ? 'white' : 'black',
    },
  })

  render() {

    return (
      <View style={this.styles.userView}>
        <Image
          source={{ uri: this.props.profile }}
          style={this.styles.image}
        />
        <View style={{ flex: 1 }}>
          <Text style={this.styles.name}>{this.props.name}</Text>
          <Text style={this.styles.time}>{ScreenLanguage.Posted} {this.props.updated_at ? <RenderDate date={this.props.updated_at} /> : "2h ago"}</Text>
        </View>
        <TouchableOpacity onPress={this.props.onClosePress}>
          <Icon
            name="close"
            size={23}
            type={"MaterialCommunityIcons"}
            style={{ marginRight: 8, color:'white' }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


export default UserView;
