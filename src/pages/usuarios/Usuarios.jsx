import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getUsers, createUser, updateUser, deactivateUser, activateUser } from "../../services/users";
import UsuarioModal from "./UsuarioModal";
import { Pencil, Check, Ban } from "lucide-react";

export default function Usuarios() {
  const [loadingAction, setLoadingAction] = useState(null); // guarda el id del usuario en acción
  const { token } = useContext(AuthContext);
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers(token);
      setUsuarios(data);
    } catch {
      setError("❌ No se pudieron obtener los usuarios");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (token) fetchUsers();
  }, [token]);

  const handleToggleActive = async (id, active) => {
    const action = active ? "desactivar" : "activar";
    if (!confirm(`¿Seguro que deseas ${action} este usuario?`)) return;

    try {
      setLoadingAction(id); // 🔹 activa loading solo para este usuario
      if (active) {
        await deactivateUser(id, token);
      } else {
        await activateUser(id, token);
      }
      fetchUsers();
    } catch {
      setError(`❌ No se pudo ${action} el usuario`);
    } finally {
      setLoadingAction(null);
    }
  };


  const handleSave = async (userData) => {
  try {
    if (editUser) {
      await updateUser(editUser.id, userData, token);
    } else {
      await createUser(userData, token);
    }
    setShowModal(false);
    setEditUser(null);
    fetchUsers();
  } catch {
    setError("❌ No se pudo guardar el usuario");
  }
};


  return (
    <>
      
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Gestión de Usuarios</h1>
        <button
          onClick={() => { setEditUser(null); setShowModal(true); }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          ➕ Crear Usuario
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {loading ? (
        <p className="text-gray-500">Cargando usuarios...</p>
      ) : (
        <ul className="bg-white p-4 shadow rounded space-y-2">
          {usuarios.map((u) => (
            <li key={u.id} className="flex justify-between items-center border-b p-2">
              <div>
                <span className="font-semibold">{u.email}</span>
                <span className="ml-2 text-gray-500 text-sm">({u.role})</span>
                {!u.active && <span className="ml-2 text-red-500 text-xs">Desactivado</span>}
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => { setEditUser(u); setShowModal(true); }}
                  className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  <Pencil size={16} />
                  Editar
                </button>

                <button
                  onClick={() => handleToggleActive(u.id, u.active)}
                  disabled={loadingAction === u.id} // 🔹 deshabilitado mientras ejecuta
                  className={`flex items-center gap-1 px-3 py-1 rounded ${
                    u.active
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-green-600 text-white hover:bg-green-700"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {u.active ? (
                    <>
                      <Ban size={16} /> Desactivar
                    </>
                  ) : (
                    <>
                      <Check size={16} /> Activar
                    </>
                  )}
</button>
              </div>
            </li>
          ))}
        </ul>
      )}


      {showModal && (
        <UsuarioModal
          user={editUser}
          onClose={() => { setShowModal(false); setEditUser(null); }}
          onSave={handleSave}
        />
      )}
    </>
  );
}
