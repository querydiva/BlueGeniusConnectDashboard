import React, { createContext, useContext, useState, useEffect } from "react";
import Userfront from "@userfront/core";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    setUsername(Userfront.user.username || null); // Set username from Userfront user data
  }, []);

  return (
    <AuthContext.Provider value={{ username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); // Export useAuth for accessing the context
