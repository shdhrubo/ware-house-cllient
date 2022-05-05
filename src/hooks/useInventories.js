import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
    fetch("http://localhost:5000/inventories")
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      })
      .catch((error) => {
        setError("load inventories failed");
      })
      .finally(() => setLoading(false));
  }, []);
  return [inventories, loading, error];
};
export default useInventories;
