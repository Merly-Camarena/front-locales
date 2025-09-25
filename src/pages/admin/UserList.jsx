// src/pages/admin/UserList.jsx
import { Link } from "react-router-dom";

export default function UserList() {
  // Aquí después conectarás con tu backend
  const users = [
    { id: 1, email: "admin@ejemplo.com", role: "admin" },
    { id: 2, email: "editor@ejemplo.com", role: "editor" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <Link
        to="/usuarios/nuevo"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        + Registrar Usuario
      </Link>
      <table className="w-full border mt-4 bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
