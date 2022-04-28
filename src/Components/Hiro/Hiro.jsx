import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

class Hiro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.myRef = React.createRef();
  //   }

  render() {
    return (
      <>
        <div class="arjs-loader">
          <div>Loading, please wait...</div>
        </div>
        <AFrameRenderer
          embedded
          arjs="debugUIEnabled: false"
          vr-mode-ui="enabled: false"
        >
          <Marker
            parameters={{
              preset: "hiro",
            }}
          >
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="6 6 6"
              position="100 100 0"
            ></a-entity>
          </Marker>

          <a-nft
            type="nft"
            url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="6 6 6"
              position="100 100 0"
            ></a-entity>
          </a-nft>
        </AFrameRenderer>
      </>
    );
  }
}

export default Hiro;
