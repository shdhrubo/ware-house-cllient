import {
  faWarehouse,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>

      <div className="footer-main">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <FontAwesomeIcon icon={faWarehouse} />
              </div>
              <span style={{ color: "white" }}>
                EI<span style={{ color: "var(--secondary)" }}>MS</span>
              </span>
            </Link>
            <p className="footer-tagline">
              The modern way to manage your warehouse inventory. Smart, fast,
              and built for scale.
            </p>
            <div className="footer-socials">
              <span className="social-btn">𝕏</span>
              <span className="social-btn">in</span>
              <span className="social-btn">⌥</span>
              <span className="social-btn">▶</span>
            </div>
          </div>

          {/* Product links */}
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/manageinventories">Manage Inventory</Link>
              </li>
              <li>
                <Link to="/additems">Add Items</Link>
              </li>
              <li>
                <Link to="/myitems">My Items</Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <span className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>support@eims.io</span>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <span>Dhaka, Bangladesh</span>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">
                <FontAwesomeIcon icon={faClock} />
              </span>
              <span>Mon–Fri, 9am–6pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copyright">
            &copy; {year} All rights reserved by <b>EIMS</b>. <br />
            Design and Developed by{" "}
            <a
              href="https://shorifulhabib.netlify.app/"
              className="font-bold text-decoration-none"
              style={{
                color: "var(--secondary)",
                borderBottom: "1px solid var(--secondary)",
              }}
            >
              Shoriful Habib Dhrubo
            </a>
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
