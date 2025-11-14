import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/HeroSection.css"; // ✅ Updated unique CSS name
import heroBg from "../images/homehero.png"; // 🖼️ Import background image

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // triggers on scroll again
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

      {/* Text Content */}
      <div className="unique-hero-content" data-aos="fade-up">
        <h1>
          Building Digital Intelligence
          <br />
          That Drives <span>Growth</span>
        </h1>

        <p>
          From Ideas to Impact —{" "}
          <span className="unique-highlight">We Engineer What’s Next.</span>
        </p>

        <button className="unique-hero-btn">Explore Our World</button>
      </div>
    </section>
  );
};

export default HeroSection;
