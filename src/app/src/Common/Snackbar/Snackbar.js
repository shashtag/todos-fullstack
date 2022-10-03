import React, { useContext, useEffect } from "react";
import styles from "./Snackbar.module.css";
import { AppContext } from "../../Context/AppContext";

const Snackbar = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "close_error" });
    }, 4000);

    return () => {};
  }, []);

  return (
    <div className={styles.snackbarCont}>
      <h2>Error</h2>
      <div>Could not perform the operation. Please Try again.</div>
    </div>
  );
};

export default Snackbar;
