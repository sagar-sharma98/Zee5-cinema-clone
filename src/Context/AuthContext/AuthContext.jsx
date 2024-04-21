import { createContext,useReducer } from "react";
import reducer from "./Reducer";


export const AuthContext = createContext();

const initialState={
  error: false,
  auth: false,
  alert: false,
  login: false,
}

const AuthContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AuthContext.Provider value={{state, dispatch}}>{children}</AuthContext.Provider>;
};

export {AuthContextProvider};
