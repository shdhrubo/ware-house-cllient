import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="common-color company-logo">EIMS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/about">
               About
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav>
                  <Nav.Link as={CustomLink} to="/manageinventories">
                    Manage Inventories
                  </Nav.Link>
                  <Nav.Link as={CustomLink} to="/additems">
                    Add Items
                  </Nav.Link>
                  <Nav.Link as={CustomLink} to="/myitems">
                    My Items
                  </Nav.Link>
                </Nav>
              )}
              {user ? (
                <button
                  className="btn p-0 btn-link  ms-3 text-dark text-decoration-none"
                  onClick={handleSignOut}
                >
                  Log out <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  <button className="btn">Log In</button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
