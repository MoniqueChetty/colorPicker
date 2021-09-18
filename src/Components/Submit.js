import { useState } from "react";

function Submit() {
  const [inputField, setInputField] = useState({
    addColor: "",
  });

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    alert(inputField.addColor);
  };

  return (
    <div>
      <input
        type="text"
        name="addColor"
        onChange={inputsHandler}
        placeholder="Add Colour"
        value={inputField.addColor}
      />

      <br />
      <button onClick={submitButton}>Submit Now</button>
    </div>
  );
}

export default Submit;
