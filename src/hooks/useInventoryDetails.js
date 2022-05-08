import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    fetch(`https://thawing-dawn-14943.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInventory(data);
      });
  }, []);
  return [inventory, setInventory];
};
export default useInventoryDetails;
