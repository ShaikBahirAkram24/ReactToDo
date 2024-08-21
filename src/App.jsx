import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./Button.jsx";
import InputField from "./InputField.jsx";
import Start from "./Start.jsx";
import Todo from "./Todo.jsx";
import EndCard from "./EndCard.jsx";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  function HandleInput(event) {
    setInputText(event.target.value);
    if (event.key === "Enter") {
      AddTodo();
    }
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      AddTodo();
    }
  }
  function AddTodo() {
    setTodoArray([...todoArray, inputText]);
    setInputText("");
  }

  function deleteItem(para) {
    setTodoArray(todoArray.filter((item, index) => index !== para));
  }

  return (
    <div>
      <Start
        inputText={inputText}
        handleKeyPress={handleKeyPress}
        HandleInput={HandleInput}
        passAddToDo={AddTodo}
      />
      <ul>
        {todoArray.map((todo, index) => {
          return (
            <Todo
              passTodos={todo}
              passIndex={index}
              passFunction={deleteItem}
            />
          );
        })}
      </ul>

      <EndCard />
    </div>
  );
}

export default App;
