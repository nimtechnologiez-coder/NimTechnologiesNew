import React, { useEffect, useRef, useState } from "react";
import "../style/seraiquote.css";

const HowItWorksweb = () => {
  const timelineData = [
    {
      title: " Custom Website Development (React, Node, Django)",
      points: [
        "Custom-built business, portfolio, and enterprise websites",
"Scalable backend systems using Node.js / Django",
"Progressive Web Apps (PWA) and responsive interfaces",
"SEO optimization and blazing-fast load performance",

      ],
      side: "left",
    },
    {
      title: " E-commerce & ERP Platforms",
      points: [
        "Custom e-commerce store development (Shopify, MERN, Python)",
"Inventory, order, and payment management systems",
"ERP and CRM solutions for growing businesses",
"Integration with payment gateways and logistics APIs",

      ],
      side: "right",
    },
    {
      title: " Mobile App Development (Android / iOS / Flutter)",
      points: [
        "Native Android & iOS apps",
"Cross-platform apps using Flutter / React Native",
"App UI/UX design and backend API integration",
"App store optimization, deployment, and maintenance",
      ],
      side: "left",
    },
    {
      title: " UI/UX Design & Prototyping (Figma / Adobe XD)",
      points: [
        "UI/UX design for web and mobile",
"Interactive prototypes using Figma & Adobe XD",
"User research, persona mapping, and usability testing",
"Branding, color psychology, and design system creation",
      ],
      side: "right",
    },
    {
      title: " CMS Solutions (WordPress, Webflow)",
      points: [
        "Custom WordPress theme & plugin development",
"Webflow-based CMS design for dynamic sites",
"SEO-ready architecture & easy content workflows",
"Secure hosting and ongoing CMS maintenance",

      ],
      side: "left",
    },
    {
      title: " API Development & Integration",
      points: [
        "RESTful & GraphQL API development",
"Integration with CRMs, ERPs, and payment gateways",
"Secure authentication and token management (OAuth2, JWT)",
"API documentation, testing, and lifecycle management",

      ],
      side: "right",
    },
    
  ];

  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of item is visible
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="howitworks-section">
      <h2 className="howitworks-title">How It Works ?</h2>

      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`timeline-item ${item.side} ${
              visibleItems.includes(index) ? "in-view" : ""
            }`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default HowItWorksweb;
