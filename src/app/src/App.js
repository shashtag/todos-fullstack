import { useEffect, useState } from "react";
import "./App.css";
import useGetData from "./Hooks/useInit";

export function App() {
  const { todos, setTodos, showInput, setShowInput, input, setInput } =
    useGetData();

  const clearState = (data) => {
    setInput("");
    setTodos(data);
    setShowInput(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:8000/todos/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: input }),
      }).then((response) => response.json());
      clearState(data);
    } catch (e) {}
  };
  const handleDelete = async (e, id) => {
    try {
      const data = await fetch("http://localhost:8000/todos/", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }).then((response) => response.json());
      clearState(data);
    } catch (e) {}
  };

  return (
    <div className='container'>
      <h1>My ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <div id='input-container'>
          <div
            id='todo-input-label-cont'
            style={{
              overflow: "hidden",
              height: showInput ? "0px" : "40px",
              opacity: showInput ? 0 : 1,
            }}>
            <label htmlFor='todo' id='todo-input-label'>
              Add +
            </label>
          </div>
          <input
            type='text'
            style={{
              height: showInput ? "40px" : "0",
              border: showInput ? "2px solid black" : "0",
              opacity: showInput ? 1 : 0,
            }}
            id='todo-input'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <input
            style={{ cursor: input !== "" ? "pointer" : "auto" }}
            type='submit'
            value='Add ToDo!'
            disabled={input === ""}
            id='submit-input'
          />
        </div>
      </form>
      <div className='todo-item-cont'>
        {todos.map((todo) => (
          <div key={todo["_id"].$oid} className='todo-item'>
            <div>{todo.title}</div>
            <div
              className='delete-icon'
              onClick={(e) => handleDelete(e, todo["_id"].$oid)}>
              &#10003;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
