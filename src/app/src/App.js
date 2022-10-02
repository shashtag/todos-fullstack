import { useEffect, useState } from "react";
import "./App.css";
import { initialData } from "./initialData";

export function App() {
  const [todos, setTodos] = useState(initialData);
  const [showInput, setShowInput] = useState(false);

  const getData = async () => {
    try {
      const data = await fetch("http://localhost:8000/todos/").then(
        (response) => response.json(),
      );
      console.log(data);
      setTodos(data);
    } catch (e) {}
  };
  useEffect(() => {
    getData();
    document.body.addEventListener("click", (e) => {
      if (
        e.target.id === "todo-input-label" ||
        e.target.id === "todo-input-label-cont"
      ) {
        document.getElementById("todo-input").focus();
        setShowInput(true);
      } else if (e.target.id === "todo-input") console.log("dd");
      else setShowInput(false);
    });

    return () => {};
  }, []);

  return (
    <div className='container'>
      <h1>My ToDo List</h1>
      <form>
        <div id='input-container'>
          <div
            id='todo-input-label-cont'
            style={{
              overflow: "hidden",
              height: showInput ? "0px" : "40px",
              opacity: showInput ? 0 : 1,
            }}>
            <label htmlFor='todo' id='todo-input-label'>
              Add <PlusIcon />
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
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <button>Add ToDo!</button>
        </div>
      </form>

      {todos.map((todo) => (
        <div key={todo["_id"].$oid}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
