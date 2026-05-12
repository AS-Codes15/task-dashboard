import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks = [] } = useContext(AppContext);

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Task not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 shadow rounded">

        <h1 className="text-2xl font-bold text-gray-800">
          {task.title}
        </h1>

        <p className="mt-3">
          Status:{" "}
          <span
            className={
              task.completed
                ? "text-green-600 font-medium"
                : "text-red-500 font-medium"
            }
          >
            {task.completed ? "Completed" : "Pending"}
          </span>
        </p>

        <p className="mt-2 text-gray-700">
          Assigned To: {task.assignedTo || "N/A"}
        </p>

        <p className="text-gray-700">
          Due Date: {task.dueDate || "N/A"}
        </p>

      </div>
    </div>
  );
}