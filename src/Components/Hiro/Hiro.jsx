import { Loading } from "@nextui-org/react";
import React, { Component } from "react";
import { AFrameRenderer, } from "react-web-ar";
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
      {
        // eslint-disable-next-line no-undef

      }
        <div className="arjs-loader">
          <div>
            <Loading type="points" />
          </div>
        </div>
        <AFrameRenderer
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          getSceneRef={ref => (this.scene = ref)}
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          <a-nft
            markerhandler
            type="nft"
            url={URL}
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
        </AFrameRenderer>
      </>
    );
  }
}

export default Hiro;
