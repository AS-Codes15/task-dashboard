import { createContext, useState, useEffect } from "react";
import { getTasks } from "../services/taskService";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  // LOCALSTORAGE ENABLED TASK STATE
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

  // FETCH TASKS FROM API
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    // 1. Use localStorage if available
    if (savedTasks && JSON.parse(savedTasks).length > 0) {
      setTasks(JSON.parse(savedTasks));
      setLoading(false);
      return;
    }

    // 2. Otherwise fetch from API
    getTasks()
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          title: item.title,
          completed: item.completed,
          assignedTo: "User",
          dueDate: "2026-05-01",
        }));

        setTasks(formatted);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch tasks");
        setLoading(false);
      });
  }, []);

  // SAVE TO LOCALSTORAGE WHEN TASKS CHANGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <AppContext.Provider value={{ tasks, setTasks, projects, loading, error }}>
      {children}
    </AppContext.Provider>
  );
}
