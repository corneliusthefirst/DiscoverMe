/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Story from './Story';
import UserView from './UserView';
import ProgressArray from './ProgressArray';
import TransparentAccordion from './transparentAccordion';
import stores from '../../../stores';


let {height, width} = Dimensions.get('window');
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const StoryContainer = (props) => {
  const {user} = props;
  const {stories = []} = user.stories.length > 0 ? user :  stores.AllStoriesStore.allstories[user.phone] || {};
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [isModelOpen, setModel] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [duration, setDuration] = useState(3);
  const story = stories.length ? stories[currentIndex] : {};
  //const {isReadMore} = story || {};

  // const onVideoLoaded = (length) => {
  //   props.onVideoLoaded(length.duration);
  // };

  const changeStory = (evt) => {
    if (evt.locationX > width / 2) {
      nextStory();
    } else {
      prevStory();
    }
  };

  const nextStory = () => {
    if (stories.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
      setLoaded(false);
      setDuration(3);
    } else {
      setCurrentIndex(0);
      props.onStoryNext();
    }
  };

  const prevStory = () => {
    if (currentIndex > 0 && stories.length) {
      setCurrentIndex(currentIndex - 1);
      setLoaded(false);
      setDuration(3);
    } else {
      setCurrentIndex(0);
      props.onStoryPrevious();
    }
  };

  const onImageLoaded = () => {
    setLoaded(true);
  };

  const onVideoLoaded = (length) => {
    setLoaded(true);
    setDuration(length.duration);
  };

  const onPause = (result) => {
    setIsPause(result);
  };

  const loading = () => {
    if (!isLoaded) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator color="white" />
        </View>
      );
    }
  };

  const onSwipeDown = () => {
    this.transAccord.toggleFunc();
    setIsPause(false);
  };

  const onSwipeUp = () => {
    setIsPause(true);
    this.transAccord.toggleFunc();
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeDown={onSwipeDown}
      onSwipeUp={onSwipeUp}
      config={config}
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        delayLongPress={500}
        onPress={(e) => changeStory(e.nativeEvent)}
        onLongPress={() => onPause(true)}
        onPressOut={() => onPause(false)}
        style={styles.container}>
        <View style={styles.container}>
          <Story
            onImageLoaded={onImageLoaded}
            pause={isPause}
            isNewStory={props.isNewStory}
            onVideoLoaded={onVideoLoaded}
            story={story}
            height={height + statusBarHeight}
          />

          {loading()}

          <View style={{ position:'absolute',top:0,left:0,right:0,bottom:0,backgroundColor: 'rgba(0,0,0,0.3)',flexDirection:'column',paddingTop: 40}}>
          <ProgressArray
            next={nextStory}
            isLoaded={isLoaded}
            duration={duration}
            pause={isPause}
            isNewStory={props.isNewStory}
            stories={stories}
            currentIndex={currentIndex}
            currentStory={stories[currentIndex]}
            length={stories.map((_, i) => i)}
            progress={{id: currentIndex}}
          />
              <UserView
                name={user.username}
                profile={user.profile}
                updated_at={user.updated_at}
                onClosePress={props.onClose}
                story
              />

       </View>

        </View>

      </TouchableOpacity>
      <TransparentAccordion ref={(ref) => {this.transAccord = ref;}} dataArray={stories[currentIndex]} isNewStory={props.isNewStory} onPause={onPause} pause={isPause} />
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height + statusBarHeight,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'black',
    bottom: 0,
  },
  loading: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    width: 50,
    height: 8,
    backgroundColor: 'gray',
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: 8,
  },
});

export default StoryContainer;


   /**  <Modal
          style={styles.modal}
          position="bottom"
          isOpen={isModelOpen}
          onClosed={onReadMoreClose}>
          <View style={styles.bar} />
          <Text>Here we are</Text>
        </Modal>

         {isReadMore && <Readmore onReadMore={onReadMoreOpen} />}
         */
 /*
  const onSwipeDown = () => {
    if (!isModelOpen) {
      props.onClose();
    } else {
      setModel(false);
    }
  };

  const onSwipeUp = () => {
    if (!isModelOpen && isReadMore) {
      setModel(true);
    }
  };*/

    /*
  const onReadMoreOpen = () => {
    setIsPause(true);
    setModel(true);
  };
  const onReadMoreClose = () => {
    setIsPause(false);
    setModel(false);
  };
   modal: {
    width: '100%',
    height: '90%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
   <Story
              onImageLoaded={onImageLoaded}
              pause
              onVideoLoaded={onVideoLoaded}
              story={story}
            />
          </View>
  */
