import React, { useContext, useState } from "react";
import SubmitButton from "./SubmitButton/SubmitButton";
import TodoInput from "./TodoInput/TodoInput";
import useAPI from "../../../Hooks/useAPI";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const postTodo = useAPI("todos", "POST");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postTodo({ title: input }, () => setInput(""));
      }}>
      <TodoInput input={input} setInput={setInput} />
      <SubmitButton disabled={input === ""} text={"Add ToDo!"} />
    </form>
  );
};

export default TodoForm;
