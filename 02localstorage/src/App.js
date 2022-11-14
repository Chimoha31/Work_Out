import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

// -----------------------------
// ②Get data from localstorage
// -----------------------------
const getLocalLists = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
// ④JSON.parse()でJSONに変換する文字列とすることで、JavaScriptのオブジェクトを返す。
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const App = () => {
  // ③todoListはgetLocalLists()
  const [todoList, setTodoList] = useState(getLocalLists());
  const [todo, setTodo] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editingText, setEditingText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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

  // Edit Todo
  const handleEditOpen = (id) => {
    setEditingId(id);
    setIsEditing(true);
  };

  const handleEdit = (id) => {
    // const updatedTodo = todoList.map((todo) => {
    const updatedTodo = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodoList(updatedTodo);
    setEditingText("");
    setIsEditing(false);
  };

  const handleCancel = (id) => {
    setIsEditing(false);
    setEditingText("");
  };

  // -----------------------------
  // ①Add data to localstorage
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="app_container">
      <form onSubmit={handleSubmit} style={{ margin: "30px" }}>
        <label>Todo: </label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <div style={{ margin: "30px" }}>
        {todoList.map((list) =>
          editingId === list.id && isEditing ? (
            <div key={list.id}>
              <input
                key={list.id}
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button onClick={() => handleCancel(list.id)}>Cancel</button>
              <button onClick={() => handleEdit(list.id)}>Update</button>
            </div>
          ) : (
            <div key={list.id} style={{ marginTop: "10px" }}>
              {list.text}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleEditOpen(list.id)}
              >
                ✏️
              </span>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(list.id)}
              >
                🗑
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;
