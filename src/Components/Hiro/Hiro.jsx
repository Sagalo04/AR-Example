import { Loading } from "@nextui-org/react";
import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";
import Modelo1 from "../../Modelo/AGUA 4.png";
import Modelo2 from "../../Modelo/AGUA 6.png";
import "./Hiro.css";

class Hiro extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.myRef = React.createRef();
  //   }

  render() {
    const URL = process.env.PUBLIC_URL + "agua/agua";
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
            <a-assets-item img id="model1" src={Modelo1} />
            <a-assets-item img id="model2" src={Modelo2} />

            {/* <a-entity
              id="model-1"
              model-1-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="200 50 50"
              // rotation="0 90 -90"
              geometry="primitive: cylinder; height: 0.1; radius: 1"
              material="shader: flat; src: #model1"
              // src="#model1"
              scale="100 0 100"
            >
            </a-entity> */}

            {/* <a-entity
              id="model-2"
              model-2-listener
              cursor="fuse: true; fuseTimeout: 500"
              position="0 0 0"
              geometry="primitive: box; height: 0.1; depth: 1.5; rotation: 90 0 0;"
              material="shader: flat; src: #model2"
              scale="100 100 100"
            >
            </a-entity>            */}
             <a-entity
              id="model-2"
              model-2-listener
              // rotation="-90 90 -90"
              cursor="fuse: true; fuseTimeout: 500"
              position="200 0 0"
              geometry="primitive: cylinder; height: 0.1; radius: 1"
              material="shader: flat; src: #model2"
              // src="#model2"
              scale="100 0 100"
            >
            </a-entity>
            <a-entity
              // gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              gltf-model="../../Modelo/untitled.gltf"
              material="shader: flat;src: #model1"
              position="20 75 0"
              rotation="-90 90 -90"
              scale="100 0 100"
            ></a-entity>
          </a-nft>

          {/* <a-nft
            type="nft"
            url="https://github.com/Sagalo04/AR-Example/tree/master/src/Components/Hiro/agua"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              position='75 75 0'
              rotation='-90 -90 -90'
              scale='5 5 5'
            ></a-entity>
          </a-nft> */}
          <a-entity camera></a-entity>
          {/* </a-scene> */}
        </AFrameRenderer>
      </>
    );
  }
}

export default Hiro;
