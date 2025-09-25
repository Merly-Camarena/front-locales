import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Bienvenido {user?.email}</h1>
      <p className="mb-4">Rol: {user?.role}</p>

      <div className="flex flex-col gap-2">
        {user?.role === "admin" && (
          <Link to="/create-user" className="bg-blue-500 text-white px-4 py-2 rounded">
            Crear Usuario
          </Link>
        )}
        <Link to="/manuals" className="bg-green-500 text-white px-4 py-2 rounded">
          Ver Manuales
        </Link>
        <Link to="/create-manual" className="bg-purple-500 text-white px-4 py-2 rounded">
          Crear Manual
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
