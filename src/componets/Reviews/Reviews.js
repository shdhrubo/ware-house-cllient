import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://warehouse-9jcz.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="container ">
      <h4 className="common-color heading mt-5">Testimonials</h4>
      <Carousel className="mt-4 mb-5" variant="dark">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <span style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
              Loading testimonials...
            </span>
          </div>
        ) : (
          reviews.map((review) => (
            <Carousel.Item>
              <img
                style={{ height: "250px" }}
                className="d-block w-100 rounded"
                src={review.img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>{review.name}</h5>
                <h6 className="text-secondary">{review.designation}</h6>
                <p>{review.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </div>
  );
};

export default Reviews;
