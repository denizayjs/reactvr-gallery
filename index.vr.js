import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";
import Canvas from "./components/Canvas";

export default class REACTVR_GALLERY extends React.Component {
  constructor() {
    super();

    this.state = {
      src: "reactconf_00.jpg",
    };
  }
  render() {
    return (
      <View>
        <Canvas src={this.state.src} />
      </View>
    );
  }
}

AppRegistry.registerComponent("REACTVR_GALLERY", () => REACTVR_GALLERY);
