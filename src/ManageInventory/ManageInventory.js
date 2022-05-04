import React from "react";
import useInventories from "../hooks/useInventories";

const ManageInventory = () => {
  const [inventories] = useInventories();
  return (
    <div>
      <h3 className="common-color">Inventories</h3>
      <div className="items">
        {inventories.map((inventory) => (
          <li>{inventory.name}</li>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
