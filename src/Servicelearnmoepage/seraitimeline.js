import React, { useEffect, useRef, useState } from "react";
import "../style/seraitimeline.css";

const HowItWorks = () => {
  const timelineData = [
    {
      title: "AI-Powered Analytics Dashboards",
      points: [
        "Interactive visual dashboards (Power BI, Tableau, Python)",
        "Real-time data insights with AI-based anomaly detection",
        "Automated performance reporting and trend forecasting",
        "Executive summaries that highlight what matters most",
      ],
      side: "left",
    },
    {
      title: "Predictive & Prescriptive Analytics",
      points: [
        "Demand, sales, and customer behavior prediction",
        "Risk analysis and churn prediction",
        "Scenario modeling and prescriptive recommendations",
        "AI-powered decision optimization",
      ],
      side: "right",
    },
    {
      title: "Computer Vision & Image Processing",
      points: [
        "Object & face detection systems",
        "Quality inspection and process monitoring (industry-specific)",
        "Real-time visual compliance dashboards",
        "Integration with IoT & edge devices for smart automation",
      ],
      side: "left",
    },
    {
      title: "NLP & Chatbot Development",
      points: [
        "Smart chatbots for websites, apps, and WhatsApp",
        "Sentiment and intent analysis models",
        "Voice-based assistants and multilingual AI bots",
        "NLP pipelines for text summarization, classification, and translation",
      ],
      side: "right",
    },
    {
      title: "Data Warehousing & ETL Pipelines",
      points: [
        "Cloud & on-premise data warehouse setup (AWS, Azure, GCP)",
        "Automated ETL workflows for large-scale data",
        "Real-time data ingestion & transformation",
        "Scalable architecture designed for analytics",
      ],
      side: "left",
    },
    {
      title: "Business Intelligence (Power BI / Tableau)",
      points: [
        "Power BI & Tableau dashboard development",
        "Data modeling and DAX/SQL optimization",
        "Executive reporting & KPI tracking",
        "Integration with databases, APIs, and CRMs",
      ],
      side: "right",
    },
    {
      title: "AI-Driven Automation Systems",
      points: [
        "Process automation (RPA + AI)",
        "Intelligent document & invoice processing",
        "Automated data entry and validation systems",
        "AI-based workflow triggers for business logic",
      ],
      side: "left",
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

export default HowItWorks;