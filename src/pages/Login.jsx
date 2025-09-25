import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const success = await handleLogin(email, password);

    if (success) {
      alert("✅ Login exitoso");
      navigate("/");
    } else {
      alert("❌ Error al iniciar sesión");
    }
  };

  return (
  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
    <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-96">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Bienvenido 👋
      </h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            placeholder="tuemail@ejemplo.com"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-all duration-200"
        >
          Ingresar
        </button>
      </form>
    </div>
  </div>
);

}
