import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class Robot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ImageSource = {
      uri:
        "https://nshopvn.com/wp-content/uploads/2019/04/bo-khung-robot-nhen-6-chan-3J5Q-2020-600x600.jpg",
    };
    return (
      <Image source={ImageSource} style={{ width: 300, height: 200 }}></Image>
    );
  }
}

export default Robot;
