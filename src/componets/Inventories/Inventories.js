import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [inventories] = useInventories();
  const slicedInventories = inventories.slice(0, 6);

  return (
    <div >
      <h4 className="common-color mb-3">Inventory Items</h4>
      <div className="container ">
        <div className=" row gy-5 mx-auto">
          {slicedInventories.map((inventory) => (
            <Inventory key={inventory.id} inventory={inventory}></Inventory>
          ))}
        </div>
        <Link to="/manageinventories">
          <button className="btn mt-3">Manage Inventories</button>
        </Link>
      </div>
    </div>
  );
};

export default Inventories;
