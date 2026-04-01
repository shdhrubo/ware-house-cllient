import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inventory.css";

const Inventory = ({ inventory }) => {
  const navigate = useNavigate();

  return (
    <div className="inv-card">
      <div className="inv-card-img-wrap">
        <img src={inventory.img} alt={inventory.name} />
        <div className="inv-card-overlay"></div>
        <span className="inv-card-badge">In Stock</span>
      </div>

      <div className="inv-card-body">
        <div className="inv-card-name">{inventory.name}</div>
        <div className="inv-card-desc">{inventory.description}</div>
        <div className="inv-card-divider"></div>
        <div className="inv-card-meta">
          <div className="inv-meta-row">
            <span className="inv-meta-label">Supplier</span>
            <span className="inv-meta-val">{inventory.supplier}</span>
          </div>
          <div className="inv-meta-row">
            <span className="inv-meta-label">Price</span>
            <span className="inv-meta-val inv-price">${inventory.price}</span>
          </div>
          <div className="inv-meta-row">
            <span className="inv-meta-label">Quantity</span>
            <span className="inv-qty-chip">{inventory.quantity} units</span>
          </div>
        </div>
      </div>

      <div className="inv-card-footer">
        <button
          className="btn-update"
          onClick={() => navigate(`/inventory/${inventory._id}`)}
        >
          <FontAwesomeIcon icon={faEdit} />
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default Inventory;
