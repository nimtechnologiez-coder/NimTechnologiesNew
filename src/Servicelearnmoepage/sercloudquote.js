import React, { useRef, useEffect, useState } from "react";
import "../style/seraiquote.css";

const CloudQuoteCard = () => {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Run animation only once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="quote-card-container">
      <div
        ref={cardRef}
        className={`quote-card ${inView ? "fade-in" : ""}`}
      >
        <h2>Empowering Intelligence Through Data</h2>
        <p>— Nim Technologies</p>
      </div>
    </div>
  );
};

export default CloudQuoteCard;