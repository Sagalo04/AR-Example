
import React, { Component } from "react";
import { AFrameRenderer, Marker } from "react-web-ar";

class App extends Component {
  render() {
    return (
      <AFrameRenderer
      arToolKit={{ sourceType: 'webcam'}}
      getSceneRef={ref => (this.scene = ref)} // 
      inherent={true}
      areaLearningButton = {false}
      performanceProfile ={""}
    
      >
        {/* <a-scene> */}

        
        <Marker parameters={{ preset: "hiro" }}>
          <a-box
            color="blue"
            material="opacity: 1;"
            position="0 0.09 0"
            scale="0.4 0.8 0.8"
          >
            <a-animation
              attribute="rotation"
              to="360 0 0"
              dur="5000"
              easing="linear"
              repeat="indefinite"
            />
          </a-box>
        </Marker>
        {/* </a-scene> */}
      </AFrameRenderer>
    );
  }
}

export default App;
