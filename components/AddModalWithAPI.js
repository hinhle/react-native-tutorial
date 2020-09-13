import React, { Component } from "react";
import { View, Text, Platform, Dimensions, TextInput } from "react-native";
import Button from "react-native-button";
import Modal from "react-native-modalbox";
import { insertNewEmployeeToServer } from "../networking/Server";
var screen = Dimensions.get("window");
export default class AddModalWithAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmployeeName: "",
      newEmployeeSalary: "2000000",
      newEmployeeAge: "",
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
          New employee information
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
          placeholder="Enter new employee's name"
          onChangeText={(text) => this.setState({ newEmployeeName: text })}
          value={this.state.newEmployeeName}
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
          placeholder="Enter new employee's age"
          onChangeText={(text) => this.setState({ newEmployeeAge: text })}
          value={this.state.newEmployeeAge}
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
              this.state.newEmployeeName.length == 0 ||
              this.state.newEmployeeAge.length == 0
            ) {
              alert("You must enter employee's name and age");
              return;
            }
            const newKey = this.generateKey(24);
            const newEmployee = {
              name: this.state.newEmployeeName,
              salary: this.state.newEmployeeSalary,
              age: this.state.newEmployeeAge,
            };
            // flatListData.push(newFood);
            // this.props.parentFlatList.refreshFlatList(newKey);
            insertNewEmployeeToServer(newEmployee).then((result) => {
              if (result === "success") {
                this.props.parentFlatList.refreshDataFromServer();
                console.log("success");
              }
            });
            this.refs.myModal.close();
          }}
        >
          Save
        </Button>
      </Modal>
    );
  }
}
