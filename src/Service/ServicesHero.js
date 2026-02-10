import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/ServicesHero.css";

import bgbutton from "../images/serbutton.png";
import bgImage from "../images/sevicegpt.png";

const ServiceHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      once: false, // animate when entering viewport each time
    });
  }, []);

  return (
    <section
      className="career-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="career-overlay">
        <div
          className="career-content"
          data-aos="fade-left"        // SLIDE FROM RIGHT
          data-aos-delay="200"
        >
          <img
            src={bgbutton}
            alt="Career Button"
            className="career-button"
            data-aos="fade-left"
            data-aos-delay="400"     // BUTTON DELAYED SLIDE ANIMATION
          />

          <h1 data-aos="fade-left" data-aos-delay="600">
            Innovative Tech Services <br /> Built for Tomorrow
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
