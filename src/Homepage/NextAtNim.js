import React, { useEffect, useRef, useState } from "react";
import "../style/NextAtNim.css";
import monitorImg from "../images/nextnim.png";
import tabletLeft from "../images/iPad Mini.png";
import tabletRight from "../images/nextnim2.png";

const NextAtNim = () => {
  const [isVisible, setIsVisible] = useState({
    text: false,
    monitor: false,
    left: false,
    right: false,
  });

  const textRef = useRef(null);
  const monitorRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.dataset.name;
            setIsVisible((prev) => ({ ...prev, [target]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    [textRef, monitorRef, leftRef, rightRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [textRef, monitorRef, leftRef, rightRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <section className="next-section">
      {/* ===== TEXT ===== */}
      <div
        ref={textRef}
        data-name="text"
        className={`text-content ${isVisible.text ? "show-text" : ""}`}
      >
        <h2>What’s Next at <span>Nim</span></h2>
        <p>
          We’re constantly shaping the future — exploring Generative AI, Edge
          Computing, and Predictive Intelligence to redefine what’s possible in
          digital automation.
        </p>
        <p className="bold-line">
          Nim Technologies isn’t following trends — we’re{" "}
          <span className="highlight">building</span> them.
        </p>
      </div>

      {/* ===== IMAGES ===== */}
      <div className="image-wrapper">
        {/* Monitor */}
        <div
          ref={monitorRef}
          data-name="monitor"
          className={`monitor ${isVisible.monitor ? "fade-in-monitor" : ""}`}
        >
          <img src={monitorImg} alt="AI Monitor" className="monitor-img" />
          <div className="monitor-base"></div>
        </div>

        {/* Tablet Left */}
        <img
          ref={leftRef}
          data-name="left"
          src={tabletLeft}
          alt="Chat AI"
          className={`tablet-left ${isVisible.left ? "fade-in-left" : ""}`}
        />

        {/* Tablet Right */}
        <img
          ref={rightRef}
          data-name="right"
          src={tabletRight}
          alt="AI Analytics"
          className={`tablet-right ${isVisible.right ? "fade-in-right" : ""}`}
        />
      </div>
    </section>
  );
};

export default NextAtNim;
