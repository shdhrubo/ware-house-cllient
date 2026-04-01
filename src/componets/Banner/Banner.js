import { faArrowRight, faBoxesStacked, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../images/header.png";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="hero-section">
      {/* Backgrounds */}
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="hero-content">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Next-Gen Inventory Management
          </div>

          <h1 className="hero-title">
            Manage Your <span className="highlight">Warehouse</span>{" "}
            with Precision
          </h1>

          <p className="hero-description">
            EIMS gives you full control over your inventory — track stock levels,
            manage suppliers, and make data-driven decisions in real time.
          </p>

          <div className="hero-actions">
            <Link to="/manageinventories">
              <button className="btn-primary-custom">
                Get Started <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
            <Link to="/about">
              <button className="btn-secondary-custom">
                Learn More
              </button>
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <div className="hero-stat-num">5K<span>+</span></div>
              <div className="hero-stat-label">Active Users</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">99<span>%</span></div>
              <div className="hero-stat-label">Uptime</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">1M<span>+</span></div>
              <div className="hero-stat-label">Items Tracked</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img className="hero-img" src={headerImg} alt="Warehouse Management" />
            <div className="hero-image-overlay"></div>
          </div>

          {/* Floating cards */}
          <div className="hero-float-card hero-float-card-1">
            <div className="float-icon float-icon-green">
              <FontAwesomeIcon icon={faBoxesStacked} style={{ color: "#00d4b1" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Total Stock</div>
              <div style={{ fontWeight: 700, color: "var(--secondary)" }}>12,480 Items</div>
            </div>
          </div>

          <div className="hero-float-card hero-float-card-2">
            <div className="float-icon float-icon-purple">
              <FontAwesomeIcon icon={faChartLine} style={{ color: "#8b83ff" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Growth</div>
              <div style={{ fontWeight: 700, color: "var(--primary-light)" }}>+24% This Month</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Banner;
