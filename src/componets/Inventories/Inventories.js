import React from "react";
import { Link } from "react-router-dom";
import useInventories from "../../hooks/useInventories";
import Inventory from "../Inventory/Inventory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import "./Inventories.css";

const Inventories = () => {
  const [inventories, , loading] = useInventories();
  const slicedInventories = inventories.slice(0, 6);

  return (
    <section className="inventories-section section-padding">
      <div className="container-custom">
        <div className="inventories-header">
          <div className="inventories-header-left">
            <span className="section-badge"><FontAwesomeIcon icon={faBoxOpen} style={{ marginRight: 6 }} /> Live Inventory</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Stock Items</span>
            </h2>
            <p className="section-subtitle" style={{ maxWidth: 460 }}>
              Browse your current inventory at a glance. Click any item to update stock levels instantly.
            </p>
          </div>
          <Link to="/manageinventories">
            <button className="btn-secondary-custom">View All Items →</button>
          </Link>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Loading inventory…</span>
            </div>
          </div>
        ) : (
          <div className="inventories-grid">
            {slicedInventories.map((inventory) => (
              <Inventory key={inventory._id} inventory={inventory} />
            ))}
          </div>
        )}

        <div className="inventories-footer">
          <Link to="/manageinventories">
            <button className="btn-primary-custom">
              Manage All Inventories →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Inventories;
