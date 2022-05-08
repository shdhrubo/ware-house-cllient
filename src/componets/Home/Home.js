import React from "react";
import "./Home.css";

import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <Banner></Banner>
      </div>
      <Inventories></Inventories>
      <WhyUs></WhyUs>
    </div>
    
  );
};

export default Home;
