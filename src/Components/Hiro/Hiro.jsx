import { Link, Loading } from "@nextui-org/react";
import React, { Component } from "react";
import { AFrameRenderer } from "react-web-ar";
import "./Hiro.css";
import boton from "../../AGUA 5.png";

class Hiro extends Component {
  constructor(props) {
    super(props);
    this.state = { btn: false };
  }

  render() {
    const URL = process.env.PUBLIC_URL + "agua/agua";
    const URL2 = process.env.PUBLIC_URL + "Modelo/finalscene.glb";

    // eslint-disable-next-line no-undef
    AFRAME.registerComponent("markerhandler", {
      init: function () {
        this.el.sceneEl.addEventListener("markerFound", () => {
          console.log("markerFound");
         document.getElementById("linkk").className = "visibilidad";
        });
        this.el.sceneEl.addEventListener("markerLost", () => {
         document.getElementById("linkk").className = "visibilidadNo";
         console.log("markerLost");
        });
      },
    });

    return (
      <>
        <Link
          href="https://facebook.com"
          className="visibilidadNo"
          // css={{
          //   zIndex: 99,
          //   position: "absolute",
          //   top: "90%",
          //   right: "0",
          //   width: "100vw",
          //   justifyContent: "center",
          // }}
          id="linkk"
        >
          <img src={boton} alt="" style={{ height: "75px" }} />
          {/* <Button css={{ bgColor: "#c4302b" }} icon={<Icon icon="bxs:right-arrow" color="white" height="24" />}>Go to Music Video</Button> */}
        </Link>
        <div className="arjs-loader">
          <div>
            <Loading type="points" />
          </div>
        </div>
        <AFrameRenderer
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          // arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
          arjs="sourceType: webcam;debugUIEnabled: false;"
        >
          <a-nft
            ref={this.myRef}
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
              scale="0.6 0.6 0.6"
            ></a-entity>
          </a-nft>

          {/* <a-entity camera></a-entity> */}
        </AFrameRenderer>
      </>
    );
  }
}

export default Hiro;
