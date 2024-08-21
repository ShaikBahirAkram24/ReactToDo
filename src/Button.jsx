import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";

function Button(props) {
  return <button onClick={props.passingFunction}>Add</button>;
}

export default Button;
