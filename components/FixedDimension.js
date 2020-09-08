import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FixedDimension extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View
          style={{ width: 100, height: 200, backgroundColor: "blue" }}
        ></View>
        <View
          style={{ width: 100, height: 200, backgroundColor: "red" }}
        ></View>
        <View
          style={{ width: 200, height: 300, backgroundColor: "cyan" }}
        ></View>
      </View>
    );
  }
}
