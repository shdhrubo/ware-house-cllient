import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer>
      <p>
        <small>
          Copyrights &copy; {year} All rights reserved by{" "}
          <b className="common-color">EIMS</b>{" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
