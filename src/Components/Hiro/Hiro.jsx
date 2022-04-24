import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

class Hiro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.myRef = React.createRef();
  //   }

  render() {
      return (

      <AFrameRenderer
        inherent={true}
        embedded
        arjs="debugUIEnabled: false"
        vr-mode-ui="enabled: false"
      >
        <Marker parameters={{ preset: "hiro" }}>
          <a-box
            color="pink"
            material="opacity: 1;"
            position="0 0.003 0"
            scale="0.4 0.4 0.4"
          >
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="5000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </Marker>
      </AFrameRenderer>
  
    );

  }
  
}

export default Hiro;
