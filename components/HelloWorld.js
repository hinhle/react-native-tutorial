import React, { Component } from "react";
import { View, Text } from "react-native";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let greeting = `
                    
    
                        Hello World`;
    return (
      <View>
        <Text> {greeting} </Text>
      </View>
    );
  }
}

export default HelloWorld;
