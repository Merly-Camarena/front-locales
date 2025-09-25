// src/components/Navbar.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { menuOptions } from "../config/menuOptions";

export default function Navbar() {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null; // no mostrar si no hay usuario

  const role = user.role || "viewer"; // por defecto lector
  const options = menuOptions[role] || [];

  const logout = () => {
    handleLogout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <div className="flex space-x-4">
        {options.map((opt) => (
          <Link
            key={opt.path}
            to={opt.path}
            className="hover:bg-blue-700 px-3 py-2 rounded transition"
          >
            {opt.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm italic">
          {user.email} ({role})
        </span>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-3 py-2 rounded transition"
        >
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
