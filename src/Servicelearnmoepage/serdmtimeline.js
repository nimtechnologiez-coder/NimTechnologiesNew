import React, { useEffect, useRef, useState } from "react";
import "../style/seraiquote.css";

const HowItWorksdm = () => {
  const timelineData = [
    {
      title: " SEO & Performance Marketing",
      points: [
        "On-page & technical SEO optimization",
"Paid performance campaigns across Google, Meta, and LinkedIn",
"Conversion-focused landing pages and A/B testing",
"Keyword research, backlinking, and analytics tracking",
      ],
      side: "left",
    },
    {
      title: " Social Media Management",
      points: [
        "Social media strategy & calendar planning",
"Content creation (posts, reels, stories, and campaigns)",
"Community management & engagement tracking",
"Social media analytics and performance reports",
      ],
      side: "right",
    },
    {
      title: " Brand Strategy & Design",
      points: [
        "Brand naming, logo, and visual identity design",
"Brand voice, tone, and messaging strategy",
"Rebranding & transformation for evolving companies",
"Brand guidelines and digital asset design",
      ],
      side: "left",
    },
    {
      title: " Google & Meta Ads",
      points: [
        "Google Search, Display, and YouTube Ads",
"Meta (Facebook & Instagram) campaigns for awareness & conversions",
"Audience segmentation and retargeting",
"ROI analytics and real-time performance reporting",
      ],
      side: "right",
    },
    {
      title: " Content Marketing & Video Production",
      points: [
        "Blogs, case studies, website content & ad copy",
"Product videos, explainer animations, and brand storytelling",
"SEO-driven content calendars",
"YouTube & short-form video campaigns",
      ],
      side: "left",
    },
    {
      title: " Marketing Automation (HubSpot, Zapier, etc.)",
      points: [
        "CRM and email marketing automation",
"Lead nurturing and scoring systems",
"Multi-channel campaign triggers (email, WhatsApp, SMS)",
"Dashboard integration for performance analytics",

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

export default HowItWorksdm;
