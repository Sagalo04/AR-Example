import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

class Hiro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.myRef = React.createRef();
  //   }

  render() {
    return (
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true; precision: medium;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
      >
        <a-nft
          type="nft"
          url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
        >
          <a-entity
            position="0 0 0"
            scale="0.05 0.05 0.05"
            gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
          ></a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    );
  }
}

export default Hiro;
