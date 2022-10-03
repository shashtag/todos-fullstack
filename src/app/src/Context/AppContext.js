import React, { createContext, useReducer } from "react";
import { initialData } from "../Data/initialData";

export const AppContext = createContext();

const initialState = {
  loading: false,
  todos: initialData,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_loading":
      return { ...state, loading: true };
    case "set_todos":
      return { ...state, todos: action.payload };
    case "clear_state":
      return { ...state, todos: action.payload, loading: false };
    case "clear_state_with_error":
      return { ...state, loading: false, error: true };
    case "close_error":
      return { ...state, error: false };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
