import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faUsers, faShieldAlt, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero section-padding">
        <div className="about-glow"></div>
        <div className="container-custom">
          <div className="about-hero-content text-center">
            <span className="section-badge">👋 Who We Are</span>
            <h1 className="section-title">
              We're changing how <span className="gradient-text">Warehouses</span> operate
            </h1>
            <p className="section-subtitle mx-auto mt-4 mb-4">
              At EIMS, we believe that robust, reliable inventory management should be accessible, seamless, and absolutely free.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="about-mission section-padding-sm">
        <div className="container-custom">
          <div className="mission-grid glass-card">
            <div className="mission-content">
              <h2 className="mission-title">Built on Trust, <br />Powered by Community</h2>
              <p className="mission-desc mt-3 text-muted">
                We are providing you absolutely free services, proving that money isn't everything. We believe trust is the core of any successful operation.
                By providing a platform free of bugs and packed with user-friendly features, we're dedicated to making your workflow easier.
              </p>
              <div className="mission-stats mt-4">
                <div className="m-stat">
                  <h4>10K+</h4>
                  <span>Global Users</span>
                </div>
                <div className="m-stat">
                  <h4>99.9%</h4>
                  <span>Uptime</span>
                </div>
                <div className="m-stat">
                  <h4>24/7</h4>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values section-padding">
        <div className="container-custom text-center">
          <h2 className="section-title mb-5">Our Core Values</h2>
          <div className="values-grid mt-4">
            <div className="value-card">
              <div className="value-icon"><FontAwesomeIcon icon={faShieldAlt} /></div>
              <h4>Reliability</h4>
              <p>A bug-free, zero-downtime platform that logistics teams can rely on every single day.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
              <h4>Ease of Use</h4>
              <p>Intuitive user interfaces that don't require weeks of training to understand.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FontAwesomeIcon icon={faUsers} /></div>
              <h4>Community First</h4>
              <p>User feedback drives our entire roadmap. We build what our warehouse managers actually need.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
              <h4>Transparency</h4>
              <p>No hidden fees. Just transparent inventory operations powered by real-time analytics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
