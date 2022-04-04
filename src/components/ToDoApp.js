import React, { useState } from "react";
import "./ToDoApp.css";
import ToDoItem from "./ToDoItem";


function ToDoApp() {
    
let todos = [
    {
      id: 1,
      title: "clean my room",
    },
    {
      id: 2,
      title: "wash my hands",
    },
    {
      id: 3,
      title: "do my homeworks",
    },
    {
      id: 4,
      title: "do my presentation",
    },
  ];
  let [todoinput, setToDoInput] = useState("");

  function insert_new(event) {
    setToDoInput(event.target.value);
  }

  function alert_userevent(event) {
    event.preventDefault();
    alert(todoinput);

    todos.push({ id: 10, title: todoinput });

    setToDoInput("");
  }
  return (
    <div className="to-do-app">
      <h1>To Do List</h1>
      <form className=" form">
        <input
          value={todoinput}
          placeholder="enter your todo"
          onChange={insert_new}
        ></input>
        <button onClick={alert_userevent}> Add Task</button>
      </form>
      {todos.map((todos) => (
        <ToDoItem title={todos.title} key={todos.id} />
      ))}
    </div>
  );
}

export default ToDoApp;
