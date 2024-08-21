import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import Todo from "./Todo";
import "./App.css";

function Start(props) {
  return (
    <div>
      <h1>TODO`s List</h1>

      <InputField
        HandleInput={props.HandleInput}
        inputText={props.inputText}
        handleKeyPress={props.handleKeyPress}
      />
      <Button passingFunction={props.passAddTodo} />

      <h2>Your Todo`s</h2>
    </div>
  );
}
export default Start;
