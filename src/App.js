import { useState } from "react";
import "./App.css";
import ColourDot from "./Components/ColourDot";
import Dot from "./Components/Dot";

function App() {
  const [selectedColor, setSelectedColor] = useState();

  const [baseColors, setBaseColors] = useState([
    "blue",
    "black",
    "red",
    "blue",
    "green",
    "purple",
    "blue",
    "red",
  ]);

  const selectColor = (e) => {
    setSelectedColor(e.target.value);
  };
  const clickedColor = (e) => {
    document.getElementById("inputColor").value = "";
    setSelectedColor(e.target.innerHTML);
  };
  const addColor = (e) => {
    if (e.key === "Enter") {
      setBaseColors([...baseColors, e.target.value]);
      document.getElementById("newColor").value = "";
    }
  };

  return (
    <div className="App bg-gray-800">
      <header className="app-header">Color Picker</header>
      <input
        id="inputColor"
        onChange={(e) => {
          selectColor(e);
        }}
        placeholder="Search your color or Click color below"
      ></input>
      <div className="app-wrapper ">
        {baseColors.map((color, index) => (
          <Dot
            color={color}
            index={index}
            clickedColor={clickedColor}
            key={index}
          />
        ))}
      </div>

      {selectedColor && (
        <div>
          <h2>Selected Color</h2>
          <ColourDot
            baseColors={baseColors}
            selectedColor={selectedColor}
            clickedColor={clickedColor}
            key={Date.now() + Math.random()}
          />
        </div>
      )}
      <input
        id="newColor"
        onKeyDown={(e) => addColor(e)}
        placeholder="Add new color Name or Code"
      ></input>
    </div>
  );
}

export default App;
