import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">EIMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={CustomLink} to="/manage">
                Manage
              </Nav.Link>
              <Nav.Link as={CustomLink} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>
            <Nav>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
