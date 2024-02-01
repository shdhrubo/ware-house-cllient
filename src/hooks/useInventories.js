import { useEffect, useState } from "react";

const useInventories = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://thawing-dawn-14943.herokuapp.com/inventories`)
      .then((res) => res.json())
      .then((data) => {
        setInventories(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return [inventories, setInventories, loading];
};
export default useInventories;
