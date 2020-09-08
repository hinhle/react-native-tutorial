import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FlexExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column", margin: 20 }}>
        <Text style={{ width: 50, height: 50, backgroundColor: "red" }}></Text>
        <Text
          style={{ width: 50, height: 50, backgroundColor: "green" }}
        ></Text>
        <Text style={{ width: 50, height: 50, backgroundColor: "blue" }}></Text>
      </View>
    );
  }
}
