import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programaçao para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Estudar matemática ",
      description:
        "Estudar matemática para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bs-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador Tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
