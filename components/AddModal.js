import React, { Component } from "react";
import { View, Text, Platform, Dimensions, TextInput } from "react-native";
import Button from "react-native-button";
import Modal from "react-native-modalbox";
import flatListData from "../data/flatListData";

var screen = Dimensions.get("window");
export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFoodName: "",
      newFoodOrigin: "",
    };
  }
  showAddModal = () => {
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
          New food information
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
          placeholder="Enter new food's name"
          onChangeText={(text) => this.setState({ newFoodName: text })}
          value={this.state.newFoodName}
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
          placeholder="Enter new food's description"
          onChangeText={(text) => this.setState({ newFoodOrigin: text })}
          value={this.state.newFoodOrigin}
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
              this.state.newFoodName.length == 0 ||
              this.state.newFoodOrigin.length == 0
            ) {
              alert("You must enter food's name and origin");
              return;
            }
            const newKey = this.generateKey(24);
            const newFood = {
              key: newKey,
              name: this.state.newFoodName,
              origin: this.state.newFoodOrigin,
            };
            flatListData.push(newFood);
            this.props.parentFlatList.refreshFlatList(newKey);
            this.refs.myModal.close();
          }}
        >
          Save
        </Button>
      </Modal>
    );
  }
}
