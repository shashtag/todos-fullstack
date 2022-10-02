import React, { createContext, useReducer } from "react";

export const UIContext = createContext();

const UIProvider = ({ children }) => {
  const initialState = {
    loading: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "loading":
        return { ...state, loading: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
