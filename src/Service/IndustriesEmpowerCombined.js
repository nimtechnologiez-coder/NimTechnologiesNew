import React, { useEffect, useState } from "react";
import "../style/IndustriesEmpower.css";

const IndustriesEmpower = () => {
  const industries = [
    {
      id: 1,
      title: "Enterprise SaaS & Cloud",
      desc: `Scalable, secure cloud ecosystems designed for growth.
      From ERP platforms to SaaS dashboards — we build systems that evolve with your business.`,
      direction: "right",
    },
    {
      id: 2,
      title: "Hospitality & Restaurant Tech",
      desc: `AI-based compliance monitoring, customer experience analytics,
      and operational automation for next-gen restaurant management.`,
      direction: "left",
    },
    {
      id: 3,
      title: "Education & EdTech",
      desc: `Transforming learning experiences with AI-powered education tools,
      digital classrooms, and scalable e-learning platforms.`,
      direction: "right",
    },
    {
      id: 4,
      title: "E-commerce & Retail",
      desc: `Empowering online and retail businesses with intelligent inventory
      management, personalized shopping experiences, and omnichannel integration.`,
      direction: "left",
    },
    {
      id: 5,
      title: "Automotive & Logistics",
      desc: `Advanced logistics optimization, real-time fleet tracking,
      and AI-driven automation solutions for the automotive and logistics industry.`,
      direction: "right",
    },
    {
      id: 6,
      title: "Finance & Analytics",
      desc: `Data-driven insights, AI-powered analytics, and secure financial
      automation tools to enhance performance, compliance, and profitability.`,
      direction: "left",
    },
    {
      id: 7,
      title: "Manufacturing & Automation",
      desc: `Smart factory automation, IoT-driven manufacturing systems,
      and robotics integration to improve efficiency and precision.`,
      direction: "right",
    },
  ];

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observers = industries.map((_, i) => {
      const target = document.getElementById(`industry-${i}`);
      if (!target) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setVisibleItems((prev) => [...prev, i]);
              observer.unobserve(e.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(target);
      return observer;
    });

    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <div className="industries-wrapper">
      {/* Header */}
      <div className="industries-header">
        <h2>INDUSTRIES EMPOWER</h2>
        <p>
          From startups to enterprises, our technology and AI-driven solutions are reshaping how
          industries operate — making them faster, smarter, and future-ready.
        </p>
      </div>

      {/* Cards */}
      {industries.map((item, index) => (
        <div
          key={item.id}
          id={`industry-${index}`}
          className={`industry-box ${item.direction === "left" ? "reverse" : ""} ${
            visibleItems.includes(index) ? "show" : ""
          }`}
        >
          <div className="industry-text">
            <p>{item.desc}</p>
          </div>

          <div className="industry-title-box">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustriesEmpower;
