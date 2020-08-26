/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';
//import {Spinner, CardItem, Text, List} from 'native-base';

const ifCloseToTop = ({layoutMeasurement, contentOffset, contentSize}) => {
  return contentOffset.y === 0;
};
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    (contentSize.height - paddingToBottom) * 0.2
  );
};
const isTooCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    (contentSize.height - paddingToBottom) * 0.95
  );
};
export default class BaseFlatList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentRender: this.props.initialRender ? this.props.initialRender : 4,
      currentNewRender: this.props.initialNewRender
        ? this.props.initialNewRender
        : 4,
      endReached: false,
      indexing: false,
    };
    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 100,
    };
  }
  initialRender = 3;
  renderPerBatch = 3;
  previousNewRender = 0;
  previousRendered = 0;
  _renderItems(array) {
    return array.map((element) => {
      return this.props.renderItem(
        element,
        this.props.keyExtractor(element, 1),
      );
    });
  }
  continueScrollDown() {
    this.previousRendered = this.state.currentRender;
    if (this.state.currentRender <= this.props.dataSource.length - 1) {
      this.setState({
        currentRender: this.previousRendered + this.props.renderPerBatch,
      });
    } else {
      this.setState({
        endReached: true,
      });
    }
  }
  scrollToIndex(index) {
    this.setState({
      currentRender: this.props.dataSource.length,
    });
    setTimeout(() => {
      this.FlatlistRef &&
        this.FlatlistRef.scrollToIndex({
          animated: true,
          index: index,
        });
    });
  }
  scrollToEnd() {
    this.FlatlistRef &&
      this.FlatlistRef.scrollToOffset({animated: true, offset: 0});
  }
  resetItemNumbers() {
    this.setState({
      currentRender: this.props.initialRender,
      endReached: false,
    });
  }
  previousData = [];
  extractData() {
    return this.props.dataSource.slice(
      this.previousData.length,
      this.state.currentRender,
    );
  }
  renderNewData() {
    return this.props.newData ? this.props.newData : [];
  }
  render() {
    if (this.props.dataSource.length <= 0) {
      this.props.empty ? this.props.empty() : null;
    }
    let data = this.extractData(); //this.props.dataSource
    return (
      <View
        style={{
          flexDirection: 'column',
          height: this.props.fit ? null : '100%',
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : '#ffffff',
          ...this.props.style,
        }}>
        {this.props.marginTop ? <View style={{height: 5}} /> : null}
        <FlatList
          viewabilityConfig={this.viewabilityConfig}
          keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps}
          onScrollEndDrag={({nativeEvent}) => {
            if (isTooCloseToBottom(nativeEvent)) {
              this.props.loadMoreFromRemote && this.props.loadMoreFromRemote();
            }
            if (isCloseToBottom(nativeEvent)) {
              this.continueScrollDown();
            }
            this.props.onScrollEndDrag &&
              this.props.onScrollEndDrag(nativeEvent);
          }}
          enableEmptySections={false}
          disableVirtualization={this.props.disableVirtualization}
          getItemLayout={this.props.getItemLayout}
          scrollEnabled={!this.props.disableScroll}
          nestedScrollEnabled={true}
          numColumns={this.props.numColumns ? this.props.numColumns : 1}
          horizontal={this.props.horizontal ? this.props.horizontal : false}
          onScroll={this.props.onScroll}
          centerContent={true}
          windowSize={this.props.windowSize}
          ref={(ele) => {
            this.FlatlistRef = ele;
          }}
          //canCancelContentTouches={true}
          inverted={this.props.inverted ? this.props.inverted : false}
          //style={this.props.style}
          //ItemSeparatorComponent={this.props.ItemSeparatorComponent}
          maxToRenderPerBatch={
            this.props.renderPerBatch
              ? this.props.renderPerBatch
              : this.props.inverted
              ? 5
              : this.state.endReached
              ? 1
              : 3
          }
          showsHorizontalScrollIndicator={
            this.props.showsHorizontalScrollIndicator
              ? this.props.showsHorizontalScrollIndicator
              : false
          }
          showsVerticalScrollIndicator={
            this.props.showsVerticalScrollIndicator
              ? this.props.showsVerticalScrollIndicator
              : false
          }
          keyExtractor={this.props.keyExtractor}
          data={data}
          extraData={this.props.extraData ? this.props.extraData : null}
          //heightForIndexPath={(index) =>
          //   data[index.row].dimensions?data[index.row].dimensions.height:70}
          //renderIndexPath={(index) => <View>{this.props.renderItem(data[index.row], index.row)}</View>}
          renderItem={({item, index}) => (
            <View>{this.props.renderItem({item, index})}</View>
          )}
          /*ListFooterComponent={() =>
                        this.state.currentRender >= this.props.numberOfItems - 1 ? null : <CardItem style={{ width: "100%", height: 25 }} >
                            {this.state.endReached ? <Text style={{
                                marginLeft: "35%"
                            }}>no more data to load</Text> : (this.props.noSpinner ? null : <Spinner size={"small"}></Spinner>)}
                        </CardItem>
                    }*/

          //Others props
          onScrollBeginDrag={this.props.onScrollBeginDrag}
          onMomentumScrollBegin={this.props.onMomentumScrollBegin}
          onMomentumScrollEnd={this.props.onMomentumScrollEnd}
          scrollEventThrottle={this.props.scrollEventThrottle}
          onEndReachedThreshold={this.props.onEndReachedThreshold}
          removeClippedSubviews={this.props.removeClippedSubviews}
          automaticallyAdjustContentInsets={
            this.props.automaticallyAdjustContentInsets
          }
          //others
          updateCellsBatchingPeriod={this.props.updateCellsBatchingPeriod}
        />
      </View>
    );
  }
}
