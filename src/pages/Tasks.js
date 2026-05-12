import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TaskForm from "../components/TaskForm";
import { Link } from "react-router-dom";

export default function Tasks() {
  const { tasks = [], setTasks, loading, error } = useContext(AppContext);

  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTasks = tasks.filter((t) => {
    const matchSearch = t.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All"
        ? true
        : filter === "Completed"
        ? t.completed
        : !t.completed;

    return matchSearch && matchFilter;
  });

  const start = (currentPage - 1) * tasksPerPage;

  const paginatedTasks = filteredTasks.slice(
    start,
    start + tasksPerPage
  );

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        <TaskForm editTask={editTask} setEditTask={setEditTask} />

        {/* SEARCH */}
        <input
          className="border p-2 w-full mt-4 rounded"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        {/* FILTER */}
        <select
          className="border p-2 mt-3 rounded"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        {/* TASK LIST */}
        <div className="mt-4 space-y-3">
          {paginatedTasks.map((task) => (
            <div key={task.id} className="bg-white p-4 shadow rounded">

              <Link to={`/tasks/${task.id}`}>
                <h2 className="font-semibold hover:underline">
                  {task.title}
                </h2>
              </Link>

              <p className="text-sm text-gray-600">
                Assigned: {task.assignedTo || "N/A"}
              </p>

              <p className="text-sm text-gray-600">
                Due: {task.dueDate || "N/A"}
              </p>

              <p className="text-sm mt-1">
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

              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Toggle
                </button>

                <button
                  onClick={() => setEditTask(task)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {paginatedTasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No tasks found
          </p>
        )}

        {/* PAGINATION */}
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-1">
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}