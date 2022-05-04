import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory] = useInventoryDetails(id);
  return (
    <div>
      <h4 className="common-color">{inventory.name} </h4>
    </div>
  );
};

export default InventoryDetails;
