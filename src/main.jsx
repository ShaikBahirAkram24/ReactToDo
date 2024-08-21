import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Button from "./Button.jsx";
import InputField from "./InputField.jsx";
import Start from "./Start.jsx";
import Todo from "./Todo.jsx";
import "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
