export const getTasks = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=20"
  );
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
};