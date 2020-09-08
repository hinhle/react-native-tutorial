import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default class TouchCpn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton = () => {
    alert("This is the button");
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
        <TouchableOpacity onLongPress={this._onPressButton}>
          <View style={{ width: 200, height: 50, backgroundColor: "red" }}>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                color: "white",
                textAlign: "center",
              }}
            >
              This is the button
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
