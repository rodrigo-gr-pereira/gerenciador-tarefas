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
        "Estudar programação para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description:
        "Estudar matemática para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
  ]);

  function onTasksClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR A TAREFA4
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //NAO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }

  return (
    <div className="w-screen h-screen bg-cyan-900 flex justify-center p-6">
      <div className="space-y-4 w-[500px] bg-slate-500 p-6 rounded-md">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador Tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTasksClick={onTasksClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
