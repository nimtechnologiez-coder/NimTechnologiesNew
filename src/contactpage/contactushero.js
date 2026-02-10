import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/contactushero.css";
import heroBg from "../careerimages/contactsnims.png";

const HeroSectionn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 150,
    });
  }, []);

  return (
    <section
      className="unique-hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="unique-hero-overlay"></div>

      {/* Content */}
      <div className="unique-hero-content" data-aos="fade-up">
        <h1 className="unique-hero-title">
          Get In <span>Touch</span>
        </h1>

        <p className="unique-hero-desc">
          Want to get in touch? We’d love to hear from you — <br />
          <span className="unique-highlight">here’s how you can reach us</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSectionn;
