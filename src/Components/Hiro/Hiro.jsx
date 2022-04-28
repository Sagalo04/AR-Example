import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import patt from "../../pattern-Group.patt";

class Hiro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.myRef = React.createRef();
  //   }

  render() {
    return (
      <AFrameRenderer
        embedded
        arjs="debugUIEnabled: false"
        vr-mode-ui="enabled: false"
      >
        <Marker
          parameters={{
            preset: "customs",
            type: "pattern",
            url: patt,
          }}
          
        >
          <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
          ></a-entity>
          <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="5000"
              easing="linear"
              repeat="indefinite"
            />
          {/* </a-box> */}
        </Marker>
        <Marker
          parameters={{
            preset: "hiro",
          }}
          
        >
          <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
          ></a-entity>
          <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="5000"
              easing="linear"
              repeat="indefinite"
            />
          {/* </a-box> */}
        </Marker>
      </AFrameRenderer>
    );
  }
}

export default Hiro;
