import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ disabled, text }) => {
  return (
    <input
      style={{ cursor: !disabled ? "pointer" : "auto" }}
      type='submit'
      value={text}
      disabled={disabled}
      id={styles["submit-input"]}
    />
  );
};

export default SubmitButton;
