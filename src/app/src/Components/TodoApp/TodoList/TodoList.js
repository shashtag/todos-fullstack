import React from "react";
import api from "../../../Api/api";
import TodoListItem from "./TodoListItem/TodoListItem";

import styles from "./TodoList.module.css";

const Todos = ({ todos, clearState }) => {
  const handleDelete = async (e, id) => {
    try {
      const data = await api("todos", "DELETE", { id });
      clearState(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles["todo-item-cont"]}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo["_id"].$oid}
          title={todo.title}
          clearState={clearState}
          iconOnClick={(e) => handleDelete(e, todo["_id"].$oid)}
        />
      ))}
    </div>
  );
};

export default Todos;
