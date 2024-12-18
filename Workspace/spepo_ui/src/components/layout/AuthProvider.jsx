import { createContext, useContext, useState } from "react";
import { getAPI } from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  const svClass = "AutUserService";
  const svName = "SVGet"

  const loginAsAdmin = () => {
  
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
  };

  const loginAsUser = () => {
    
      setIsAdmin(false);
      localStorage.setItem("isAdmin", "false");
     
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin"); 
  }

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, loginAsUser,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
