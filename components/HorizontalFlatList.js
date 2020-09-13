import React, { Component } from 'react';
import { View, Text, Platform, FlatList } from 'react-native';
import {horizontalStatus, horizontalFlatListData} from "../data/HorizontalFlatListData"
class HorizontalFlatListItem extends Component {
    render() {
        <View
        style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            width: 90,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'grey',
            margin: 4
        }}>
            <Text
            style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                margin: 20,

            }}>{this.props.item.hour}</Text>
            <Text
            style={{
                fontSize: 16,
                color: 'white',
                margin: 20,

            }}>{this.props.item.degree}</Text>
        </View>
    }
}
export default class HorizontalFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          marginTop: Platform.OS === 'ios' ? 34 : 0
      }}>
        <View style={{height: 158}}>
            <FlatList
                style={{
                    backgroundColor: 'black',
                    opacity: 0.5
                }}
                data = {horizontalFlatListData}
                horizontal = {true}
                renderItem={({ item, index }) => {
                    return (
                    <HorizontalFlatListItem
                        item={item}
                        index={index}
                        parentFlatList={this}
                    ></HorizontalFlatListItem>
                    );
                }}
        ></FlatList>
        </View>
        
      </View>
    );
  }
}
