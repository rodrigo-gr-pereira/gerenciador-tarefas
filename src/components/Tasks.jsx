import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = ({ tasks, onTasksClick, onDeleteClick }) => {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    });
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTasksClick(task.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}
          >
            {task.title}
            {/*{task.isCompleted ? "COMPLETED" : "INCOMPLETE"}*/}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteClick && onDeleteClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
