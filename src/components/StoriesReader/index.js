/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Animated} from 'react-native';
import StoryContainer from './components/StoryContainer';
import CubeNavigationHorizontal from './components/CubeNavigationHorizontal';
import Unmounter from '../unMounter';

class StoriesComponent extends Unmounter {
  constructor(props) {
    super(props);
    this.state = {
      isModelOpen: false,
      currentUserIndex: 0,
      currentScrollValue: 0,
      scrollLockPage: null,
      Stories: [],
      mounted: false,
    };
  }

  onStorySelect = (index) => {
    this.setState({currentUserIndex: index});
    if (this.state.currentUserIndex > 0) {
      this.modalScroll.current.scrollTo(this.state.currentUserIndex, false);
      //console.warn('scrolled to index', this.state.currentUserIndex);
    }
  };

  onStoryNext = (isScroll) => {
    const newIndex = this.state.currentUserIndex + 1;
    if (this.state.Stories.length - 1 > this.state.currentUserIndex) {
      this.setState({currentUserIndex: newIndex});
      if (!isScroll) {
        this.modalScroll.current.scrollTo(newIndex, true);
      }
    } else {
      this.props.navigation.goBack();
    }
  };

  onStoryPrevious = (isScroll) => {
    const newIndex = this.state.currentUserIndex - 1;
    if (this.state.currentUserIndex > 0) {
      this.setState({currentUserIndex: newIndex});
      if (!isScroll) {
        this.modalScroll.current.scrollTo(newIndex, true);
      }
    }
  };

  onScrollChange = (scrollValue) => {
    if (this.state.currentScrollValue > scrollValue) {
      this.onStoryNext(true);
      //console.log('next');
      this.setState({currentScrollValue: scrollValue});
    }
    if (this.state.currentScrollValue < scrollValue) {
      this.onStoryPrevious();
      //console.log('previous');
      this.setState({currentScrollValue: scrollValue});
    }
  };

  init = () => {
    const Stories = this.props.route.params.Stories;
    const currentUserIndex = this.props.route.currentUserIndex;
    this.setState({
      Stories: Stories,
      currentUserIndex: currentUserIndex ? currentUserIndex : 0,
    });
  };

  willUnMount() {}
  didMount() {
    this.init();
    this.onStorySelect(this.state.currentUserIndex);
  }

  render() {
    //GlobalFunctions.changeNavigationBarColor('black', false);
    return this.state.mounted ? (
      <Animated.View style={[styles.container]}>
        <CubeNavigationHorizontal
          callBackAfterSwipe={(g) => this.onScrollChange(g)}
          scrollLockPage={0}
          ref={(ref) => (this.modalScroll = ref)}
          style={{height: '100%', width: '100%'}}>
          {this.state.Stories.map((item, index) => (
            <StoryContainer
              onClose={() => {
                this.props.navigation.goBack();
              }}
              onStoryNext={this.onStoryNext}
              onStoryPrevious={this.onStoryPrevious}
              user={item}
              isNewStory={index !== this.state.currentUserIndex}
            />
          ))}
        </CubeNavigationHorizontal>
      </Animated.View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  circle: {
    width: 66,
    margin: 4,
    height: 66,
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#72bec5',
  },
  title: {
    fontSize: 9,
    textAlign: 'center',
  },
});

export default StoriesComponent;
