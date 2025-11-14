import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/AboutUs.css";
import heroBg from "../images/Abouthead.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            buttonRef.current.classList.add("about-slide-right");
            headingRef.current.classList.add("about-slide-right");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-hero-section d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="about-overlay"></div>

      <div className="container text-center about-content">
        <button ref={buttonRef} className="about-badge mb-4">
          About Our Company
        </button>

        <h2 ref={headingRef} className="fw-semibold">
          Innovation is not just our goal <br />— it’s our identity
        </h2>
      </div>
    </section>
  );
};

export default About;
