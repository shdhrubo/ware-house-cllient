import { faArrowRight, faBolt, faChartBar, faShieldAlt, faSync, faCubes, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const iconMap = {
  0: { icon: faBolt, color: "var(--primary)" },
  1: { icon: faChartBar, color: "var(--secondary)" },
  2: { icon: faShieldAlt, color: "var(--accent-orange)" },
  3: { icon: faSync, color: "var(--accent)" },
  4: { icon: faCubes, color: "var(--primary-light)" },
  5: { icon: faGlobe, color: "var(--secondary-dark)" },
};

const WhyUsDetails = ({ service, index }) => {
  const meta = iconMap[index % Object.keys(iconMap).length] || iconMap[0];

  return (
    <div className="feature-card glass-card">
      <div
        className="feature-icon-wrap"
        style={{
          background: `rgb(from ${meta.color} r g b / 0.1)`,
          border: `1px solid rgb(from ${meta.color} r g b / 0.15)`,
          color: meta.color,
        }}
      >
        <FontAwesomeIcon icon={meta.icon} className="feature-emoji" />
      </div>
      <h3 className="feature-title" style={{ color: meta.color }}>{service.name}</h3>
      <p className="feature-desc">{service.description}</p>
      <Link to="/manageinventories" className="feature-link" style={{ color: meta.color }}>
        Get Started <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "0.75rem" }} />
      </Link>
      <div className="feature-glow" style={{ background: `radial-gradient(ellipse at bottom, rgb(from ${meta.color} r g b / 0.12), transparent 70%)` }}></div>
    </div>
  );
};

export default WhyUsDetails;
