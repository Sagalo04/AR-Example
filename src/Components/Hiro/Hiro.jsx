import { Link, Loading } from "@nextui-org/react";
import React, { Component } from "react";
import { AFrameRenderer } from "react-web-ar";
import "./Hiro.css";
import boton from "../../botonRA.png";

class Hiro extends Component {
  constructor(props) {
    super(props);
    this.state = { btn: false };
  }

  render() {
    const URLagua = process.env.PUBLIC_URL + "Nft/agua/agua";
    // const URLAguaCap = process.env.PUBLIC_URL + "Nft/AguaCap/AguaCap";
    // const URLAguaMayus = process.env.PUBLIC_URL + "Nft/AguaMayus/AguaMayus";
    const URLwater = process.env.PUBLIC_URL + "Nft/water/water";
    // const URLWaterCap = process.env.PUBLIC_URL + "Nft/WaterCap/WaterCap";
    // const URLWaterMayus = process.env.PUBLIC_URL + "Nft/WaterMayus/WaterMayus";

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

    const entity = (
      <a-entity
        gltf-model={URL2}
        position="0 0 -25"
        rotation="-90 90 -90"
        scale="0.5 0.5 0.5"
      ></a-entity>
    );

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
          <img src={boton} alt="" style={{ height: "85px" }} />
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
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
          // arjs="sourceType: webcam;debugUIEnabled: false;"
        >
          <a-nft
            markerhandler
            type="nft"
            url={URLwater}
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            {entity}
          </a-nft>
          <a-nft
            markerhandler
            type="nft"
            // url={URLagua}
            url="https://github.com/Sagalo04/AR-Example/tree/master/public/Nft/agua"
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            {entity}
          </a-nft>

          {/* <a-entity camera></a-entity> */}
        </AFrameRenderer>
      </>
    );
  }
}

export default Hiro;
