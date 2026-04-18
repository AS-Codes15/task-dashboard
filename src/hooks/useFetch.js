import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}