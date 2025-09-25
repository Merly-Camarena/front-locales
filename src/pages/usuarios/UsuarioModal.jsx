import { useState } from "react";

export default function UsuarioModal({ user, onClose, onSave }) {
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "viewer");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ email, role, ...(password ? { password } : {}) });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {user ? "Editar Usuario" : "Crear Usuario"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={user ? "Nueva contraseña (opcional)" : "Contraseña"}
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={!user}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
            <option value="viewer">Lector</option>
          </select>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
