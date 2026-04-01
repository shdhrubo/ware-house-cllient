import { 
  faSignOut, 
  faWarehouse
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSignOut = () => {
    signOut(auth);
    localStorage.clear();
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path ? "nav-link-item active" : "nav-link-item";

  return (
    <>
      <nav className={`eims-navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Brand */}
          <Link to="/" className="navbar-brand-link">
            <div className="brand-icon">
              <FontAwesomeIcon icon={faWarehouse} />
            </div>
            <div className="brand-text">
              <span>EI</span><span>MS</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar-links">
            <li><Link to="/" className={isActive("/") || isActive("/home") ? "nav-link-item active" : "nav-link-item"}>Home</Link></li>
            <li><Link to="/about" className={isActive("/about") ? "nav-link-item active" : "nav-link-item"}>About</Link></li>
            {user && (
              <>
                <li><Link to="/manageinventories" className={isActive("/manageinventories") ? "nav-link-item active" : "nav-link-item"}>Manage</Link></li>
                <li><Link to="/additems" className={isActive("/additems") ? "nav-link-item active" : "nav-link-item"}>Add Items</Link></li>
                <li><Link to="/myitems" className={isActive("/myitems") ? "nav-link-item active" : "nav-link-item"}>My Items</Link></li>
              </>
            )}
          </ul>

          {/* Actions */}
          <div className="navbar-actions">
            {user ? (
              <>
                <div className="user-badge">
                  <div className="user-avatar">{user.email?.[0]?.toUpperCase() || "U"}</div>
                  <span>{user.displayName || user.email?.split("@")[0] || "User"}</span>
                </div>
                <button className="btn-logout" onClick={handleSignOut}>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-login-nav">Sign In</Link>
            )}

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link to="/" className="mobile-nav-item">Home</Link>
        <Link to="/about" className="mobile-nav-item">About</Link>
        {user && (
          <>
            <Link to="/manageinventories" className="mobile-nav-item">Manage Inventories</Link>
            <Link to="/additems" className="mobile-nav-item">Add Items</Link>
            <Link to="/myitems" className="mobile-nav-item">My Items</Link>
          </>
        )}
        {user ? (
          <button className="btn-logout-mobile" onClick={handleSignOut}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn-login-mobile">Sign In</Link>
        )}
      </div>
    </>
  );
};

export default Header;
