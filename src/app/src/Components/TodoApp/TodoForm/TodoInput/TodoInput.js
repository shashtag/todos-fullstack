import React, { useEffect, useRef, useState } from "react";
import styles from "./TodoInput.module.css";

const TodoInput = ({ input, setInput }) => {
  const [showInput, setShowInput] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (
        !["todo-input-label", "todo-input-label-cont", "todo-input"].includes(
          e.target.id,
        )
      ) {
        setShowInput(false);
        ref.current.blur();
      }
    });

    return () => {};
  }, []);
  return (
    <div id={styles["input-container"]}>
      <div
        onClick={() => {
          ref.current.focus();
          setShowInput(true);
        }}
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
        onFocus={() => {
          ref.current.focus();
          setShowInput(true);
        }}
        onBlur={() => setShowInput(false)}
        type='text'
        style={{
          height: showInput ? "40px" : "0",
          border: showInput ? "2px solid black" : "0",
          opacity: showInput ? 1 : 0,
        }}
        id='todo-input'
        ref={ref}
        className={styles["todo-input"]}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default TodoInput;
