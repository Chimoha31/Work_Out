import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  // Add Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;

    setTodoList([...todoList, { id: uuidv4(), text: todo }]);
    setTodo("");
  };

  // Delete Todo
  const handleDelete = (id) => {
    console.log(id);
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  console.log(todoList);

  return (
    <div className="app_container">
      <form onSubmit={handleSubmit}>
        <label>Todo: </label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <div style={{ marginTop: "10px" }}>
          <button type="submit">Add</button>
        </div>
      </form>

      <div>
        {todoList.map((list) => (
          <div key={list.id} style={{ marginTop: "10px" }}>
            {list.text}{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(list.id)}
            >
              🗑
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
