import React from "react";
import { useState, useCallback } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  role: "INSTITUTIE",
  name: "",
  login: (userIsLogged) => {},
  logout: () => {},
});

const retrieveUserStoredToken = () => {
  const storedUserIsLogged = localStorage.getItem("userIsLogged");
  const storedRole = localStorage.getItem("role");
  const storedName = localStorage.getItem("name");
  return {
    userIsLogged: storedUserIsLogged,
    role: storedRole,
    name: storedName,
  };
};
export const AuthContextProvider = (props) => {
  const userData = retrieveUserStoredToken();
  let initialUserIsLogged;
  let initialRole;
  let initialName;
  if (userData) {
    initialUserIsLogged = userData.userIsLogged;
    initialRole = userData.role;
    initialName = userData.name;
  }

  const [userIsLogged, setUserLoggedIn] = useState(initialUserIsLogged);
  const [role, setRole] = useState(initialRole);
  const [name, setName] = useState(initialName);
  const userIsLoggedIn = userIsLogged;
  const logoutHandler = useCallback(() => {
    setUserLoggedIn(false);
    setRole(null);
    setName(null);
    localStorage.removeItem("userIsLogged");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }, []);
  const loginHandler = (role, name) => {
    setUserLoggedIn(userIsLogged);
    setRole(role);
    setName(name);
    localStorage.setItem("userIsLogged", userIsLogged);
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
  };

  const contextValue = {
    role: role,
    name: name,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
