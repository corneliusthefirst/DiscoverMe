/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import Svg, {Path} from 'react-native-svg';
import {moderateScale, scale} from 'react-native-size-matters';
import ScreenMode from '../../../screenMode';
import ProgressiveImage from '../components/progressiveImage';
import AudioBox from '../components/AudioBox';
import ObservedVariables from '../../../ObservedVariables';
import styles from './styles';
import moment from 'moment';
import Moment from 'react-moment';
import {observer} from 'mobx-react';
import {Icon} from 'native-base';
import Avatar from '../../Avatar';
import GlobalFunctions from '../../../globalFunctions';
import ScreenLanguage from '../../../screenLanguage';

@observer
class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.sender ? this.senderMsgView() : this.receiverMsgView()}
      </View>
    );
  }

  //Other subComponents

  renderReply = (style) => {
    if (
      this.props.message.type === 'photo' ||
      this.props.message.type === 'video'
    ) {
      return (
        <TouchableHighlight
          style={[styles.replyView, style]}
          hitSlop={{top: 5, left: 5, right: 5, bottom: 5}}
          underlayColor={ScreenMode.colors.underlayColor}>
          <Icon
            name="share"
            type="MaterialCommunityIcons"
            style={styles.repyIconStyle}
          />
        </TouchableHighlight>
      );
    }

    return null;
  };

  progressiveImage = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <ProgressiveImage
          source={this.props.message.url.source}
          style={styles.imageSize}
          thumbnail={this.props.message.url.thumbnail}
          isvideo={false}
          {...this.props}
        />
        {this.props.message.url.text.length > 0 ? (
          <View style={{padding: 5}}>
            {this.props.sender
              ? this.renderMessageText(this.props.message.url.text, '#fff')
              : this.renderMessageText(this.props.message.url.text, '#333')}
          </View>
        ) : null}
      </View>
    );
  };

  progressiveVideo = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <ProgressiveImage
          source={{uri: this.props.message.url.source}}
          style={styles.imageSize}
          duration={this.props.message.url.duration.toString()}
          thumbnail={this.props.message.url.thumbnail}
          message={this.props.message}
          {...this.props}
          isvideo={true}
        />
        {this.props.message.url.text.length > 0 ? (
          <View style={{padding: 5}}>
            {this.props.sender
              ? this.renderMessageText(this.props.message.url.text, '#fff')
              : this.renderMessageText(this.props.message.url.text, '#333')}
          </View>
        ) : null}
      </View>
    );
  };

  AudioBox = () => {
    return <AudioBox send={this.props.sender} message={this.props.message} />;
  };

  renderReceivedTime = () => {
    return (
      <View style={styles.timeView}>
        <Text style={[styles.timeStyle, {color: ScreenMode.colors.bodyText}]}>
          {moment(this.props.message.created_at).format('hh:mm')}
        </Text>
        <Text style={[styles.timeStyle, {color: ScreenMode.colors.bodyText}]}>
          ,{' '}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[styles.timeStyle, {color: ScreenMode.colors.sendMessage}]}>
          #{this.props.message.sender.nickname.split(' ')[0]}
        </Text>
      </View>
    );
  };

  renderSendTime = () => {
    return (
      <View style={styles.timeView}>
        <Text style={[styles.timeStyle, {color: ScreenMode.colors.bodyText}]}>
          {moment(this.props.message.created_at).format('hh:mm')}
        </Text>
        {this.renderTick()}
      </View>
    );
  };

  renderMessageText = (text, color) => {
    return (
      <View>
        {this.props.Cremind &&
        this.props.message.remind &&
        this.props.message.remind.groupname &&
        this.props.message.remind.groupname.length > 0 ? (
          <Text
            style={{
              color: ScreenMode.colors.type === 'black' ? '#c94c4c' : '#000000',
            }}>
            #{this.props.message.remind.groupname}
          </Text>
        ) : null}
        <Text style={{color: color ? color : 'black'}}>{text}</Text>
      </View>
    );
  };

  calendarStrings = {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    lastWeek: 'D MMM YYYY',
    sameElse: 'D MMM YYYY',
  };

  renderDate = () => {
    if (
      this.props.index === 0 ||
      moment(this.props.message.created_at).day().toString() !==
        ObservedVariables.previousDay
    ) {
      ObservedVariables.setPreviousDay(
        moment(this.props.message.created_at).day().toString(),
      );
      return (
        <View style={styles.dateView}>
          <Text style={[styles.dateText, {color: ScreenMode.colors.bodyText}]}>
            <Moment calendar={this.calendarStrings} element={Text} withTitle>
              {this.props.message.created_at}
            </Moment>
          </Text>
        </View>
      );
    }
    return null;
  };

  renderTick = () => {
    /*let gotText =
      this.props.message.url &&
      this.props.message.url.text &&
      this.props.message.url.text.length > 0;*/

    if (this.props.sender) {
      /*if (
        (this.props.message.type !== 'text' && gotText) ||
        this.props.message.type === 'text'
      ) {*/
      return (
        <View style={styles.tickView}>
          {this.props.message.sender.send ? (
            this.props.message.sender.isSeen ? (
              <Icon
                name="check-all"
                type="MaterialCommunityIcons"
                style={[
                  styles.tickIcon,
                  {
                    color:
                      ScreenMode.colors.type !== ScreenMode.colors.bodyIcon
                        ? ScreenMode.colors.sendMessage
                        : '#0084ff',
                    opacity: 0.5,
                  },
                ]}
              />
            ) : (
              <Icon
                name="check-all"
                type="MaterialCommunityIcons"
                style={[
                  styles.tickIcon,
                  {color: ScreenMode.colors.bodyIcon, opacity: 0.5},
                ]}
              />
            )
          ) : (
            <Icon
              name="checkmark"
              type="Ionicons"
              style={[
                styles.tickIcon,
                {color: ScreenMode.colors.bodyIcon, opacity: 0.5},
              ]}
            />
          )}
        </View>
      );
      //}
    }
    return null;
  };

  renderRemind = () => {
    if (this.props.message.remind.period) {
      let passed = moment(
        moment(this.props.message.remind.period).format('YYYY-MM-DD'),
      ).isBefore(moment().format('YYYY-MM-DD'), 'day');

      return (
        <View
          style={{
            alignItems: this.props.sender ? 'flex-end' : 'flex-start',
            paddingHorizontal: this.props.message.type === 'text' ? 22 : 16,
          }}>
          {passed ? (
            <TouchableHighlight
              style={styles.btn}
              onPress={() => this.props.openRemind(this.props.message, passed)}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon
                name="bell-off-outline"
                type="MaterialCommunityIcons"
                style={{color: ScreenMode.colors.sendMessage, fontSize: 25}}
                onPress={() =>
                  this.props.openRemind(this.props.message, passed)
                }
              />
            </TouchableHighlight>
          ) : (
            <TouchableHighlight
              style={{
                padding: 5,
                borderRadius: 20,
              }}
              onPress={() => this.props.openRemind(this.props.message, passed)}
              underlayColor={ScreenMode.colors.underlayColor}>
              <Icon
                name="bell-outline"
                type="MaterialCommunityIcons"
                style={{color: ScreenMode.colors.sendMessage, fontSize: 25}}
                onPress={() =>
                  this.props.openRemind(this.props.message, passed)
                }
              />
            </TouchableHighlight>
          )}
        </View>
      );
    }
    return null;
  };

  renderReplyContent = (message) => {
    let color = this.props.sender ? '#cccccc' : '#696969';
    return (
      <View
        style={[
          styles.replyOuter,
          {width: message.type === 'text' ? '100%' : '98%'},
        ]}>
        {message.reply.type === 'video' || message.reply.type === 'photo' ? (
          <View style={styles.replyInner}>
            <Avatar
              uri={
                message.reply.type === 'video'
                  ? message.reply.url.thumbnail
                  : message.reply.url.source
              }
              enableDot={false}
              style={{height: 50, width: 50, borderRadius: 2}}
            />
            <View style={{paddingRight: 5, flexDirection: 'column'}}>
              <Text style={{color: color, marginLeft: 10}}>
                #{message.reply.replyer_name}
              </Text>
              {message.reply.type === 'video' ? (
                <View style={styles.durationView}>
                  <Icon
                    name="videocam"
                    type="MaterialIcons"
                    style={{fontSize: 26, color: color}}
                  />
                  {GlobalFunctions.renderDuration(
                    {
                      fontSize: 12,
                      marginLeft: 10,
                      color: color,
                    },
                    message.reply.url.duration,
                  )}
                </View>
              ) : null}
              {message.reply.type === 'photo' ? (
                <View style={[styles.durationView, {flex: 1}]}>
                  <Icon
                    name="photo"
                    type="FontAwesome"
                    style={{fontSize: 20, color: color}}
                  />
                  <Text
                    ellipsizeMode="tail"
                    style={{
                      fontWeight: '600',
                      color: color,
                      marginLeft: 10,
                    }}>
                    {ScreenLanguage.Photo}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        ) : null}
        {message.reply.type === 'text' ? (
          <Text style={{color: color}}>{message.reply.text}</Text>
        ) : null}
        {message.reply.url.text && message.reply.url.text.length > 0 ? (
          <Text
            style={{color: color, fontSize: 12}}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {message.reply.url.text}
          </Text>
        ) : null}
      </View>
    );
  };

  MessageStyle = this.props.sender
    ? this.props.message.type === 'text'
      ? [
          this.props.message.reply && this.props.message.reply.type
            ? styles.replyballoon
            : styles.balloon,
          {backgroundColor: ScreenMode.colors.sendMessage},
        ]
      : [
          styles.image,
          {
            backgroundColor: ScreenMode.colors.sendMessage,
            borderRadius: this.props.message.type === 'audio' ? 7 : 3,
          },
        ]
    : this.props.message.type === 'text'
    ? [styles.balloon, {backgroundColor: ScreenMode.colors.receivedMessage}]
    : [
        styles.image,
        {
          backgroundColor: ScreenMode.colors.receivedMessage,
          borderRadius: this.props.message.type === 'audio' ? 7 : 3,
        },
      ];

  receivedTail = () => {
    if (
      this.props.index === 0 ||
      ObservedVariables.previousReceivedState !== true
    ) {
      ObservedVariables.setPreviousReceivedState(true);
      ObservedVariables.setPreviousSendState(false);
      return (
        <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
          <Svg
            style={styles.arrowLeft}
            width={moderateScale(15.5, 0.6)}
            height={moderateScale(17.5, 0.6)}
            viewBox="32.484 17.5 15.515 17.5"
            enable-background="new 32.485 17.5 15.515 17.5">
            <Path
              d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
              fill={ScreenMode.colors.receivedMessage}
              x="0"
              y="0"
            />
          </Svg>
        </View>
      );
    }
    return null;
  };

  sendTail = () => {
    if (
      this.props.index === 0 ||
      ObservedVariables.previousSendState !== true
    ) {
      ObservedVariables.setPreviousSendState(true);
      ObservedVariables.setPreviousReceivedState(false);
      return (
        <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
          <Svg
            style={styles.arrowRight}
            width={moderateScale(15.5, 0.6)}
            height={moderateScale(17.5, 0.6)}
            viewBox="32.485 17.5 15.515 17.5"
            enable-background="new 32.485 17.5 15.515 17.5">
            <Path
              d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
              fill={ScreenMode.colors.sendMessage}
              x="0"
              y="0"
            />
          </Svg>
        </View>
      );
    }
    return null;
  };

  //What to render for received depending on type
  renderReceivedContent() {
    switch (this.props.message.type) {
      case 'text':
        return this.renderMessageText(this.props.message.text, '#333');
      case 'photo':
        return this.progressiveImage();
      case 'video':
        return this.progressiveVideo();
      case 'audio':
        return this.AudioBox();
    }
  }

  //What to render for send depending on type
  renderSendContent() {
    switch (this.props.message.type) {
      case 'text':
        return this.renderMessageText(this.props.message.text, '#fff');
      case 'photo':
        return this.progressiveImage();
      case 'video':
        return this.progressiveVideo();
      case 'audio':
        return this.AudioBox();
    }
  }

  senderMsgView = () => {
    return (
      <View style={[styles.mainMessageView]}>
        {this.renderDate()}
        {this.renderRemind()}
        <View style={[styles.item, styles.itemOut]}>
          {this.renderReply({marginLeft: 10})}
          {this.renderSendTime()}
          <View style={this.MessageStyle}>
            {this.props.message.reply && this.props.message.reply.type
              ? this.renderReplyContent(this.props.message)
              : null}
            {this.renderSendContent()}
            {this.sendTail()}
          </View>
        </View>
      </View>
    );
  };

  receiverMsgView = () => {
    return (
      <View style={[styles.mainMessageView]}>
        {this.renderDate()}
        {this.renderRemind()}
        <View style={[styles.item, styles.itemIn]}>
          <View style={this.MessageStyle}>
            {this.props.message.reply && this.props.message.reply.type
              ? this.renderReplyContent(this.props.message)
              : null}
            {this.renderReceivedContent()}
            {this.receivedTail()}
          </View>
          {this.renderReply({marginLeft: scale(255)})}
          {this.renderReceivedTime()}
        </View>
      </View>
    );
  };
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;

//message Styles functions received and send
/* receivedMsgFunc = () => {
    switch (this.props.message.type) {
      case 'text':
        return [
          styles.balloon,
          {padding: 4, backgroundColor: ScreenMode.colors.receivedMessage},
        ];
      case 'photo':
        return [
          styles.image,
          {backgroundColor: ScreenMode.colors.receivedMessage},
        ];
      case 'video':
        return [
          styles.image,
          {backgroundColor: ScreenMode.colors.receivedMessage},
        ];
      case 'audio':
        return [
          styles.image,
          {
            backgroundColor: ScreenMode.colors.receivedMessage,
          },
        ];
    }
  };

  sendMsgFunc = () => {
    switch (this.props.message.type) {
      case 'text':
        return [
          styles.balloon,
          {backgroundColor: ScreenMode.colors.sendMessage},
        ];
      case 'photo':
        return [styles.image, {backgroundColor: ScreenMode.colors.sendMessage}];
      case 'video':
        return [styles.image, {backgroundColor: ScreenMode.colors.sendMessage}];
      case 'audio':
        return [styles.image, {backgroundColor: ScreenMode.colors.sendMessage}];
    }
  };
    //styles form for specific case
  //receivedMsgStyle = this.MessageStyle;
  //sendMsgStyle = this.MessageStyle;
  */
