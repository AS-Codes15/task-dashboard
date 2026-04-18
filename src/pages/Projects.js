import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Projects() {
  const { projects, loading, error } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500 text-center">
        {error}
      </div>
    );
  }

  const filtered = projects
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      filter === "All" ? true : p.status === filter
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* SEARCH */}
      <input
        className="border p-2 w-full mb-3"
        placeholder="Search projects"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* FILTER */}
      <select
        className="border p-2 mb-4"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>

      {/* PROJECT LIST */}
      <div className="space-y-3">

        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 shadow rounded hover:shadow-md transition"
          >
            <h2 className="font-bold text-lg">{p.name}</h2>

            <p className="text-gray-600 text-sm mt-1">
              {p.description}
            </p>

            <p className="mt-2 text-sm">
              Tasks: {p.tasks}
            </p>

            <p className="text-sm">
              Status:{" "}
              <span
                className={
                  p.status === "Completed"
                    ? "text-green-600 font-semibold"
                    : "text-blue-600 font-semibold"
                }
              >
                {p.status}
              </span>
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}