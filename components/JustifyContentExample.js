import React, { Component } from "react";
import { View, Text } from "react-native";

export default class JustifyContentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          //flex: 1,
          height: 500,
          backgroundColor: "aqua",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ width: 50, height: 50, backgroundColor: "red" }}></Text>
        <Text
          style={{ width: 50, height: 50, backgroundColor: "green" }}
        ></Text>
        <Text style={{ width: 50, height: 50, backgroundColor: "blue" }}></Text>
      </View>
    );
  }
}
