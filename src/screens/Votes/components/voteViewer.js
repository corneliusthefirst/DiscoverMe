/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from '../../../BleashupTable/index';
import { Icon, Thumbnail } from 'native-base';
import ViewMoreText from '../BleashupViewMoreText';
import ColorList from '../../../colorList';
import AccordionModuleNative from '../../MyTasks/BleashupAccordion';


export default class voteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votedata: {
        id: '3535564sc5fvf55',
        support: true,
        media: true,
        multiselect: false,
        done: false,
        type: 'vote', // 2nd option is'survey'
        sponsored:true, //if sponsored a sponsorised text would be on the vote or survey
        creatorInfo:{phone:'0666406835',profile:'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',nickname:'Cornelius'},
        context:
          'Vote context for miss of Platza Grenoble please make you choice',
        data: [
          {
            subject: 'lutmila',
            media:{profile: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                   collection : [{
                       photo:'',
                       video:'',
                       message:'',
                   },{
                    photo:'',
                    video:'',
                    message:'',
                }],
                },
            support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
            supported:false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
            voted: false,
          },
          {
            subject: 'Marina',
            media:{profile: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
              collection : [{
                photo:'',
                video:'',
                message:'',
              },{
               photo:'',
               video:'',
               message:'',
         }],
         },
            support: 'specific support_id',
            voted: true,
          },
          {
            subject: 'Daniella ',
            media:{profile: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection : [{
              photo:'',
              video:'',
              message:'',
            },{
             photo:'',
             video:'',
             message:'',
       }],
       },
            support: 'specific support_id',
            voted: false,
          },
          {
            subject: 'Florencia',
            media:{profile: 'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection : [{
              photo:'',
              video:'',
              message:'',
            },{
             photo:'',
             video:'',
             message:'',
          }],
        },
            support: 'specific support_id',
            voted: false,
          },
          {
            subject: 'Grace',
            media:{profile: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                   collection : [{
                       photo:'',
                       video:'',
                       message:'',
                   },{
                    photo:'',
                    video:'',
                    message:'',
                }],
                },
            support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
            supported:false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
            voted: false,
          },
          {
            subject: 'Joana',
            media:{profile: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
              collection : [{
                photo:'',
                video:'',
                message:'',
              },{
               photo:'',
               video:'',
               message:'',
         }],
         },
            support: 'specific support_id',
            voted: true,
          },
          {
            subject: 'Daniella ',
            media:{profile: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection : [{
              photo:'',
              video:'',
              message:'',
            },{
             photo:'',
             video:'',
             message:'',
       }],
       },
            support: 'specific support_id',
            voted: false,
          },
          {
            subject: 'Mariama',
            media:{profile: 'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection : [{
              photo:'',
              video:'',
              message:'',
            },{
             photo:'',
             video:'',
             message:'',
          }],
        },
            support: 'specific support_id',
            voted: false,
          },
          {
            subject: 'Christine',
            media:{profile: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                   collection : [{
                       photo:'',
                       video:'',
                       message:'',
                   },{
                    photo:'',
                    video:'',
                    message:'',
                }],
                },
            support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
            supported:false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
            voted: false,
          },
          {
            subject: 'Zelda',
            media:{profile: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
              collection : [{
                photo:'',
                video:'',
                message:'',
              },{
               photo:'',
               video:'',
               message:'',
         }],
         },
            support: 'specific support_id',
            voted: true,
          },
          {
            subject: 'Jessica',
            media:{profile: 'https://images.unsplash.com/photo-1512101176959-c557f3516787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection : [{
              photo:'',
              video:'',
              message:'',
            },{
             photo:'',
             video:'',
             message:'',
       }],
       },
            support: 'specific support_id',
            voted: false,
          },
          {
            subject: 'Lidiane',
            media:{profile: 'https://images.unsplash.com/photo-1478397453044-17bb5f994100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            collection : [{
              photo:'',
              video:'',
              message:'',
            },{
             photo:'',
             video:'',
             message:'',
          }],
        },
            support: 'specific support_id',
            voted: false,
          },
        ],
      },
      tableHead: ['subject', 'media', 'support', 'vote'],
      tableArray: [],
      tableWidth: 0,
      headerWidth:[],
      addedToView:0,
    };
  }



  dataTestViewAll = [
    {
      subject: 'Christine',
      media:{profile: 'https://images.unsplash.com/photo-1515578706925-0dc1a7bfc8cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
             collection : [{
                 photo:'',
                 video:'',
                 message:'',
             },{
              photo:'',
              video:'',
              message:'',
          }],
          },
      support: 'specific support_id', //specific id link to the receiver of the support wc is an account can be the same for all
      supported:false, //not use on the receiver interface but would be use to count support to specific options on the creator vote board
      voted: false,
    },
    {
      subject: 'Zelda',
      media:{profile: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80',
        collection : [{
          photo:'',
          video:'',
          message:'',
        },{
         photo:'',
         video:'',
         message:'',
   }],
   },
      support: 'specific support_id',
      voted: true,
    },
  ];

  initialiseTable = (votedata) => {
    let tableHeight = votedata.data.length;
    let tableWidth = 0;
    if (votedata.support && votedata.media) {
      tableWidth = 4;
      this.setState({ headerWidth:[132,65,65,65]});
    } else if (!votedata.support && !votedata.media) {
      tableWidth = 2;
      this.setState({ headerWidth:[150,65]});
    } else {
      tableWidth = 3;
      this.setState({ headerWidth:[150,65,65]});
    }
    this.setState({ tableWidth: tableWidth });

    for (let i = 0; i < tableHeight; i += 1) {
      const rowData = [];
      for (let j = 0; j < tableWidth; j += 1) {
        rowData.push(`${i}${j}`);
      }
      this.state.tableArray.push(rowData);
    }
    this.setState({ tableArray: this.state.tableArray });
  };

  componentDidMount() {
    //initialise a table corresponding to the data with zeros
    this.initialiseTable(this.state.votedata);
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  subject = (cellIndex,index, votedata) => (
    <TouchableOpacity onPress={() => this._alertIndex(index)}>
      <View style={styles.subject}>
        <Text style={{color:ColorList.bodySubtext}}>{votedata.data[index].subject}</Text>
      </View>
    </TouchableOpacity>
  );

  media = (cellIndex, index, votedata) => {
        //console.warn(votedata.data[index].subject, index);
        return (
              <TouchableOpacity onPress={() => this._alertIndex(index)}>
            <View style={styles.support}>
                <Thumbnail small source={{uri:votedata.data[index].media.profile}} />
            </View>
             </TouchableOpacity>
          );
      }


  support = (cellIndex,index, votedata) => (
    <TouchableOpacity onPress={() => this._alertIndex(index)}>
      <View style={styles.support}>
        <Icon style={styles.supportIcon} type="MaterialCommunityIcons" name="coin" />
      </View>
    </TouchableOpacity>
  );

  vote = (cellIndex,index, votedata) => {
    return (
      <TouchableOpacity onPress={() => !votedata.done ? this.voteMade(votedata, index) : null }>
       {votedata.data[index].voted ? <Icon type="Ionicons" name="ios-checkmark" style={styles.voteCheck}/> : <View style={styles.btn} />}

      </TouchableOpacity>
    );
  };

  getdataComplete = (cellIndex, index, votedata) => {
    switch (cellIndex) {
      case 0:
        return this.subject(cellIndex, index, votedata);
      case 1:
        return this.media(cellIndex, index, votedata);
      case 2:
        return this.support(cellIndex, index, votedata);
      case 3:
        return this.vote(cellIndex,index, votedata);
    }
  };

  getdataWith3RowssOnly = (cellIndex, index, votedata) => {
    switch (cellIndex) {
      case 0:
        return this.subject(cellIndex,index, votedata);
      case 1:
        return votedata.media
          ? this.media(cellIndex,index, votedata)
          : this.support(cellIndex,index, votedata);
      case 2:
        return this.vote(cellIndex, index, votedata);
    }
  };

  getdataDefault = (cellIndex, index, votedata) => {
    switch (cellIndex) {
      case 0:
        return this.subject(cellIndex, index, votedata);
      case 1:
        return this.support(cellIndex, index, votedata);
      case 2:
        return this.vote(cellIndex, index, votedata);
    }
  };
  getTable = (tableWidth, cellIndex,index, votedata) => {
    switch (tableWidth) {
      case 4:
        return this.getdataComplete(cellIndex,index, votedata);
      case 3:
        return this.getdataWith3RowssOnly(cellIndex,index, votedata);
      default:
        return this.getdataDefault(cellIndex, index, votedata);
    }
  };

 setWidth(index){
   switch (index) {
       case 0:
           return 132;
       default:
           return 65;
   }
 }

voteMade = (votedata,index) => {
   this.state.votedata.data[index].voted = !votedata.data[index].voted;
   this.setState({votedata:this.state.votedata});
}

renderViewMore = (onPress) => {
    return (
      <Text onPress={onPress} style={{paddingLeft:5, paddingBottom:5, color:'blue'}}>View more</Text>
    );
}
  renderViewLess = (onPress) => {
    return (
      <Text onPress={onPress} style={{paddingLeft:5, paddingBottom:5,color:'blue'}} >View less</Text>
    );
}

viewMoreVoteTable = () => {
  this.state.votedata.data = this.state.votedata.data.concat(this.dataTestViewAll);
  this.setState({votedata:this.state.votedata});
  console.warn(this.state.votedata);
}
viewLessVoteTable = () => {

}

renderHeader = () => {
    return (
        <Table borderStyle={{borderColor: 'transparent' }} borderStyle={{borderWidth: 1,borderTopWidth: 0}}>
        <Row
          data={this.state.tableHead}
          style={styles.head}
          textStyle={styles.text}
          widthArr={this.state.headerWidth}
        />
        {this.state.tableArray.slice(0,3).map((rowData, index) => {
            return (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={this.getTable(
                        this.state.tableWidth,
                        cellIndex,
                        index,
                        this.state.votedata
                      )}
                      style={{width: this.setWidth(cellIndex), minHeight: 35, maxHeight:80,padding:5}}
                    />
                  ))}
                </TableWrapper>
            );
          }
        )}
      </Table>
    );
}

renderContent = () => {
    return (
        <Table  borderStyle={{borderWidth: 1}} style={{marginTop:2}}>
        {this.state.tableArray.slice(3).map((rowData, index) => {
            index = index + 3;
            return (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={this.getTable(
                        this.state.tableWidth,
                        cellIndex,
                        index,
                        this.state.votedata
                      )}
                      style={{width: this.setWidth(cellIndex), minHeight: 35, maxHeight:80,padding:5}}
                    />
                  ))}
                </TableWrapper>
            );
          }
        )}
      </Table>
    );
}

  render() {

    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}  >

         <View style={{flexDirection:'row',padding:5}}>
           <TouchableOpacity onPress={() => this._alertIndex()}>
            <View style={styles.support}>
                <Thumbnail small source={{uri:this.state.votedata.creatorInfo.profile}} style={{height:40,width:40,borderRadius:20}} />
            </View>
             </TouchableOpacity>
             <View style={{alignItems:'flex-start',justifyContent:'center',paddingLeft:20,flexDirection:'column'}}>
                <Text style={{color:ColorList.bodyText}}>{this.state.votedata.creatorInfo.nickname}</Text>
                {this.state.votedata.sponsored ? <Text style={{color:ColorList.bodySubtext}}>Sponsored</Text> : null}
             </View>
             <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                <Text style={{color:'tomato'}}>{this.state.votedata.type === 'vote' ? '#vote' : '#survey'}</Text>
             </View>
         </View>

        <Text style={{padding: 5, color: ColorList.bodyText}}>Context</Text>
         <View style={{borderWidth:1, borderColor: 'black' }}>
           <ViewMoreText
             numberOfLines={3}
             renderViewMore={this.renderViewMore}
             renderViewLess={this.renderViewLess}
             textStyle={{padding:5, color: ColorList.bodySubtext}}
            >
            <Text>
               Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
            </Text>
            </ViewMoreText>
        </View>
        <Text style={{padding: 5, color: ColorList.bodyText}} >{this.state.votedata.multiselect ?  'multi select' : 'Single select'}</Text>
        <AccordionModuleNative _renderHeader={this.renderHeader} _renderContent={this.renderContent} accordionView  />

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity onPress={() => this.sendVote()}>
            <View style={{height:25,width:25,borderRadius:13,borderWidth:1,borderColor:'black',justifyContent:'center', alignItems:'center',backgroundColor: ColorList.indicatorColor }}>
                <Text style={{color:'white'}}>ok</Text>
            </View>
          </TouchableOpacity>
        </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 ,flexDirection:'column'},
  head: { height: 40, borderColor: 'black',  backgroundColor: ColorList.indicatorColor },
  text: { margin: 6 ,color: 'white'},
  row: { flexDirection: 'row' },
  btn: { width: 18, height: 18, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center',borderWidth:2,borderColor:'black' },
  voteCheck: { alignSelf: 'center', fontSize: 30},
  support: { alignItems: 'center' },
  supportIcon: { color: 'orange'},
  subject: {alignItems: 'center'},
});






/**
 *          {this.renderHeader()}
          {this.renderContent()}

renderHeader = () => {
    return (  this.state.tableArray.map((rowData, index) => {
         <TableWrapper key={index} style={styles.row}>

            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={this.getTable(
                  this.state.tableWidth,
                  cellIndex,
                  index,
                  this.state.votedata
                )}
                style={{width: this.setWidth(cellIndex), minHeight: 35, maxHeight:80,padding:5}}
              />
            ))}
          </TableWrapper>
  }));
}

renderContent = () => {
    console.warn("here ok 2");
    this.state.tableArray.map((rowData, index) => {
    if (index > 4 ){
        return ( <TableWrapper key={index} style={styles.row}>

            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={this.getTable(
                  this.state.tableWidth,
                  cellIndex,
                  index,
                  this.state.votedata
                )}
                style={{width: this.setWidth(cellIndex), minHeight: 35, maxHeight:80,padding:5}}
              />
            ))}
          </TableWrapper> );
    }

     });
}
    {/*<AccordionModuleNative _renderHeader={this.renderHeader} _renderContent={this.renderContent} accordionView  />

      {this.state.completVoteData.data.length > 4 ? <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            {this.state.addedToView > 0 ?
            <TouchableOpacity onPress={() => this.viewLessVoteTable()}>
                    <Text style={{padding: 5, color:'blue'}}>View less</Text>
            </TouchableOpacity>
            : null}
              <TouchableOpacity onPress={() => this.viewMoreVoteTable()}>
                  <Text style={{paddingLeft: 5,paddingTop: 5, color: 'blue'}} >View More</Text>
              </TouchableOpacity>
        </View> : null }
    */













/** cellIndex === 3
   ? this.vote(cellData, index, this.state.votedata)
  : cellData */
