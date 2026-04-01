import {
  faEdit,
  faTrash,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "../../ManageInventory/ManageInventory.css";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const navigate = useNavigate();

  const navigateToInventoryDetaills = (id) => {
    navigate(`/inventory/${id}`);
  };

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://warehouse-9jcz.onrender.com/items?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        console.error("Failed to load user items", error);
      }
    };
    getItems();
  }, [user]);

  const deleteHandle = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to permanently delete this item?",
    );
    if (proceed) {
      const url = `https://warehouse-9jcz.onrender.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          const remaining = myItems.filter((inventory) => inventory._id !== id);
          setMyItems(remaining);
        });
    }
  };

  return (
    <div className="manage-page">
      <div
        className="manage-glow"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 60%)",
        }}
      ></div>
      <div className="manage-container">
        <div className="manage-header">
          <div>
            <span className="section-badge">
              <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: 6 }} />{" "}
              Personal Dashboard
            </span>
            <h2 className="section-title" style={{ fontSize: "2rem" }}>
              My Items
            </h2>
            <p
              className="section-subtitle mt-2 mb-0"
              style={{ maxWidth: "100%" }}
            >
              You are currently managing <b>{myItems.length}</b> items in your
              personal registry.
            </p>
          </div>
        </div>

        <div className="glass-table-container">
          <table className="glass-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myItems.map((myItem) => (
                <tr key={myItem._id}>
                  <td data-label="Item Name">
                    <div className="table-item-name">{myItem.name}</div>
                  </td>
                  <td data-label="Quantity">
                    <span
                      className={`table-qty-badge ${myItem.quantity === 0 ? "sold" : ""}`}
                    >
                      {myItem.quantity === 0
                        ? "Out of Stock"
                        : `${myItem.quantity} Units`}
                    </span>
                  </td>
                  <td data-label="Actions">
                    <div className="action-btns">
                      <button
                        onClick={() => navigateToInventoryDetaills(myItem._id)}
                        className="btn-icon-soft"
                        title="Update Quantity"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        onClick={() => deleteHandle(myItem._id)}
                        className="btn-icon-soft btn-icon-danger"
                        title="Delete Item"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {myItems.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-5">
                    <p className="text-muted mb-0">
                      You don't have any items registered yet.
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

export default MyItems;
