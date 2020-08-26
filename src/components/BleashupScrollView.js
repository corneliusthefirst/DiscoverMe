import React, { Component } from "react"
import { FlatList, View, ScrollView } from "react-native";
import { Spinner, CardItem, Text, List } from "native-base";
import { observer } from "mobx-react";


const ifCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return contentOffset.y == 0;
}
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
        ((contentSize.height - paddingToBottom) * (0.70));
};
@observer export default class BleashupScrollView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRender: this.props.initialRender ? this.props.initialRender : 4,
            endReached: false
        }
    }
    initialRender = 3
    renderPerBatch = 3
    previousRendered = 0
    _renderItems(array) {
        return array.map((element) => {
            return this.props.renderItem(element, this.props.keyExtractor(element, 1))
        })
    }
    continueScrollDown() {
        this.previousRendered = this.state.currentRender
        if (this.state.currentRender <= this.props.dataSource.length - 1) {
            this.setState({
                currentRender: this.previousRendered + this.props.renderPerBatch
            })
        } else {
            this.setState({
                endReached: true
            })
        }
    }
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "white",
                ...this.props.style
            }}>
                <ScrollView
                    nestedScrollEnabled={true}
                    onScrollEndDrag={({ nativeEvent }) => {
                        if (isCloseToBottom(nativeEvent)) {
                            this.continueScrollDown()
                        }
                    }
                    }
                    centerContent={true}
                    ref="bleashupFlatlist"
                    //canCancelContentTouches={true}
                    removeClippedSubviews={true}
                    //updateCellsBatchingPeriod={10}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this.props.keyExtractor}>
                    {this._renderItems(this.props.dataSource.slice(this.props.firstIndex ? this.props.firstIndex : 0,
                        this.state.currentRender))}
                    {this.props.numberOfItems < this.props.initialRender ? null : <CardItem style={{ width: "100%", height: 25 }} >
                        {this.state.endReached ? <Text style={{
                            marginLeft: "35%"
                        }}>no more data to load</Text> : <Spinner size={"small"}></Spinner>}
                    </CardItem>}
                </ScrollView>
            </View>)
    }
}