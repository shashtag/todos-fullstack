import React, { useContext } from "react";
import TodoListItem from "./TodoListItem/TodoListItem";

import styles from "./TodoList.module.css";
import { AppContext } from "../../../Context/AppContext";
import useAPI from "../../../Hooks/useAPI";

const Todos = () => {
  const { state } = useContext(AppContext);
  const deleteTodo = useAPI("todos", "DELETE");
  return (
    <div className={styles["todo-item-cont"]}>
      {state.todos.map((todo) => (
        <TodoListItem
          key={todo["_id"].$oid}
          title={todo.title}
          iconOnClick={() => deleteTodo({ id: todo["_id"].$oid })}
        />
      ))}
    </div>
  );
};

export default Todos;
