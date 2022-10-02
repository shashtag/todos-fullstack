import React from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ title, iconOnClick }) => {
  return (
    <div className={styles["todo-item"]}>
      <div>{title}</div>
      <div className={styles["delete-icon"]} onClick={iconOnClick}>
        &#10003;
      </div>
    </div>
  );
};

export default TodoListItem;
