import { Loading } from "@nextui-org/react";
import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import "./Hiro.css";

class Hiro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.myRef = React.createRef();
  //   }

  render() {
    const URL = process.env.PUBLIC_URL + "agua/agua";
    const URL2 = process.env.PUBLIC_URL + "Modelo/finalscene.glb";
    return (
      <>
        <div className="arjs-loader">
          <div>
            <Loading type="points" />
          </div>
        </div>
        <AFrameRenderer
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          {/* <Marker
            parameters={{
              preset: "hiro",
            }}
          >
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="0.05 0.05 0.05"
              position="0 0 0"
            ></a-entity>
          </Marker> */}

          {/* <a-nft
            type="nft"
            url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
        // smooth="true"
        // smoothCount="10"
        // smoothTolerance=".01"
        // smoothThreshold="5"
          > */}
          {/* <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="5 5 5"
              position="0 0 0"
            ></a-entity>
          </a-nft>
          */}

          {/* <a-scene
      vr-mode-ui="enabled: false;"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"> */}

          <a-nft
            type="nft"
            url={URL}
            // url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model={URL2}
              position="50 25 0"
              rotation="-90 90 -90"
              scale="0.5 0.5 0.5"
            ></a-entity>

          </a-nft>

          <a-entity camera></a-entity>
          {/* </a-scene> */}
        </AFrameRenderer>
      </>
    );
  }
}

export default Hiro;
