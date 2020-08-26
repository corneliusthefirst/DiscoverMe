/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import DiscoveryFlatList from '../../../DiscoveryFlatList';
import Message from '../Message';
import stores from '../../../../stores/index';
import {View} from 'react-native';
import RemindDetailPage from '../components/remindDetailPage';

export default  class MessageList extends Component {
  constructor(props){
    super(props);
  }

/*
shouldComponentUpdate(nextProps) {
    const differentState = this.state !== nextProps.state;

    return differentState;
}*/



  renderItem = ({item, index}) => {
    return (
      <Message
        {...this.props}
        message={item}
        index={index}
        sender={stores.LoginStore.user.phone === item.sender.phone}
        openRemind={this.props.openRemind}
        Cremind={this.props.Cremind ? true : false}
        donotBlur={this.props.donotBlur}

      />
    );
  };



  render(){
    return (
      <View style={{flex: 1}}>
        <DiscoveryFlatList
          data={this.props.newMessages}
          renderItem={this.renderItem}
          keyExtractor={(item,index) => ( item.id  + index.toString() + Math.random().toString + (index * 9.2).toString())}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          disableVirtualization={true}
          firstIndex={0}
          windowSize={21}
          numberOfItems={this.props.newMessages.length}
          inverted={true}
          automaticallyAdjustContentInsets={true}
          //scrollEventThrottle={100}
          //onEndReachedThreshold={0.1}
          //for bottomscroll
          scrollToBottom={true}
          scrollToBottomOffset={15}
          //others
          updateCellsBatchingPeriod={1000}
        />
      </View>
    );
  }

}
