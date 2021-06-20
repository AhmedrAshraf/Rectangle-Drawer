import "./App.css";
import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

function App() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [widthX, setWidth] = useState("");
  const [heightY, setHeight] = useState("");
  const [firstClick, setFirstClick] = useState(false);

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

    if (firstClick) {
      let width = localX - x;
      let height = localY - y;
      setWidth(width);
      setHeight(height);
      setFirstClick(false);
    } else {
      setx(0);
      sety(0);
      setWidth(0);
      setHeight(0);
      setx(localX);
      sety(localY);
      setFirstClick(true);
    }
  }

  return (
    <div className="App">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 3 }}
      >
        <Layer>
          <Rect x={x} y={y} width={widthX} height={heightY} fill="gray" />
        </Layer>
      </Stage>
      <div className="box box-a" onClick={handleClick}></div>
    </div>
  );
}

export default App;
