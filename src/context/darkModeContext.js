import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const initialState = {
  darkmode: false,
};

export const DarkModeContext = createContext(initialState);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, initialState);

  return (
    <DarkModeContext.Provider value={{ darkmode: state.darkmode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
