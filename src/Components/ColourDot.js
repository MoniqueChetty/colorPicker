import React from "react";
import Dot from "./Dot";

function ColourDot({ baseColors, selectedColor, clickedColor }) {
  return (
    <div>
      <div className="app-wrapper ">
        {baseColors.map(
          (color, index) =>
            color.includes(selectedColor) && (
              <Dot
                color={color}
                index={index}
                clickedColor={clickedColor}
                key={Date.now() + Math.random()}
              />
            )
        )}
      </div>
    </div>
  );
}

export default ColourDot;
