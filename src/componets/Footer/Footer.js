import React from "react";
import './Footer.css'
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="text-center mt-5   ">
      <p>
        <small>
          Copyrights &copy; {year} All rights reserved by{" "}
          <b className="common-color">SHD</b>{" "}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
