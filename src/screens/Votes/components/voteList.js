import React, {Component} from 'react';
import DiscoveryFlatList from '../../../components/DiscoveryFlatList';
import VoteCard from './voteCard';

export default class VoteList extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => {
    return (
      <VoteCard item={item} {...this.props} donotBlur={this.props.donotBlur} />
    );
  };

  getItemLayout = (data, index) => ({length: 120, offset: 120 * index, index});

  render() {
    return (
      <DiscoveryFlatList
        data={this.props.votes}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.id}
        initialNumToRender={8}
        maxToRenderPerBatch={5}
        getItemLayout={this.getItemLayout}
      />
    );
  }
}
