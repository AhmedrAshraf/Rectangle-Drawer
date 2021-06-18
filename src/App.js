import "./App.css";
import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

function App() {
  const [xOne, setXOne] = useState();
  const [xTwo, setXTwo] = useState();

  function handleClick(event) {
    if (!event.target.classList.contains("box")) {
      return;
    }

    var viewportX = event.clientX;
    var viewportY = event.clientY;
    var boxRectangle = event.target.getBoundingClientRect();
    var localX = viewportX - boxRectangle.left;
    var localY = viewportY - boxRectangle.top;
    var borderWidth = parseInt(
      window.getComputedStyle(event.target).borderTopWidth,
      10
    );
    localX -= borderWidth;
    localY -= borderWidth;

    console.log("localX", localX);
    console.log("localY", localY);
  }

  return (
    <div className="App">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}
      >
        <Layer>
          <Rect x={3} y={5} width={1020} height={813} fill="yellow" />
        </Layer>
      </Stage>
      <div className="box box-a" onClick={handleClick}></div>
    </div>
  );
}

export default App;
