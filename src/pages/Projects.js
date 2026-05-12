import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Projects() {
  const { projects = [], loading, error } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  if (loading) {
    return <div className="p-6 text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500 text-center">{error}</div>;
  }

  const filteredProjects = projects
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      filter === "All" ? true : p.status === filter
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Search */}
      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select
        className="border p-2 mb-4 rounded"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Projects List */}
      <div className="space-y-3">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{p.name}</h2>

            <p className="text-gray-600 text-sm mt-1">
              {p.description}
            </p>

            <p className="text-sm mt-2">
              Tasks: {p.tasks}
            </p>

            <p className="text-sm">
              Status:{" "}
              <span
                className={
                  p.status === "Completed"
                    ? "text-green-600 font-medium"
                    : "text-blue-600 font-medium"
                }
              >
                {p.status}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No projects found
        </p>
      )}
    </div>
  );
}