import React, { useEffect, useState } from "react";
import { initialData } from "../initialData";

const useInit = () => {
  const [todos, setTodos] = useState(initialData);
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");
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
      } else if (e.target.id === "todo-input");
      else setShowInput(false);
    });

    return () => {};
  }, []);

  return { todos, setTodos, showInput, input, setInput, setShowInput };
};

export default useInit;
