export default function ManualForm() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registrar Manual</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Título del Manual"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Descripción"
          className="w-full border p-2 rounded"
        ></textarea>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Guardar
        </button>
      </form>
    </div>
  );
}
