import React from 'react';
import Moment from 'react-moment';
import {Text} from 'react-native';

export default class RenderDate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Text style={this.props.style}>
        <Moment element={Text} fromNow>
          {this.props.date}
        </Moment>
      </Text>
    );
  }
}
