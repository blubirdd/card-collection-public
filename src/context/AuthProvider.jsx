import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem('unlockToken');
    if (storedToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const unlock = () => {
    setIsAuthenticated(true);
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, unlock }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
