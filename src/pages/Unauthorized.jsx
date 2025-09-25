export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-600">🚫 Acceso denegado</h1>
      <p className="mt-2">No tienes permisos para ver esta página.</p>
    </div>
  );
}
