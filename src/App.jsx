import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import Home from "./pages/Home";
import Layout from "./components/Layout";
// Usuarios
import Usuarios from "./pages/usuarios/Usuarios";
// Locales
import LocalesList from "./pages/Locales/LocalesList";
import LocalForm from "./pages/Locales/LocalForm";
// Manuales
import ManualForm from "./pages/Manuales/ManualForm";
import ManualesList from "./pages/Manuales/ManualesList";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Privadas */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <Home />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <PrivateRoute roles={["admin"]}>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/usuarios"
            element={
              <PrivateRoute roles={["admin"]}>
                <Layout>
                  <Usuarios />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/locales"
            element={
              <PrivateRoute roles={["admin", "editor"]}>
                <Layout>
                  <LocalesList />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/locales/nuevo"
            element={
              <PrivateRoute roles={["admin", "editor"]}>
                <Layout>
                  <LocalForm />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/manuales"
            element={
              <PrivateRoute roles={["admin", "editor", "viewer"]}>
                <Layout>
                  <ManualesList />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/manuales/nuevo"
            element={
              <PrivateRoute roles={["admin", "editor"]}>
                <Layout>
                  <ManualForm />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
