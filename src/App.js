import "./App.css";
import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";

function App() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [widthX, setWidth] = useState("");
  const [heightY, setHeight] = useState("");
  const [firstClick, setFirstClick] = useState(false);

  function handleClick({ clientX, clientY }) {
    if (firstClick) {
      setWidth(clientX - x);
      setHeight(clientY - y);
      setFirstClick(false);
    } else {
      setWidth(0);
      setHeight(0);
      setx(clientX);
      sety(clientY);
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
