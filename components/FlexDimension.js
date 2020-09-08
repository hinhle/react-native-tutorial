import React, { Component } from "react";
import { View, Text } from "react-native";

export default class FlexDimension extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 20, backgroundColor: "mediumaquamarine" }}></View>
        <View style={{ flex: 20, backgroundColor: "#1e98ff" }}></View>
        <View style={{ flex: 60, backgroundColor: "darkslategrey" }}></View>
      </View>
    );
  }
}
