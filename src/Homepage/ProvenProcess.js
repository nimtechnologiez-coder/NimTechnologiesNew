import React, { useEffect, useRef, useState } from "react";
import "../style/ProvenProcess.css";

const ProvenProcess = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`proven-process-container ${isVisible ? "visible" : ""}`}
    >
      {/* Heading */}
      <h2 className="proven-process-title">
        How We <span>Build</span> — Our Proven Process
      </h2>

      {/* Elliptical Process Section */}
      <div className="process-wrapper">
        <div className="outer-ellipse"></div>
        <div className="inner-glow"></div>

        {/* Center */}
        <div className="circle center">Our Proven Process</div>

        {/* Left Side */}
        <div className="circle development">Development</div>
        <div className="circle strategy">Strategy</div>
        <div className="circle design">Design</div>
        <div className="circle discovery">Discovery</div>

        {/* Right Side */}
        <div className="circle support">Support</div>
        <div className="circle growth">Growth</div>
        <div className="circle results">Results</div>
        <div className="circle innovation">Innovation</div>
      </div>
    </div>
  );
};

export default ProvenProcess;
