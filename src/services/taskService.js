export const getTasks = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};