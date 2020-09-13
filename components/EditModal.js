import React, { Component } from "react";
import { View, Text, Platform, Dimensions, TextInput } from "react-native";
import Button from "react-native-button";
import Modal from "react-native-modalbox";
import flatListData from "../data/flatListData";

var screen = Dimensions.get("window");
export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: "",
      foodOrigin: "",
    };
  }
  showEditModal = (editingFood, flatListItem) => {
    this.setState({
        key : editingFood.key,
        foodName: editingFood.name,
        foodOrigin: editingFood.origin,
        flatListItem: flatListItem
    })
    this.refs.myModal.open();
  };
  generateKey = (numberOfCharacters) => {
    return require("random-string")({ length: numberOfCharacters });
  };
  render() {
    return (
      <Modal
        ref={"myModal"}
        style={{
          justifyContent: "center",
          borderRadius: Platform.OS === "ios" ? 30 : 0,
          shadowRadius: 10,
          width: screen.width - 80,
          height: 280,
        }}
        position="center"
        backdrop={true}
        onClosed={() => {
          alert("Modal closed !");
        }}
      >
        <Text
          style={{
            height: 40,
            borderBottomColor: "gray",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          food information
        </Text>
        <TextInput
          style={{
            height: 40,
            borderBottomColor: "gray",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            marginBottom: 5,
            borderBottomWidth: 1,
          }}
          placeholder="Enter food's name"
          onChangeText={(text) => this.setState({ foodName: text })}
          value={this.state.foodName}
        ></TextInput>
        <TextInput
          style={{
            height: 40,
            borderBottomColor: "gray",
            marginLeft: 30,
            marginRight: 30,
            marginTop: 10,
            marginBottom: 5,
            borderBottomWidth: 1,
          }}
          placeholder="Enter food's origin"
          onChangeText={(text) => this.setState({ foodOrigin: text })}
          value={this.state.foodOrigin}
        ></TextInput>
        <Button
          style={{
            fontSize: 15,
            color: "white",
          }}
          containerStyle={{
            padding: 8,
            marginLeft: 70,
            marginRight: 70,
            marginTop: 10,
            height: 40,
            borderRadius: 6,
            backgroundColor: "mediumseagreen",
          }}
          onPress={() => {
            if (
              this.state.foodName.length == 0 ||
              this.state.foodOrigin.length == 0
            ) {
              alert("You must enter food's name and origin");
              return;
            }
           //Update flatList
           var foundIndex = flatListData.findIndex(item => this.state.key == item.key)
           if (foundIndex < 0)
                return;
            flatListData[foundIndex].name = this.state.foodName;
            flatListData[foundIndex].origin = this.state.foodOrigin;
            this.state.flatListItem.refreshFlatListItem();
            this.refs.myModal.close();
          }}
        >
          Save
        </Button>
      </Modal>
    );
  }
}
