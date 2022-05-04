import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Inventory.css";
const Inventory = (props) => {
  const id = useParams();
  const navigate = useNavigate();
  const { inventory } = props;
  const navigateToInventoryDetaills = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div
      className="inventory  col-12 col-sm-12 col-md-6 col-lg-6 mx-auto "
      style={{ width: "300px" }}
    >
      <div className="inventory-details">
        <h4 className="common-color mt-2">{inventory.name}</h4>
        <img
          style={{ width: "250px", height: "150px" }}
          src={inventory.img}
          alt=""
        />
        <p>{inventory.description}</p>
        <p>Supplier: {inventory.supplier}</p>
        <p>Price: {inventory.price}</p>
        <p>Quantity: {inventory.quantity}</p>
        <button
          onClick={() => navigateToInventoryDetaills(inventory._id)}
          className="btn mb-2"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Inventory;
