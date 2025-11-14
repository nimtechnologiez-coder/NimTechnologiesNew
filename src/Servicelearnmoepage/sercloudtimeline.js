import React, { useEffect, useRef, useState } from "react";
import "../style/seraiquote.css";

const HowItWorkscloud = () => {
  const timelineData = [
    {
      title: " SaaS Application Development",
      points: [
        "End-to-end SaaS architecture and development",
        "Subscription management and payment gateway integration",
        "Role-based access control and data security layers",
        "Feature rollout, analytics, and maintenance support",
      ],
      side: "left",
    },
    {
      title: "Cloud Migration & Deployment (AWS, Azure, GCP)",
      points: [
        "Application & database migration",
        "Hybrid and multi-cloud deployment strategies",
        "Load balancing and cloud infrastructure design",
        "Security, backup, and disaster-recovery configuration",
      ],
      side: "right",
    },
    {
      title: " DevOps Implementation & CI/CD",
      points: [
        "CI/CD pipeline setup (GitHub Actions, Jenkins, GitLab, Bitbucket)",
"Infrastructure as Code (Terraform, Ansible)",
"Automated testing & deployment workflows",
"Monitoring, rollback, and continuous improvement systems",
      ],
      side: "left",
    },
    {
      title: " Cloud Monitoring & Cost Optimization",
      points: [
        "Cloud performance monitoring dashboards",
"Resource utilization analysis and optimization",
"Cost-saving strategies and auto-scaling setup",
"24×7 monitoring and alerting systems",
      ],
      side: "right",
    },
    {
      title: " API Integration & Backend Engineering",
      points: [
        "RESTful & GraphQL API development",
"Third-party API integrations (payment, CRM, ERP, etc.)",
"Backend engineering with Node.js, Django, and Spring Boot",
"API documentation, testing, and version management",
      ],
      side: "left",
    },
    {
      title: "Multi-Tenant SaaS Platforms",
      points: [
        "Tenant-aware architecture design",
"Scalable database partitioning and data isolation",
"Custom branding and user access management per tenant",
"Usage analytics and subscription tracking",

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

export default HowItWorkscloud;
