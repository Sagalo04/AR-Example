// import React from 'react';
import { Icon } from "@iconify/react";
import { Button, Link } from "@nextui-org/react";
import React, { Component } from "react";
import Hiro from "./Components/Hiro/Hiro";
import boton from "./AGUA 5.png"

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Link
            href="https://facebook.com"
            css={{
              zIndex: 99,
              position: "absolute",
              top: "90%",
              right:"0",
              width: "100vw",
              justifyContent: "center",
            }}

          >
            <img src={boton} alt="" style={{height:"85px"}}/>
            {/* <Button css={{ bgColor: "#c4302b" }} icon={<Icon icon="bxs:right-arrow" color="white" height="24" />}>Go to Music Video</Button> */}
          </Link>
          {/* <a className="button" href="https://facebook.com">
            Go to
          </a> */}
        </div>
        <Hiro />
      </>
    );
  }
}
export default App;
