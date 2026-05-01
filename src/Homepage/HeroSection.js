import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/HeroSection.css"; // ✅ Updated unique CSS name
import heroBg from "../images/homesnim.png"; // 🖼️ Import background image

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // triggers on scroll again
      offset: 150,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>NIM Technologies – AI &amp; Digital Solutions</title>
        <meta
          name="description"
          content="NIM Technologies offers AI, cloud, data analytics, digital marketing &amp; custom web/app development to grow your business faster."
        />
        <meta name="google-site-verification" content="d5-lD1ram5j452qIS6y7-EO34n6UufHH5KCrzlpuDRE" />
      </Helmet>

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

          <span className="unique-hero-btn">Explore Our World</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
