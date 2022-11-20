import React from "react";
import { View } from "react-vr";

import Button from "./Button";

class UI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: this.props.buttonConfing,
    };
  }

  render() {
    const buttons = this.state.buttons.map((item) => (
      <Button
        key={item.key}
        onClick={() => {
          this.props.onClick(item.key);
        }}
        src={item.buttonImageSrc}
      />
    ));

    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          transform: [{ rotateX: -12 }, { translate: [-1.5, 0, -3] }],
          width: 3,
        }}
      >
        {buttons}
      </View>
    );
  }
}

export default UI;
