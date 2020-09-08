import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from "react-native";

export default class VerticalScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> VerticalScrollView </Text>
      </View>
    );
  }
}
