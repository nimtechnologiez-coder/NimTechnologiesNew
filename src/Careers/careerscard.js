import React from "react";
import "../style/careerscard.css";
import careersBanner from "../careerimages/careerscard.png"; // your uploaded image

const CareersCard = () => {
  return (
    <section
      className="careers-card"
      style={{ backgroundImage: `url(${careersBanner})` }}
    >
      <div className="careers-card-overlay">
        <div className="careers-card-content">
          <h2>Careers</h2>
          <p>
            AT NIM TECHNOLOGIES, YOU’LL FIND MORE THAN A JOB — YOU’LL DISCOVER A PLACE
            WHERE YOUR TALENTS ARE NURTURED AND YOUR IMPACT VALUED. BY JOINING NIM EARLY
            IN YOUR CAREERS, YOU’LL GAIN EXPPERIENCE AND SKILLS THAT WILL BRING YOU
            SUCCESS BEYOND YOUR EXPECTATIONS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersCard;