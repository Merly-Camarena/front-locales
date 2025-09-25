// src/pages/admin/UserForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("editor");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo usuario:", { email, role, password });
    // Aquí llamas a tu backend con fetch o axios
    navigate("/usuarios");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-3 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="lector">Lector</option>
        </select>
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border p-2 mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}
