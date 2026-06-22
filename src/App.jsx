import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-red-500">Gerenciador Tarefas</h1>
      <AddTasks />
      <Tasks />
    </>
  );
}

export default App;
