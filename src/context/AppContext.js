import { createContext, useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // TASK STATE (LOCALSTORAGE INIT)
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [projects] = useState([
    {
      id: 1,
      name: "AI Career Platform",
      description:
        "An AI-based career coaching system with resume and interview tools",
      status: "Active",
      tasks: 5,
    },
    {
      id: 2,
      name: "E-commerce App",
      description: "Online shopping platform with cart and payment system",
      status: "Completed",
      tasks: 8,
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // FETCH TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const savedTasks = localStorage.getItem("tasks");

        // Use localStorage first
        if (savedTasks && JSON.parse(savedTasks).length > 0) {
          setTasks(JSON.parse(savedTasks));
          setLoading(false);
          return;
        }

        // Otherwise fetch API
        const data = await getTasks();

        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          completed: item.completed,
          assignedTo: "User",
          dueDate: "2026-05-01",
        }));

        setTasks(formatted);
      } catch (err) {
        setError("Failed to fetch tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider
      value={{ tasks, setTasks, projects, loading, error }}
    >
      {children}
    </AppContext.Provider>
  );
}