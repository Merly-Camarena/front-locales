export default function LocalForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registrar Local</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del Local"
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Dirección"
          className="w-full border p-2 rounded"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}
