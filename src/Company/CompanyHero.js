import React, { useEffect, useRef } from "react";
import "../style/CompanyHero.css";

const CompanyHero = () => {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const actionsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("comp-hero-visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    [titleRef, subRef, actionsRef, statsRef].forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "8+", label: "Years of Experience" },
    { value: "40+", label: "Industry Clients" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section className="comp-hero-section">
      {/* Animated background blobs */}
      <div className="comp-hero-blob comp-blob-1" />
      <div className="comp-hero-blob comp-blob-2" />
      <div className="comp-hero-blob comp-blob-3" />

      <div className="comp-hero-content">
        <span className="comp-hero-badge">Our Work</span>

        <h1 ref={titleRef} className="comp-hero-title comp-hero-anim">
          What We Have <span className="comp-hero-highlight">Done</span>
        </h1>

        <p ref={subRef} className="comp-hero-sub comp-hero-anim comp-anim-delay-1">
          From startups to enterprises — we build transformative digital solutions
          that drive real results. Explore our industry impact across Retail,
          Healthcare, Fintech, Education, and beyond.
        </p>

        <div ref={actionsRef} className="comp-hero-actions comp-hero-anim comp-anim-delay-2">
          <a href="#comp-industries" className="comp-btn-primary">
            Explore Industries ↓
          </a>
          <a href="/contact" className="comp-btn-outline">
            Work With Us
          </a>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="comp-hero-stats comp-hero-anim comp-anim-delay-3">
          {stats.map((s, i) => (
            <div key={i} className="comp-hero-stat">
              <span className="comp-stat-value">{s.value}</span>
              <span className="comp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="comp-scroll-indicator">
        <div className="comp-scroll-dot" />
      </div>
    </section>
  );
};

export default CompanyHero;
