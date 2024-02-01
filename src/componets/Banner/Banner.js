import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../images/header.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container text-start mt-4 banner">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <h2 className="common-color">
            {" "}
            Easy Inventory <br />
            Management System
          </h2>
          <p>
            We are providing you the easiest way to manage your inventories with
            exciting features.So what are you waiting for?Manage your items
            here,easily!
          </p>
          <Link to={"/manageinventories"}>
            <button className="btn mb-2">
              Get Started <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <img className="w-100 rounded" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
