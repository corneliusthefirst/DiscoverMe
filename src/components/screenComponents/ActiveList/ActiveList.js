import React, {Component} from 'react';
import DiscoveryFlatList from '../../DiscoveryFlatList';
import UserItem from './UserItem';

import {users} from '../../../assets/fake_data';

export default class ActiveList extends Component {
  renderItem = ({item}) => {
    return (
      <UserItem
        item={item}
        active={this.props.active}
        discoverlist={this.props.discoverlist ? true : false}
        {...this.props}
        donotBlur={this.props.donotBlur}
      />
    );
  };

  getItemLayout = (data, index) => ({length: 55, offset: 55 * index, index});

  render() {
    return (
      <DiscoveryFlatList
        data={users.results}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.login.uuid + index.toString()}
        initialNumToRender={12}
        maxToRenderPerBatch={8}
        getItemLayout={this.getItemLayout}
        //backgroundColor={'white'}
      />
    );
  }
}
