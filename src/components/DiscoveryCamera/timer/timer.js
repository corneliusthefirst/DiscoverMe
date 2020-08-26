/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Text,View, TouchableHighlight } from 'react-native';
//import { Stopwatch} from 'react-native-stopwatch-timer';
import  Stopwatch from './stopwatch';

export default class TimeVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: false,
      stopwatchReset: false,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

 
  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
 
  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }
  
  getFormattedTime(time) {
      this.currentTime = time;
  };
 
  render() {
    return (

      <View>

        <Stopwatch laps={false} msecs={false} start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime} />

        <TouchableHighlight onPress={this.toggleStopwatch}>
          <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const handleTimerComplete = () => alert("custom completion function");

const options = {
  container: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 15,
    color: '#FFF',
    marginLeft: 7,
  }
};
