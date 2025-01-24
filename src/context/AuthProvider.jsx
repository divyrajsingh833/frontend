import React, { createContext, useState, useContext, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
// Create Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null); // Stores the current logged-in user

  // Login function
  const login = async(token) => {
    try { 
      const token = JSON.parse(localStorage.getItem("token"))

      if(!token){ return setUser(null)}
      
      const decoded = jwtDecode(token)
      if(decoded) {     
        setUser(decoded);// Set the user data when logged in
      }
    }
     catch (err) {
      console.log(err)
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);  // Reset user data when logged out
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
