import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function TaskForm({ editTask, setEditTask }) {
  const { tasks, setTasks } = useContext(AppContext);

  const [form, setForm] = useState({
    title: "",
    assignedTo: "",
    dueDate: "",
    status: "Pending",
  });

  // PREFILL WHEN EDITING
  useEffect(() => {
    if (editTask) {
      setForm({
        title: editTask.title,
        assignedTo: editTask.assignedTo,
        dueDate: editTask.dueDate,
        status: editTask.completed ? "Completed" : "Pending",
      });
    }
  }, [editTask]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // VALIDATION
    if (!form.title.trim()) return alert("Title is required");
    if (!form.assignedTo) return alert("Assigned user required");
    if (!form.dueDate) return alert("Due date required");

    if (editTask) {
      // EDIT TASK
      setTasks(
        tasks.map((t) =>
          t.id === editTask.id
            ? {
                ...t,
                title: form.title,
                assignedTo: form.assignedTo,
                dueDate: form.dueDate,
                completed: form.status === "Completed",
              }
            : t,
        ),
      );
      setEditTask(null);
    } else {
      // ADD TASK
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: form.title,
          assignedTo: form.assignedTo,
          dueDate: form.dueDate,
          completed: form.status === "Completed",
        },
      ]);
    }

    // RESET FORM
    setForm({
      title: "",
      assignedTo: "",
      dueDate: "",
      status: "Pending",
    });
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="font-bold mb-3">{editTask ? "Edit Task" : "Add Task"}</h2>

      {/* TITLE */}
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 w-full mb-2"
      />

      {/* ASSIGNED USER (DROPDOWN) */}
      <select
        name="assignedTo"
        value={form.assignedTo}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option value="">Select User</option>
        <option>John</option>
        <option>Emma</option>
        <option>Alex</option>
      </select>

      {/* DUE DATE */}
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      {/* STATUS */}
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option>Pending</option>
        <option>Completed</option>
      </select>

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2"
      >
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </div>
  );
}
