// import React from 'react';
import { Button, Link } from "@nextui-org/react";
import React, { Component } from "react";
import Hiro from "./Components/Hiro/Hiro";

class App extends Component {
  render() {
    return (
      <>
        <div>
          <Link href="https://facebook.com" css={{zIndex:99,position:"absolute",top:"90%",width:"100vw",justifyContent: "center"}}>
          <Button css={{bgColor: "#c4302b"}}>Go to Music Video</Button>
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
