import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//create initial state
const initialState = {
  transections: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create GlobalContext
export const GlobalContext = createContext(initialState);

//create Global Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Action
  const deleteTransection = (id) => {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id,
    });
  };

  const addTransection = (transection) => {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: transection,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTransection,
        addTransection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
