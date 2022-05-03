import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h3 className="text-danger">404</h3>
      <p>Page you are looking for is not found!!!!!!</p>
      <Link to={"/"}>
        <button className="btn btn-danger">Back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
