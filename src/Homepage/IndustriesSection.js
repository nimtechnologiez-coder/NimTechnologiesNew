import React, { useEffect, useState } from "react";
import "../style/IndustriesSection.css";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Import Local Images (Replace with your files)
import Img1 from "../images/feature-search.jpg";
import Img2 from "../images/feature-ai.jpg";
import Img3 from "../images/feature-workflow.jpg";

const FeatureCardAutoChange = () => {
  const features = [
    {
      img: Img1,
      title: "Advanced Search & Filtering",
      description:
        "Find exactly what you need with refined search options and filtering tools tailored for market professionals.",
      button: "LEARN MORE",
    },
    {
      img: Img2,
      title: "AI Insights & Reports",
      description:
        "Turn complex data into meaningful insights with AI-powered reports, dashboards, and predictive analytics for smarter decisions.",
      button: "LEARN MORE",
    },
    {
      img: Img3,
      title: "Workflow Automation",
      description:
        "Streamline your operations by automating repetitive workflows using intelligent process automation tools.",
      button: "LEARN MORE",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const feature = features[index];

  return (
    <section className="uniq-feature-section">
      <div className="uniq-feature-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="uniq-feature-card"
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Image */}
            <div className="uniq-feature-img-box">
              <img src={feature.img} alt={feature.title} className="uniq-feature-img" />
            </div>

            {/* Right Content */}
            <div className="uniq-feature-content">
              <h3 className="uniq-feature-title">{feature.title}</h3>
              <p className="uniq-feature-desc">{feature.description}</p>
              <button className="uniq-feature-btn">{feature.button}</button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="uniq-feature-dots">
          {features.map((_, i) => (
            <span key={i} className={`uniq-feature-dot ${i === index ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardAutoChange;
