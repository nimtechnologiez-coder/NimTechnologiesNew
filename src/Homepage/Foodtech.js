import React from "react";
import "../style/Foodtech.css";
import saasIcon from "../images/saas.png";
import eduIcon from "../images/education.png";
import foodIcon from "../images/foodtech.png";

const CardsSection = () => {
  return (
    <section className="cards-wrapper">
      {/* === Section Heading === */}
      <div className="section-heading text-center">
        <div className="section-badge">Industries We Empower</div>
        <h2 className="section-subtext">
          We build domain-specific digital ecosystems that <br />
          redefine how industries work.
        </h2>
      </div>

      {/* === Cards === */}
      <div className="cards-container">
        {/* === CARD 1: SaaS === */}
        <div className="card-box">
          <img src={saasIcon} alt="SaaS Icon" className="card-icon" />
          <h4 className="card-title">SaaS</h4>
          <p className="card-text">
            We build scalable, secure, and cloud-native platforms that streamline
            operations, enhance performance, and drive business agility across
            industries.
          </p>
        </div>

        {/* === CARD 2: Education (Lifted Center) === */}
        <div className="card-box lifted">
          <img src={eduIcon} alt="Education Icon" className="card-icon" />
          <h4 className="card-title">Education</h4>
          <p className="card-text">
            Building intelligent learning ecosystems with virtual classrooms,
            analytics-based progress tracking, and adaptive learning tools.
          </p>
        </div>

        {/* === CARD 3: FoodTech === */}
        <div className="card-box">
          <img src={foodIcon} alt="FoodTech Icon" className="card-icon" />
          <h4 className="card-title">FoodTech</h4>
          <p className="card-text">
            Transforming dining experiences with AI-powered restaurant systems,
            delivery management platforms, and smart inventory control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
