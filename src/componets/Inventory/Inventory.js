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
      <div >
        <img
          className="p-1"
          style={{ width: "250px", height: "150px" }}
          src={inventory.img}
          alt=""
        />
        <h6 className="common-color mt-2">{inventory.name}</h6>
        <div className="inventory-details ">
        <p>{inventory.description}</p>
        <p>Supplier: {inventory.supplier}</p>
        <p>Price: {inventory.price}</p>
        </div>
        <h6>Quantity: {inventory.quantity}</h6>
        <button
          onClick={() => navigateToInventoryDetaills(inventory._id)}
          className="btn mb-2  rounded-pill"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Inventory;
