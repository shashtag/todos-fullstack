import React, { useEffect, useState } from "react";
import api from "../Api/api";
import { initialData } from "../Data/initialData";

const useInit = () => {
  const [todos, setTodos] = useState(initialData);
  const [showInput, setShowInput] = useState(false);

  const getData = async () => {
    try {
      const data = await api("todos");
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

  return { todos, setTodos, showInput, setShowInput };
};

export default useInit;
