import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faBoxOpen, faChartLine, faChartPie, faRocket } from "@fortawesome/free-solid-svg-icons";
import "./HowItWorks.css";

const steps = [
  {
    num: "01",
    icon: faUserPlus,
    title: "Create Your Account",
    desc: "Sign up in seconds. No credit card required. Set up your warehouse profile and configure your settings.",
    color: "var(--primary)",
  },
  {
    num: "02",
    icon: faBoxOpen,
    title: "Add Your Inventory",
    desc: "Import existing stock or add items manually. Include images, descriptions, supplier info, and pricing.",
    color: "var(--secondary)",
  },
  {
    num: "03",
    icon: faChartLine,
    title: "Track in Real-Time",
    desc: "Monitor stock levels, receive alerts for low quantities, and update items on the fly from any device.",
    color: "var(--accent-orange)",
  },
  {
    num: "04",
    icon: faChartPie,
    title: "Analyze & Optimize",
    desc: "Use powerful analytics to identify trends, cut waste, and make smarter restocking decisions.",
    color: "var(--accent)",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-section section-padding">
      <div className="how-bg"></div>
      <div className="container-custom">
        <div className="how-header">
          <span className="section-badge"><FontAwesomeIcon icon={faRocket} style={{ marginRight: 6 }} /> Getting Started</span>
          <h2 className="section-title">
            Up and Running in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="section-subtitle">
            From signup to fully operational warehouse in minutes — no technical knowledge required.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step, i) => (
            <div className="how-step" key={i}>
              <div className="how-step-connector">
                {i < steps.length - 1 && <div className="connector-line"></div>}
              </div>
              <div
                className="how-step-num"
                style={{ color: step.color, borderColor: `rgb(from ${step.color} r g b / 0.3)`, background: `rgb(from ${step.color} r g b / 0.1)` }}
              >
                {step.num}
              </div>
              <div
                className="how-step-icon"
                style={{ background: `rgb(from ${step.color} r g b / 0.1)`, border: `1px solid rgb(from ${step.color} r g b / 0.15)`, color: step.color }}
              >
                <FontAwesomeIcon icon={step.icon} />
              </div>
              <h3 className="how-step-title" style={{ color: step.color }}>{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
