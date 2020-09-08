import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import Button from "react-native-button";
import Modal from "react-native-modalbox";

export default class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showMyModal = () => {
    this.refs.myModal.open();
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
        <Text>New food information</Text>
      </Modal>
    );
  }
}
