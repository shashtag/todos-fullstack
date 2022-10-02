import React from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ onInputChange, showInput, input }) => {
  return (
    <div id={styles["input-container"]}>
      <div
        id='todo-input-label-cont'
        className={styles["todo-input-label-cont"]}
        style={{
          overflow: "hidden",
          height: showInput ? "0px" : "40px",
          opacity: showInput ? 0 : 1,
        }}>
        <label
          htmlFor='todo'
          id='todo-input-label'
          className={styles["todo-input-label"]}>
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
        className={styles["todo-input"]}
        value={input}
        onChange={onInputChange}
      />
    </div>
  );
};

export default TodoInput;
