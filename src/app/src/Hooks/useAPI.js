import { useCallback, useContext } from "react";
import { AppContext } from "../Context/AppContext";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const useAPI = (url, method) => {
  const { dispatch } = useContext(AppContext);
  return useCallback(async (body, callback) => {
    dispatch({ type: "set_loading" });
    try {
      const data = await fetch(`http://localhost:8000/${url}/`, {
        method: method,
        headers,
        body: JSON.stringify(body),
      }).then((response) => response.json());
      dispatch({ type: "clear_state", payload: data });
      callback?.();
    } catch (e) {
      console.log(e.message);
      dispatch({ type: "clear_state_with_error", payload: e });
    }
  }, []);
};

export default useAPI;
