import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/WhatWeOffer.css";
import airight from "../images/servicehead1.png";
import aileft from "../images/servicegroup2.png";

const WhatWeOffer = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({
    left: false,
    right: false,
    texts: [],
  });

  // 🧠 Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftImageRef.current) {
              setVisibleSections((prev) => ({ ...prev, left: true }));
            }
            if (entry.target === rightImageRef.current) {
              setVisibleSections((prev) => ({ ...prev, right: true }));
            }
            textRefs.current.forEach((textRef, index) => {
              if (entry.target === textRef) {
                setVisibleSections((prev) => {
                  const updated = [...(prev.texts || [])];
                  updated[index] = true;
                  return { ...prev, texts: updated };
                });
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftImageRef.current) observer.observe(leftImageRef.current);
    if (rightImageRef.current) observer.observe(rightImageRef.current);
    textRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="offer-section container py-5">
      {/* 🟩 Top Row - Image Left / Text Right */}
      <div className="row align-items-center justify-content-between offer-row mb-5">
        <div
          ref={leftImageRef}
          className={`col-md-5 text-center text-md-start fade-slide-left ${
            visibleSections.left ? "visible" : ""
          }`}
        >
          <div className="offer-image-wrapper">
            <div className="offer-hex-bg"></div>
            <img src={aileft} alt="AI Technology" className="offer-image" />
          </div>
        </div>

        <div
          ref={(el) => (textRefs.current[0] = el)}
          className={`col-md-6 fade-up ${
            visibleSections.texts[0] ? "visible" : ""
          }`}
        >
          <h2 className="offer-heading">Empowering Your Digital Future</h2>
          <p className="offer-text">
            At <span className="highlight">Nim Technologies</span>, we transform
            your digital vision into reality. Explore our comprehensive suite of
            professional services designed to elevate your brand, engage your
            audience, and drive measurable results.
          </p>
        </div>
      </div>

      {/* 🟦 Center Button */}
      <div
        ref={(el) => (textRefs.current[1] = el)}
        className={`text-center mb-5 fade-up ${
          visibleSections.texts[1] ? "visible" : ""
        }`}
      >
        <button className="offer-btn">What We Offer</button>
      </div>

      {/* 🟧 Bottom Row - Text Left / Image Right */}
      <div className="row align-items-center justify-content-between offer-row">
        <div
          ref={(el) => (textRefs.current[2] = el)}
          className={`col-md-6 order-2 order-md-1 fade-up ${
            visibleSections.texts[2] ? "visible" : ""
          }`}
        >
          <h2 className="offer-heading">Building Tomorrow’s Businesses</h2>
          <p className="offer-text">
            <span className="highlight">Nim Technologies</span> provides
            end-to-end digital solutions. From strategic web design to robust
            development, we partner with you to build a powerful online presence
            that grows your business.
          </p>
        </div>

        <div
          ref={rightImageRef}
          className={`col-md-5 order-1 order-md-2 text-center text-md-end fade-slide-right ${
            visibleSections.right ? "visible" : ""
          }`}
        >
          <div className="offer-image-wrapper">
            <div className="offer-hex-bg"></div>
            <img src={airight} alt="AI Security" className="offer-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
