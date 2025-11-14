import React, { useEffect, useRef } from 'react';
import '../style/seraiquote.css';
import aiImage from '../careerimages/airound.png'; // Adjust path as needed

const CloudBox = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const node = circleRef.current;
    if (!node) return;

    node.classList.add('animate-from-right');

    const observer = new window.IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(node);

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ai-data-hero-wrapper">
      <div className="ai-data-hero-outer-circle" ref={circleRef}>
        <div className="ai-data-hero-inner-shadow">
          <img src={aiImage} alt="AI Chip" />
        </div>
      </div>
      <div className="ai-data-hero-card">
        <span className="ai-data-hero-title">
          Cloud & SaaS Development
        </span>
      </div>
    </div>
  );
};

export default CloudBox;

