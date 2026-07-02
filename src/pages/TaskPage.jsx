import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <h1 className="text-3xl text-white font-bold mb-4">Detalhes da tarefa</h1>
      <h2 className="text-2xl text-slate-100 mb-2">
        {title || "Título não informado"}
      </h2>
      <p className="text-slate-200">
        {description || "Descrição não informada"}
      </p>
    </div>
  );
}
export default TaskPage;
