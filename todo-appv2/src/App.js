import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import uuid from "react-uuid";
import db from "./firebase";

function App() {
  console.log(process.env.REACT_APP_WEATHER_API_KEY);

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const addToDo = (e) => {
    e.preventDefault();
    // setTodos([input, ...todos]);
    db.collection("todos").add({
      title: input,
    });
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
