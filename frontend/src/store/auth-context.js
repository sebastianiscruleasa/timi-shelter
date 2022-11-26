import React from "react";
import { useState, useCallback } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  role: "INSTITUTIE",
  name: "",
  login: (token) => {},
  logout: () => {},
});

const retrieveUserStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedRole = localStorage.getItem("role");
  const storedName = localStorage.getItem("name");
  return {
    token: storedToken,
    role: storedRole,
    name: storedName,
  };
};
export const AuthContextProvider = (props) => {
  const userData = retrieveUserStoredToken();
  let initialToken;
  let initialRole;
  let initialName;
  if (userData) {
    initialToken = userData.token;
    initialRole = userData.role;
    initialName = userData.name;
  }

  const [token, setToken] = useState(initialToken);
  const [role, setRole] = useState(initialRole);
  const [name, setName] = useState(initialName);
  const userIsLoggedIn = !!token;
  const logoutHandler = useCallback(() => {
    setToken(null);
    setRole(null);
    setName(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
  }, []);
  const loginHandler = (token, role, name) => {
    setToken(token);
    setRole(role);
    setName(name);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
  };

  const contextValue = {
    token: token,
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
