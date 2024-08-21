import React from "react";
import "./App"


function Todo(parameter) {
    console.log(parameter)
    return (
        <div id={parameter.passIndex} 
            onClick={() => {(parameter.passFunction(parameter.passIndex))}}>
            <li key={parameter.Index}> {parameter.passTodos} </li>
        </div>
    );
}

export default Todo;