import React from "react";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories] = useInventories();
  const slicedInventories = inventories.slice(0, 6);
  console.log(slicedInventories.length);
  return (
    <div>
      <h4 className="common-color mb-3">Inventory Items</h4>
      <div className="container ">
        <div className=" row gy-4 mx-auto">
          {slicedInventories.map((inventory) => (
            <Inventory key={inventory.id} inventory={inventory}></Inventory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventories;
