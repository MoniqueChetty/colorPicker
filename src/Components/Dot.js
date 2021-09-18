import React from "react";

function Dot({ color, index, clickedColor }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`${color} button`}
      key={Date.now() + Math.random()}
      onClick={(e) => clickedColor(e)}
    >
      <h2>{color}</h2>
    </div>
  );
}

export default Dot;
