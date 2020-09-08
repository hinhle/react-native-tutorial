import React, { Component } from "react";
import { View, Text } from "react-native";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };
    const timeToBlink = 1000;
    var taskToDo = () => {
      this.setState((previousState) => {
        return {
          showText: !previousState.showText,
        };
      });
    };
    setInterval(taskToDo, timeToBlink);
  }

  render() {
    let textToDisplay = this.state.showText ? this.props.inputText : "";
    return (
      <View>
        <Text> {textToDisplay} </Text>
      </View>
    );
  }
}
export default class TextBlink extends Component {
  render() {
    return (
      <View>
        <Blink inputText="Hello, how are you?"></Blink>
        <Blink inputText="I'm fine, thank you"></Blink>
      </View>
    );
  }
}
