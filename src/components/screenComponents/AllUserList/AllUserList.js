import React, {Component} from 'react';
import DiscoveryFlatList from '../../DiscoveryFlatList';
import UserStoryItem from './UserStoryItem';
import {users} from '../../../assets/fake_data';
import styles from './styles';

export default class AllUserList extends Component {
  renderItem = ({item}) => {
    return <UserStoryItem item={item} />;
  };

  render() {
    return (
      <DiscoveryFlatList
        data={users.results}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.login.uuid}
        //getItemLayout={this.getItemLayout}
        initialNumToRender={12}
        //contentContainerStyle={styles.list}
        numColumns={2}
        maxToRenderPerBatch={8}
      />
    );
  }
}
