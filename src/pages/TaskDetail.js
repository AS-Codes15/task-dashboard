import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useContext(AppContext);

  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return <div className="p-6">Task not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">

        <h1 className="text-2xl font-bold">{task.title}</h1>

        <p className="mt-2">
          Status: {task.completed ? "Completed" : "Pending"}
        </p>

        <p>Assigned To: {task.assignedTo || "N/A"}</p>

        <p>Due Date: {task.dueDate || "N/A"}</p>

      </div>
    </div>
  );
}