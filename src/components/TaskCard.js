export default function TaskCard({ task, onToggle }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded mb-3 hover:shadow-md transition">
      
      {/* Task Title */}
      <span
        className={`text-gray-800 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </span>

      {/* Button */}
      <button
        onClick={() => onToggle(task.id)}
        className={`px-3 py-1 rounded text-white transition ${
          task.completed
            ? "bg-gray-500 hover:bg-gray-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {task.completed ? "Undo" : "Done"}
      </button>
    </div>
  );
}