/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
import React, {Component} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Text,View} from 'react-native';
import {padStart} from 'lodash';

class globalFunctions extends Component {
  constructor(props) {
    super(props);
  }

  pickVideoOrPhoto = (option) => {
    return new Promise((resolve, rejectpromise) => {
      switch (option.condition) {
        case 'photogallery':
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality: 0.8,
          }).then((image) => {
            console.log(image);
            resolve(image);
          });
          break;
        case 'multiplephotogallery':
          ImagePicker.openPicker({
            multiple: true,
            compressImageQuality: 0.8,
          }).then((images) => {
            console.log(images);
            resolve(images);
          });
          break;
        case 'videogallery':
          ImagePicker.openPicker({
            mediaType: 'video',
          }).then((video) => {
            console.log(video);
            resolve(video);
          });
          break;
        case 'photocamera':
          ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            compressImageQuality: 0.8,
          }).then((image) => {
            console.log(image);
            resolve(image);
          });
          break;
        case 'videocamera':
          ImagePicker.openCamera({
            mediaType: 'video',
          }).then((image) => {
            console.log(image);
            resolve(image);
          });
          break;
        case 'photocamerawithcropopen':
          ImagePicker.openCropper({
            path: option.url,
            width: 300,
            height: 400,
          }).then((image) => {
            console.log(image);
            resolve(image);
          });
          break;
        case 'clean':
          ImagePicker.clean()
            .then(() => {
              console.log('removed all tmp images from tmp directory');
            })
            .catch((e) => {
              alert(e);
            });
          break;
      }
    });
  };

  ShowViews = (num) => {
    var views = 0;
    if (num > 1000000000) {
      views = Math.round(num) / 1000000000;
      return '  ' + views.toString() + 'Md';
    } else if (num > 1000000) {
      views = Math.round(num) / 1000000;
      return '  ' + views.toString() + 'M';
    } else if (num > 1000) {
      views = Math.round(num) / 1000;
      return '  ' + views.toString() + 'k';
    } else {
      return num;
    }
  };

  ShowTime = (num) => {
    if (num > 3600) {
      let hourcal = num / 3600;
      let hour = hourcal > 10 ? Math.floor(hourcal).toString() : '0' + Math.floor(hourcal).toString();
      let firstrestcal = num - (3600 * Math.floor(hourcal));
      let minutecal = firstrestcal / 60;
      let minute = minutecal > 10 ? Math.floor(minutecal).toString() : '0' + Math.floor(minutecal).toString();
      let restcal = firstrestcal - (60 * Math.floor(minutecal));
      let rest = restcal > 10 ? Math.floor(restcal).toString() : '0' + Math.floor(restcal).toString();
      return hour + ':' + minute + ':' + rest;
    } else if (num > 60) {
      let minutecal = num / 60;
      let minute = minutecal > 10 ? Math.floor(minutecal).toString() : '0' + Math.floor(minutecal).toString();
      let restcal = num - (60 * Math.floor(minutecal));
      let rest = restcal > 10 ? Math.floor(restcal.toString()) : '0' + Math.floor(restcal).toString();
      return minute + ':' + rest;
    } else {
      let secs = num > 10 ? num.toString() : '0' + num.toString();
      return '0:' + secs;
    }
  };

  formatTime(time) {
    let formattedHours = padStart(Math.floor(time / 3600).toFixed(0), 2, 0);
    if (formattedHours > 0){
      time = time - formattedHours * 3600;
      formattedHours  =  formattedHours + ':';
    } else {
      formattedHours  =  '';
    }
    const formattedMinutes = padStart(Math.floor(time / 60).toFixed(0), 2, 0);
    const formattedSeconds = padStart(Math.floor(time % 60).toFixed(0), 2, 0);
    return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
  }

  renderDuration = (style,duration) => {
    return (
      <View>
        <Text
          style={style}>
          {this.formatTime(duration)}
        </Text>
      </View>
    );
  };


}
const GlobalFunctions = new globalFunctions();
export default GlobalFunctions;
