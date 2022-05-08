import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className="inventory bg-white col-12 col-sm-12 col-md-6 col-lg-6 mx-auto "
      style={{ width: "300px" }}
    >
      <img
        className="p-1 pt-3"
        style={{ width: "250px", height: "180px" }}
        src={inventory.img}
        alt=""
      />
      <h6 className="common-color mt-2 text-start">{inventory.name}</h6>
      <div className="inventory-details text-start">
        <p>{inventory.description}</p>
        <p>Supplier: {inventory.supplier}</p>
        <p>Price: {inventory.price}</p>
        <h6>Quantity: {inventory.quantity}</h6>
      </div>
      <button
        onClick={() => navigateToInventoryDetaills(inventory._id)}
        className="btn mt-3 mb-3 rounded-pill "
      >
        Update <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Inventory;
