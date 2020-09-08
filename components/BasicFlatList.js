import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import flatListData from "../data/flatListData";
import Swipeout from "react-native-swipeout";
import AddModal from "./AddModal";
import Button from "react-native-button";

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
    };
  }
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secID, rowID, direction) => {},
      onOpen: (secID, rowID, direction) => {
        this.setState({ activeRowKey: this.props.item.key });
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              "Alert",
              "Are you sure you want to delete ?",
              [
                {
                  text: "No",
                  onPress: () => console.log("Cancel pressed"),
                  style: "cancel",
                },
                {
                  text: "Yes",
                  onPress: () => {
                    flatListData.slice(this.props.index, 1);
                    //Refresh flat list
                    console.log(deletingRow);
                    this.props.parentFlatList.refreshFlatList(deletingRow);
                  },
                },
              ],
              { cancelable: true }
            );
          },
          text: "Delete",
          type: "delete",
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View
          style={{
            flex: 1,
            backgroundColor: this.props.index % 2 == 0 ? "red" : "green",
          }}
        >
          <Text style={styles.flatListItem}>{this.props.item.name}</Text>
          <Text style={styles.flatListItem}>{this.props.item.origin}</Text>
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  flatListItem: {
    color: "white",
    padding: 10,
    fontSize: 16,
  },
});
export default class BasicFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  refreshFlatList = (deletedKey) => {
    console.log(this.state.deletedRowKey);
    this.setState((prevtState) => {
      return {
        deletedRowKey: deletedKey,
      };
    });
    console.log(this.state.deletedRowKey);
  };
  _onPressAdd() {}

  render() {
    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <Button onPress={this._onPressAdd}>Button</Button>
        <FlatList
          data={flatListData}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                parentFlatList={this}
              ></FlatListItem>
            );
          }}
        ></FlatList>
      </View>
    );
  }
}
