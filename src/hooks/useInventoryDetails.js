import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  return [inventory];
};
export default useInventoryDetails;
