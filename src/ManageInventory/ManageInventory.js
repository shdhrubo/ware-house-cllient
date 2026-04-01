import {
  faEdit,
  faTrash,
  faBoxOpen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInventories from "../hooks/useInventories";
import "./ManageInventory.css";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [inventories, setInventories] = useInventories();

  const navigateToInventoryDetaills = (id) => {
    navigate(`/inventory/${id}`);
  };

  const deleteHandle = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this specific item?",
    );
    if (proceed) {
      const url = `https://warehouse-9jcz.onrender.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id,
          );
          setInventories(remaining);
        });
    }
  };

  return (
    <div className="manage-page">
      <div className="manage-glow"></div>
      <div className="manage-container">
        <div className="manage-header">
          <div>
            <span className="section-badge">
              <FontAwesomeIcon icon={faBoxOpen} style={{ marginRight: 6 }} />{" "}
              Administration
            </span>
            <h2 className="section-title" style={{ fontSize: "2rem" }}>
              All Inventories
            </h2>
            <p
              className="section-subtitle mt-2 mb-0"
              style={{ maxWidth: "100%" }}
            >
              Manage all globally available inventory tracking
            </p>
          </div>

          <Link
            to="/additems"
            className="btn-teal-custom"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faPlus} /> Add New Item
          </Link>
        </div>

        <div className="glass-table-container">
          <table className="glass-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Supplier</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventories.map((inventory) => (
                <tr key={inventory._id}>
                  <td data-label="Item Name">
                    <div className="table-item-name">{inventory.name}</div>
                  </td>
                  <td data-label="Supplier">{inventory.supplier || "Unknown"}</td>
                  <td data-label="Quantity">
                    <span
                      className={`table-qty-badge ${inventory.quantity === 0 ? "sold" : ""}`}
                    >
                      {inventory.quantity === 0
                        ? "Out of Stock"
                        : `${inventory.quantity} Units`}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-btns">
                      <button
                        onClick={() =>
                          navigateToInventoryDetaills(inventory._id)
                        }
                        className="btn-icon-soft"
                        title="Update Quantity"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => deleteHandle(inventory._id)}
                        className="btn-icon-soft btn-icon-danger"
                        title="Delete Item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {inventories.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-5">
                    <p className="text-muted mb-0">
                      No items available. Add some items above.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
