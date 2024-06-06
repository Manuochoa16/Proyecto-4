"use client";

import { userSession } from "@/types";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  userData: userSession | null;
  setUserData: (userData: userSession | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  userData: null,
  setUserData: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<userSession | null>(null);

  useEffect(() => {
    if (userData) {
      localStorage.setItem(
        "userSession",
        JSON.stringify({ token: userData.token, userData: userData })
      );
    }
  }, [userData]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, []);

  const logout = () => {
    alert("¡Hasta la próxima!");
    setUserData(null);
    localStorage.removeItem("userSession");
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
