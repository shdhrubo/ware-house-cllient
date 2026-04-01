import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useInventoryDetails from "../../hooks/useInventoryDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faTruckArrowRight,
  faBoxesStacked,
  faArrowLeft,
  faHashtag,
  faBuilding,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./inventoryDetails.css";

const InventoryDetails = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useInventoryDetails(id);
  const [updateQuantity, setUpdateQuantity] = useState("");

  const handleUpdateItems = (type, event) => {
    if (event) {
      event.preventDefault();
    }

    if (inventory.quantity === 0 && !type) {
      return alert("Item already sold out");
    }

    let quantity;
    if (type) {
      if (!updateQuantity || parseInt(updateQuantity) <= 0) return;
      quantity = parseInt(updateQuantity) + parseInt(inventory?.quantity || 0);
    } else {
      quantity = parseInt(inventory?.quantity || 1) - 1;
    }

    const updatedQuantity = { quantity };

    const url = `https://warehouse-9jcz.onrender.com/inventory/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then(() => {
        setInventory({ ...inventory, quantity });
        if (event) {
          event.target.reset();
          setUpdateQuantity("");
        }
      });
  };

  if (!inventory) {
    return (
      <div className="product-page">
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
        </div>
      </div>
    );
  }

  const isSoldOut = inventory.quantity === 0;

  return (
    <div className="product-page">
      <div className="product-glow"></div>
      <div className="container-custom">
        <Link to="/manageinventories" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Administration
        </Link>

        <div className="product-grid">
          {/* Left Column - Product Profile */}
          <div className="product-main glass-card">
            <div className="product-img-wrapper">
              <img src={inventory.img} alt={inventory.name} />
              <div className="price-tag">${inventory.price}</div>
            </div>

            <div className="product-info">
              <h2 className="product-name">{inventory.name}</h2>
              <p className="product-id text-muted">ID: {inventory._id}</p>

              <div className="product-meta">
                <div className="meta-item">
                  <span className="meta-icon">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  <div>
                    <span className="meta-label">Supplier</span>
                    <strong className="meta-value">{inventory.supplier}</strong>
                  </div>
                </div>
              </div>

              <div className="product-desc">
                <h4 className="desc-title">Description</h4>
                <p>{inventory.description}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stock Operations */}
          <div className="product-sidebar">
            <div className="glass-card panel-card">
              <h3 className="panel-title">Stock Logistics</h3>

              <div className="stock-status">
                <div className="stock-status-header">
                  <span>Current Quantity</span>
                  {isSoldOut ? (
                    <span className="stock-badge danger">
                      <FontAwesomeIcon icon={faExclamationCircle} /> Sold Out
                    </span>
                  ) : (
                    <span className="stock-badge success">In Stock</span>
                  )}
                </div>
                <div className="stock-count">
                  {inventory.quantity}{" "}
                  <span
                    className="text-muted"
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                  >
                    Units
                  </span>
                </div>
              </div>

              <div className="operation-section">
                <button
                  className={`btn-primary-custom w-100 justify-content-center ${isSoldOut ? "disabled-btn" : ""}`}
                  onClick={() => handleUpdateItems(false)}
                  disabled={isSoldOut}
                >
                  <FontAwesomeIcon
                    icon={faTruckArrowRight}
                    style={{ marginRight: 8 }}
                  />
                  Single Unit Delivered
                </button>
                <p className="operation-note text-center">
                  Removes 1 unit from current inventory stock.
                </p>
              </div>

              <div className="stock-divider"></div>

              <div className="operation-section">
                <h4 className="operation-title">Restock Inventory</h4>
                <form
                  onSubmit={(event) => handleUpdateItems(true, event)}
                  className="restock-form"
                >
                  <div className="auth-input-group">
                    <span className="input-icon">
                      <FontAwesomeIcon icon={faBoxesStacked} />
                    </span>
                    <input
                      type="number"
                      name="increaseItems"
                      placeholder="Amount to restock"
                      min="1"
                      required
                      className="auth-input"
                      value={updateQuantity}
                      onChange={(e) => setUpdateQuantity(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-teal-custom w-100 justify-content-center mt-3"
                  >
                    Store Quantity
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
