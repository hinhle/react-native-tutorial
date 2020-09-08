import React, { Component } from "react";
import { Alert, View, Text } from "react-native";
import Button from "react-native-button";

export default class ButtonCpn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton = () => {
    Alert.alert("You pressed the button !");
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            fontSize: 20,
            color: "white",
            padding: 15,
            backgroundColor: "green",
            borderRadius: 15,
          }}
          onPress={this._onPressButton}
        >
          This is a button
        </Button>
      </View>
    );
  }
}
