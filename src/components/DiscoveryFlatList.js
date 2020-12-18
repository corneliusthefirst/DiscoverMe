/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity,Text, View, StyleSheet} from 'react-native';
import AppStyles from '../config/styles';
import BaseFlatList from '../components/BaseFlatList';
import { Icon } from 'native-base';
import ScreenMode from './screenMode';
import { observer } from 'mobx-react';

@observer
class  DiscoveryList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showScrollBottom:false,
    };
  }



  getItemLayout = (data, index) => ({
    length: 56,
    offset: 56 * index,
    index,
  });
  keyExtractor = (item, index) => index;


  //First group of functions #####################################################################################
  //{ animated, offset} etc

  /*scrollTo(options) {
    if (this.baseFlatListRef.FlatListRef  && options) {
      this.baseFlatListRef.FlatListRef.scrollToOffset(options);
    }
  }*/

  scrollToBottom = (animated) => {
    const { inverted } = this.props;
    if (inverted) {
      this.baseFlatListRef.scrollToEnd();
    } else {
      this.baseFlatListRef.scrollToEnd();
    }
  }




  //Second group of Functions #####################################################################################
  handleOnScroll = (event) => {
    const {
      nativeEvent: {
        contentOffset: { y: contentOffsetY },
        contentSize: { height: contentSizeHeight },
        layoutMeasurement: { height: layoutMeasurementHeight },
      },
    } = event;
    const { scrollToBottomOffset } = this.props;
    if (this.props.inverted) {
      if (contentOffsetY > scrollToBottomOffset) {
        this.setState({ showScrollBottom: true });
      } else {
        this.setState({ showScrollBottom: false });
      }
    } else {
      if (
        contentOffsetY < scrollToBottomOffset &&
        contentSizeHeight - layoutMeasurementHeight > scrollToBottomOffset
      ) {
        this.setState({ showScrollBottom: true });
      } else {
        this.setState({ showScrollBottom: false });
      }
    }
  }
  renderScrollBottomComponent() {
    const { scrollToBottomComponent } = this.props;

    if (scrollToBottomComponent) {
      return scrollToBottomComponent();
    }

    return (
         <TouchableOpacity onPress={()=>{this.scrollToBottom(false);}}>
              <Icon
                  style={{fontSize: 22, color: 'gray'}}
                  type="FontAwesome"
                  name="angle-double-down"
                  onPress={()=>{this.scrollToBottom(false);}}
                />
         </TouchableOpacity> );

  }

  renderScrollToBottomWrapper() {
    const propsStyle = this.props.scrollToBottomStyle || {};
    return (
      <View style={[styles.scrollToBottomStyle, propsStyle]}>
        <TouchableOpacity
          onPress={() => this.scrollToBottom(true)}
          hitSlop={{ top: 5, left: 5, right: 5, bottom: 5 }}
        >
          {this.renderScrollBottomComponent()}
        </TouchableOpacity>
      </View>
    );
  }


render() {
  return (
    <View
      style={
        this.props.alignTop ? styles.containerAlignTop : styles.container
      }
    >
      {this.state.showScrollBottom && this.props.scrollToBottom
        ? this.renderScrollToBottomWrapper()
        : null}

      <BaseFlatList
        ref={(ref) => (this.baseFlatListRef = ref)}
        dataSource={this.props.data ? this.props.data : []}
        renderItem={this.props.renderItem}
        keyExtractor={
          this.props.keyExtractor
            ? this.props.keyExtractor
            : this.state.keyExtractor
        }
        firstIndex={this.props.firstIndex}
        disableVirtualization={this.props.disableVirtualization}
        initialRender={
          this.props.initialNumToRender ? this.props.initialNumToRender : 12
        }
        numColumns={this.props.numColumns ? this.props.numColumns : 1}
        renderPerBatch={
          this.props.maxToRenderPerBatch ? this.props.maxToRenderPerBatch : 5
        }
        horizontal={this.props.horizontal}
        showsVerticalScrollIndicator={
          this.props.showsVerticalScrollIndicator
            ? this.props.showsVerticalScrollIndicator
            : false
        }

        windowSize={this.props.windowSize}
        onScroll={(event) => {
          this.handleOnScroll(event);
          this.props.onScroll && this.props.onScroll(event);
        }
          }
        backgroundColor={this.props.backgroundColor ? this.props.backgroundColor : ScreenMode.colors.bodyBackground}
        onScrollBeginDrag={this.props.onScrollBeginDrag}
        onScrollEndDrag={this.props.onScrollEndDrag}
        onMomentumScrollBegin={this.props.onMomentumScrollBegin}
        onMomentumScrollEnd={this.props.onMomentumScrollEnd}
        getItemLayout={this.props.getItemLayout}
        inverted={this.props.inverted}
        //scrollEventThrottle={this.props.scrollEventThrottle}
        onEndReachedThreshold={this.props.onEndReachedThreshold}
        automaticallyAdjustContentInsets={
          this.props.automaticallyAdjustContentInsets
        }
        //new props test
        //removeClippedSubviews={true}
        //updateCellsBatchingPeriod= {500}

        //others
        updateCellsBatchingPeriod={this.props.updateCellsBatchingPeriod}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollToBottomStyle: {
    opacity: 0.8,
    position: 'absolute',
    right: 10,
    bottom: 30,
    zIndex: 999,
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: AppStyles.colors.black,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
  },
  container: {
    height:'100%',
    width:'100%',
  },
  containerAlignTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  emptyChatContainer: {
    flex: 1,
    transform: [{ scaleY: -1 }],
  },
  headerWrapper: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
  },

});
export default DiscoveryList;


























/**
          <BaseFlatList
        dataSource={this.props.data ? this.props.data : []}
        renderItem={this.props.renderItem}
        keyExtractor={
          this.props.keyExtractor
            ? this.props.keyExtractor
            : this.state.keyExtractor
        }
        initialRender={
          this.props.initialNumToRender ? this.props.initialNumToRender : 8
        }
        numColumns={this.props.numColumns ? this.props.numColumns : 1}
        renderPerBatch={
          this.props.maxToRenderPerBatch ? this.props.maxToRenderPerBatch : 4
        }
        showsVerticalScrollIndicator={
          this.props.showsVerticalScrollIndicator
            ? this.props.showsVerticalScrollIndicator
            : false
        }
      /> */
