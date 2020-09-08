import React, { Component } from "react";
import { View, Text } from "react-native";
class Greeting extends Component {
  render() {
    let greetingString = `
      
      
      
      Hello ${this.props.name}, how are you?
      
      
      
      `;
    return <Text>{greetingString}</Text>;
  }
}
class MutipleGreetings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="Raymond"></Greeting>
      </View>
    );
  }
}

export default MutipleGreetings;
