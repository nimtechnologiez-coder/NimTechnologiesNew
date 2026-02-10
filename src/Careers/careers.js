import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../style/careers.css";
import bgImage from "../images/careerherogpt.png";
import bgbutton from "../careerimages/careerbuttonhero.png";

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      once: false, // animate every time user scrolls into view
    });
  }, []);

  return (
    <section
      className="careers-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="careers-overlay">
        <div
          className="careers-content"
          data-aos="fade-left"
          data-aos-delay="50"
        >
          {/* BUTTON */}
          <img
            src={bgbutton}
            alt="Careers Button"
            className="careers-button"
            data-aos="fade-left"
            data-aos-delay="200"
          />

          {/* HEADING */}
          <h1 data-aos="fade-left" data-aos-delay="400">
            Build the Future with <br /> Nim Technologies
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Careers;
