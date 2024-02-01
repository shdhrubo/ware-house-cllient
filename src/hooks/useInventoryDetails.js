import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`https://warehouse-9jcz.onrender.com/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });
  }, []);
  return [inventory, setInventory];
};
export default useInventoryDetails;
