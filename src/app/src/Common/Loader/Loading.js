import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingCont}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loading;
