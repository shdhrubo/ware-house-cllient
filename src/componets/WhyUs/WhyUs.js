import React, { useEffect, useState } from "react";
import WhyUsDetails from "../WhyUsDetails/WhyUsDetails";

const WhyUs = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://thawing-dawn-14943.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ margin: "70px 0" }}>
      <h4 className="common-color heading">Why us</h4>
      <div className="container">
        <div className="row g-2 mt-3">
          {loading ? (
            <>
              <p>
                <i
                  className="bx bx-loader bx-spin"
                  style={{ color: "#5d5d5d" }}
                ></i>{" "}
                Loading...
              </p>
            </>
          ) : (
            services.map((service) => (
              <WhyUsDetails key={service.id} service={service}></WhyUsDetails>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
