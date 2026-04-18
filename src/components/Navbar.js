import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      
      {/* Title */}
      <h1 className="font-bold text-xl">Task Dashboard</h1>

      {/* Links */}
      <div className="flex gap-4">
        <Link className="hover:underline" to="/dashboard">
          Dashboard
        </Link>

        <Link className="hover:underline" to="/projects">
          Projects
        </Link>

        <Link className="hover:underline" to="/tasks">
          Tasks
        </Link>
      </div>
    </nav>
  );
}