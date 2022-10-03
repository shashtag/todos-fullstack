import React from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ title, iconOnClick }) => {
  return (
    <div className={styles["todo-item"]}>
      <div>{title}</div>
      <div
        className={styles["delete-icon"]}
        onClick={iconOnClick}
        onKeyDown={(e) => {
          if (e.key === "Enter") iconOnClick();
        }}
        tabIndex='0'
        role='button'>
        &#10003;
      </div>
    </div>
  );
};

export default TodoListItem;
