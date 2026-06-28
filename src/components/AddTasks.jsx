import { useState } from "react";

function AddTasks({ onAddTalksSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //console.log({ title, description });

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da Tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da Tarefa"
        className="border border-slate-400 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar se o titulo e a descrição estão preenchidos .trim() ->Espaço vazio
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição estão preenchidos");
          }
          onAddTalksSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
