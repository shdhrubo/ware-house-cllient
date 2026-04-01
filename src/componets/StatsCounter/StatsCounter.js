import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faBoxes, faBolt, faIndustry } from "@fortawesome/free-solid-svg-icons";
import "./StatsCounter.css";

const stats = [
  { end: 5000, suffix: "+", label: "Active Users", icon: faUsers, color: "var(--primary)" },
  { end: 1200000, suffix: "+", label: "Items Tracked", icon: faBoxes, color: "var(--secondary)" },
  { end: 99, suffix: "%", label: "Uptime Guarantee", icon: faBolt, color: "var(--accent-orange)" },
  { end: 350, suffix: "+", label: "Warehouses Managed", icon: faIndustry, color: "var(--accent)" },
];

function useCountUp(end, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

const StatCard = ({ stat, animate }) => {
  const count = useCountUp(stat.end, 1800, animate);

  const fmt = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "K";
    return n.toString();
  };

  return (
    <div className="stat-card glass-card">
      <div className="stat-icon-wrap" style={{ background: `rgb(from ${stat.color} r g b / 0.1)`, border: `1px solid rgb(from ${stat.color} r g b / 0.15)` }}>
        <span className="stat-emoji" style={{ color: stat.color }}>
          <FontAwesomeIcon icon={stat.icon} />
        </span>
      </div>
      <div className="stat-number" style={{ color: stat.color }}>
        {fmt(count)}<span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
      <div className="stat-bar">
        <div
          className="stat-bar-fill"
          style={{
            background: stat.color,
            width: animate ? "100%" : "0%",
            transition: `width 1.8s cubic-bezier(0.4,0,0.2,1)`,
          }}
        ></div>
      </div>
    </div>
  );
};

const StatsCounter = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section section-padding-sm" ref={ref}>
      <div className="stats-bg-line"></div>
      <div className="container-custom">
        <div className="stats-header">
          <span className="section-badge"><FontAwesomeIcon icon={faBolt} style={{ marginRight: 6 }} /> Our Numbers</span>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">Thousands</span> Worldwide
          </h2>
          <p className="section-subtitle">
            From small shops to large enterprises — EIMS scales with your business needs.
          </p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
