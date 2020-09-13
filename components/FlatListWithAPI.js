import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  RefreshControl,
} from "react-native";
import Swipeout from "react-native-swipeout";
import AddModalWithAPI from "./AddModalWithAPI";
import EditModal from "./EditModal";
import Button from "react-native-button";
import { getEmployeesFromServer } from "../networking/Server";

class FlatListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      numberOfRefresh: 0,
    };
  }
  refreshFlatListItem = (activeKey) => {
    this.setState((prevState) => {
      return {
        numberOfRefresh: prevState.numberOfRefresh + 1,
      };
    });
  };
  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secID, rowID, direction) => {},
      onOpen: (secID, rowID, direction) => {
        this.setState({ activeRowKey: this.props.item.id });
      },
      right: [
        {
          onPress: () => {
            this.props.parentFlatList.refs.editModal.showEditModal(
              " flatListData[this.props.index]",
              this
            );
          },
          text: "Edit",
          type: "primary",
        },
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            console.log("a", this.state.activeRowKey);
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
                    // console.log(flatListData);
                    // console.log("index", this.props.index);
                    // flatListData.splice(this.props.index, 1);
                    // console.log(flatListData);
                    // //Refresh flat list
                    // console.log("yes button", deletingRow);
                    // this.props.parentFlatList.refreshFlatList(deletingRow);
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
          <Text style={styles.flatListItem}>
            {this.props.item.employee_name}
          </Text>
          <Text style={styles.flatListItem}>
            {this.props.item.employee_age}
          </Text>
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
export default class FlatListWithAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
      refreshing: false,
      employeesFromServer: [],
    };
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  onRefresh = () => {
    this.refreshDataFromServer();
  };
  refreshDataFromServer = () => {
    this.setState({ refreshing: true });
    getEmployeesFromServer()
      .then((employees) => {
        this.setState({ employeesFromServer: employees });
        this.setState({ refreshing: true });
      })
      .catch((error) => {
        this.setState({ employeesFromServer: [] });
        this.setState({ refreshing: true });
      });
  };
  componentDidMount() {
    this.refreshDataFromServer();
    console.log(this.state.employeesFromServer.toString());
  }
  refreshFlatList = (activeKey) => {
    console.log("flat list component", this.state.deletedRowKey);
    this.setState((prevState) => {
      return {
        deletedRowKey: activeKey,
      };
    });
    //console.log(this.state.deletedRowKey);
    this.refs.flatList.scrollToEnd();
  };

  _onPressAdd() {
    this.refs.addModal.showAddModal();
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 34 }}>
        <View
          style={{
            backgroundColor: "tomato",
            height: 64,
            justifyContent: "center",
          }}
        >
          <Button onPress={this._onPressAdd}>Button</Button>
        </View>

        <FlatList
          ref={"flatList"}
          /*data={flatListData}*/
          data={this.state.employeesFromServer}
          renderItem={({ item, index }) => {
            return (
              <FlatListItem
                item={item}
                index={index}
                parentFlatList={this}
              ></FlatListItem>
            );
          }}
          keyExtractor={(item, index) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            ></RefreshControl>
          }
        ></FlatList>
        <AddModalWithAPI
          ref={"addModal"}
          parentFlatList={this}
        ></AddModalWithAPI>
        <EditModal ref={"editModal"} parentFlatList={this}></EditModal>
      </View>
    );
  }
}
