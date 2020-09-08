import React, { Component } from "react";
import { View, Text, TextInput, Keyboard } from "react-native";

export default class TextInputCpn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeText: "please type your text",
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{
            height: 40,
            margin: 40,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          onChangeText={(text) => {
            this.setState((previousState) => {
              return {
                typeText: text,
              };
            });
          }}
        ></TextInput>
        <Text style={{ marginLeft: 40 }}>{this.state.typeText}</Text>
        <TextInput
          style={{
            height: 100,
            margin: 40,
            padding: 10,
            borderColor: "gray",
            borderWidth: 1,
          }}
          multiline={true}
          returnKeyType="google"
          onSubmitEditing={Keyboard.dismiss}
        ></TextInput>
      </View>
    );
  }
}
