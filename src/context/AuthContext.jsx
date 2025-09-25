import { createContext, useState, useEffect } from "react";
import { login } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const getSavedUser = () => {
    try {
      const stored = localStorage.getItem("user");
      if(!stored || stored === "undefined") return null;

      return JSON.parse(stored);
    } catch (err) {
      console.error("❌ Error al parsear user:", err);
      return null;
    }
  };

  const [user, setUser] = useState(getSavedUser);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token && !user) {
      const savedUser = getSavedUser();
      if (savedUser) setUser(savedUser);
    }
  }, [token, user]);

  const handleLogin = async (email, password) => {
  try {
    const data = await login(email, password);
    console.log("✅ Datos login:", data); // 👀
    setToken(data.token);
    setUser(data.user);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return true;
  } catch (err) {
    console.error("❌ Error en login:", err.response?.data || err.message);
    return false;
  }
};


  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
