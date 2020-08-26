/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import AllUserList from '../../components/screenComponents/AllUserList/AllUserList';

@observer
class AllStoriesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
        <AllUserList />
      </View>
    );
  }
}

export default AllStoriesView;

/**    <SectionList
          //initialNumToRender={2}
          sections={stores.AllStoriesStore.storiesForPage}
          keyExtractor={(item, index) => item + index} //changed
          renderItem={this.renderList}
        />
        <StoriesComponent
          isOpen={this.state.viewAllStories}
          onClosed={this.onClosedAllStories}
          Stories={stores.AllStoriesStore.storiesForModal}
          ref={this.storyComp}
          currentUserIndex={this.state.currentUserIndex}
/> 

  onClosedAllStories = () => {
    StatusBar.setHidden(false, 'fade');
    this.setState({viewAllStories: false});
  };
  openAllStories = (index) => {
    StatusBar.setHidden(true, 'fade');
    this.setState({currentUserIndex: index, viewAllStories: true});
  };


  renderList = ({item, _}) => {
    //console.warn('item 1 is', item, index);
    let id = item.id;

    return (
      <Observer>
        {() => (
          <FlatList
            data={item.subArray}
            horizontal={true}
            keyExtractor={(_, index) => index}
            renderItem={({item, index}) => {
              return (
                <Observer>
                  {() => (
                    <TouchableOpacity
                      onPress={() => {
                        let indexH = id * 3 + index - 3;
                        console.warn('index is', indexH);
                        this.openAllStories(indexH);
                        //this.storyComp.current.onStorySelect(indexH);
                      }}>
                      <Image
                        style={{
                          width: width / 3,
                          margin: 0.8,
                          height: width / 3,
                          //borderWidth: 0.5,
                          //borderColor: ScreenMode.bodyBackground,
                        }}
                        source={{uri: item.profile}}
                        isHorizontal
                      />
                    </TouchableOpacity>
                  )}
                </Observer>
              );
            }}
          />
        )}
      </Observer>
    );
  };*/

