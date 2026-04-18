import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Dashboard() {
  const { tasks = [], projects = [], loading, error } = useContext(AppContext);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card title="Projects" value={projects.length} />
          <Card title="Tasks" value={total} />
          <Card title="Completed" value={completed} />
          <Card title="Pending" value={pending} />
        </div>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
