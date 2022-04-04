import React from "react";
import './ToDoApp.css'

function ToDoItem(props) {
  return (
    <div  className="to-do-app2">
      <h2>{props.title}</h2>
      <button> Done</button>
    </div>
  );
}

export default ToDoItem;
