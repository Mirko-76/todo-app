import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import uuid from "react-uuid";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = (e) => {
    e.preventDefault();
    setTodos([input, ...todos]);
    setInput("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={!input} onClick={addToDo}>
          Add Todo
        </button>

        {todos.map((todo) => {
          return <Todo title={todo} key={uuid()} />;
        })}
      </form>
    </div>
  );
}

export default App;
