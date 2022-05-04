import React from "react";
import "./Home.css";

import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner></Banner>
      </div>
      <Inventories></Inventories>
    </div>
  );
};

export default Home;
