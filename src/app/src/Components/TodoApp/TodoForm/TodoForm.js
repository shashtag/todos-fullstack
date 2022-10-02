import React, { useState } from "react";
import api from "../../../Api/api";
import SubmitButton from "./SubmitButton/SubmitButton";
import TodoInput from "./TodoInput/TodoInput";

const TodoForm = ({ clearState, showInput }) => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api("todos", "POST", { title: input });
      clearState(data);
      setInput("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoInput
        onInputChange={(e) => setInput(e.target.value)}
        showInput={showInput}
        input={input}
      />
      <SubmitButton disabled={input === ""} text={"Add ToDo!"} />
    </form>
  );
};

export default TodoForm;
