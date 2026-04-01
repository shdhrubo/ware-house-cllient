import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faCheckCircle, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="newsletter-section section-padding-sm">
      <div className="newsletter-bg"></div>
      <div className="container-custom">
        <div className="newsletter-card">
          <div className="newsletter-glow-1"></div>
          <div className="newsletter-glow-2"></div>
          <div className="newsletter-content">
            <div className="newsletter-left">
              <span className="section-badge"><FontAwesomeIcon icon={faEnvelopeOpenText} style={{ marginRight: 6 }} /> Stay Updated</span>
              <h2 className="section-title" style={{ fontSize: "2rem" }}>
                Get the Latest <span className="gradient-text">Inventory Tips</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 380 }}>
                Subscribe to our newsletter and receive best practices, feature updates, and warehouse optimization strategies.
              </p>
            </div>

            <div className="newsletter-right">
              {submitted ? (
                <div className="newsletter-success">
                  <div className="success-icon" style={{ color: "var(--secondary)" }}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <h3>You're in!</h3>
                  <p>Thanks for subscribing. We'll be in touch soon.</p>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="newsletter-input"
                      required
                      id="newsletter-email"
                    />
                    <button type="submit" className="btn-teal-custom">
                      Subscribe
                    </button>
                  </div>
                  <p className="form-note">No spam, ever. Unsubscribe anytime. <FontAwesomeIcon icon={faLock} style={{ marginLeft: 4 }} /></p>
                </form>
              )}

              <div className="newsletter-stats">
                <div className="nl-stat">
                  <strong>2,400+</strong>
                  <span>Subscribers</span>
                </div>
                <div className="nl-divider"></div>
                <div className="nl-stat">
                  <strong>Weekly</strong>
                  <span>Frequency</span>
                </div>
                <div className="nl-divider"></div>
                <div className="nl-stat">
                  <strong>Free</strong>
                  <span>Always</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
