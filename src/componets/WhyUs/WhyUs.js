import React, { useEffect, useState } from "react";
import WhyUsDetails from "../WhyUsDetails/WhyUsDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./WhyUs.css";

const WhyUs = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://warehouse-9jcz.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="whyus-section section-padding">
      <div className="whyus-bg-glow"></div>
      <div className="container-custom">
        <div className="whyus-header">
          <span className="section-badge"><FontAwesomeIcon icon={faStar} style={{ marginRight: 6 }} /> Our Features</span>
          <h2 className="section-title">
            Why Teams Choose <span className="gradient-text">EIMS</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to run a modern, efficient warehouse operation — built for speed and scale.
          </p>
        </div>

        {loading ? (
          <div className="loading-spinner" style={{ minHeight: 200 }}>
            <div className="spinner-ring"></div>
            <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>Loading features…</span>
          </div>
        ) : (
          <div className="features-grid">
            {services.map((service, index) => (
              <WhyUsDetails key={service.id || index} service={service} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyUs;
