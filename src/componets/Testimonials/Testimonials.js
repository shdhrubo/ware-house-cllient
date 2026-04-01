import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const fallbackReviews = [
  {
    name: "Sarah Johnson",
    designation: "Warehouse Manager, LogiCo",
    description: "EIMS transformed how we manage stock. The real-time tracking saved us hours every week. Absolutely love the clean interface!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    designation: "Operations Director, SupplyMax",
    description: "We switched from a clunky legacy system and the difference is night and day. EIMS is intuitive, fast, and the team loves it.",
    rating: 5,
  },
  {
    name: "Ayesha Rahman",
    designation: "Inventory Specialist, RetailHub",
    description: "The dashboard analytics are incredibly helpful. I can now make faster decisions with real data at my fingertips.",
    rating: 4,
  },
  {
    name: "Tom Bradley",
    designation: "CEO, FreshGoods Ltd",
    description: "Reduced our stock discrepancies by 90%. The system is reliable and scales beautifully as our business grows.",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < count ? "filled" : ""}`}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch("https://warehouse-9jcz.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) setReviews(data);
        else setReviews(fallbackReviews);
      })
      .catch(() => setReviews(fallbackReviews))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [reviews]);

  const goTo = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);
  };

  return (
    <section className="testimonials-section section-padding">
      <div className="testimonials-bg"></div>
      <div className="container-custom">
        <div className="testimonials-header">
          <span className="section-badge"><FontAwesomeIcon icon={faCommentDots} style={{ marginRight: 6 }} /> Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="section-subtitle">
            Trusted by warehouse managers and logistics teams around the globe.
          </p>
        </div>

        {loading ? (
          <div className="loading-spinner" style={{ minHeight: 200 }}>
            <div className="spinner-ring"></div>
          </div>
        ) : (
          <>
            <div className="testimonials-grid">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className={`testimonial-card glass-card ${i === active ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">
                    {review.description || review.text || "Great experience using EIMS!"}
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="author-info">
                      <div className="author-name">{review.name || "Anonymous"}</div>
                      <div className="author-role">{review.designation || ""}</div>
                    </div>
                    <StarRating count={review.rating || 5} />
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="testimonials-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
