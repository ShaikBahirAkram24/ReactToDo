import React from "react";
import "./App.css";

function InputField({ HandleInput, inputText, handleKeyPress }) {
  return (
    <input
      onChange={HandleInput}
      onKeyPress={handleKeyPress}
      type="text"
      placeholder="Enter Todo's"
      value={inputText}
    />
  );
}

export default InputField;
