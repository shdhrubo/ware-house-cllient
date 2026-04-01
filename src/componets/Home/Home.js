import React from "react";
import Banner from "../Banner/Banner";
import StatsCounter from "../StatsCounter/StatsCounter";
import Inventories from "../Inventories/Inventories";
import HowItWorks from "../HowItWorks/HowItWorks";
import WhyUs from "../WhyUs/WhyUs";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../Newsletter/Newsletter";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      {/* 1. Hero Banner */}
      <Banner />

      {/* Divider */}
      <hr className="gradient-divider" />

      {/* 2. Animated Stats Counter */}
      <StatsCounter />

      {/* Divider */}
      <hr className="gradient-divider" />

      {/* 3. Featured Inventory Items */}
      <Inventories />

      {/* Divider */}
      <hr className="gradient-divider" />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* Divider */}
      <hr className="gradient-divider" />

      {/* 5. Features / Why Us */}
      <WhyUs />

      {/* Divider */}
      <hr className="gradient-divider" />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* Divider */}
      <hr className="gradient-divider" />

      {/* 7. Newsletter CTA */}
      <Newsletter />
    </main>
  );
};

export default Home;
