/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class DiscoveryAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return this.props.accordionView ? (
      <View style={{flexDirection: 'column'}}>
        {this.props._renderHeader()}
        {this.props.withoutScrollView ? (
          this.state.expanded && <View>{this.props._renderContent()}</View>
        ) : (
          <ScrollView
            style={{
              height: this.state.expanded
                ? this.props.expandedHeight
                  ? this.props.expandedHeight
                  : 300
                : 0,
            }}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            {this.state.expanded && <View>{this.props._renderContent()}</View>}
          </ScrollView>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 10,
          }}>
          <TouchableOpacity onPress={() => this.toggleExpand()}>
            {this.state.expanded ? (
              <Text style={{padding: 5, color: 'blue'}}>View less</Text>
            ) : (
              <Text style={{paddingLeft: 5, paddingTop: 5, color: 'blue'}}>
                View More
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View>
        {this.props._renderHeader(
          this.props.dataArray,
          this.state.expanded,
          this.toggleExpand,
        )}
        {this.state.expanded && (
          <View>{this.props._renderContent(this.props.dataArray)}</View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}
