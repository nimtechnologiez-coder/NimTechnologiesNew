import React, { useEffect, useRef } from "react";
import "../style/ExpertiseAndAdvantage.css";

import {
  Code,
  Cloud,
  Database,
  Shield,
  Cpu,
  Server,
  Users,
  Atom,
  Code2,
  FileCheck2,
  Lightbulb,
  Headphones,
  RefreshCcw,
} from "lucide-react";

const ExpertiseAndAdvantage = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("advx-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const expertise = [
    { icon: <Code size={32} />, title: "Web Development" },
    { icon: <Cloud size={32} />, title: "Cloud Computing" },
    { icon: <Database size={32} />, title: "Data Engineering" },
    { icon: <Shield size={32} />, title: "Cyber Security" },
    { icon: <Cpu size={32} />, title: "AI & Machine Learning" },
    { icon: <Server size={32} />, title: "DevOps Solutions" },
    { icon: <Users size={32} />, title: "Team Collaboration" },
    { icon: <Atom size={32} />, title: "React Applications" },
  ];

  const advantageCards = [
    {
      icon: <Code2 size={55} />,
      title: "Full-Stack Expertise",
      desc: "From strategy to deployment — complete digital transformation without outsourcing.",
    },
    {
      icon: <FileCheck2 size={55} />,
      title: "Proven Track Record",
      desc: "Delivered SaaS, AI systems, and analytics platforms across global industries.",
    },
    {
      icon: <Users size={55} />,
      title: "Collaborative Process",
      desc: "Real-time updates, milestone tracking, and full transparency.",
    },
    {
      icon: <Headphones size={55} />,
      title: "Dedicated Support",
      desc: "A reliable team available for your project needs, 24/7 assistance & monitoring.",
    },
    {
      icon: <Lightbulb size={55} />,
      title: "AI-Powered Solutions",
      desc: "Modern AI tools integrated for automation, prediction, and efficiency.",
    },
    {
      icon: <RefreshCcw size={55} />,
      title: "Cloud Scalability",
      desc: "Scalable cloud architecture tailored for enterprise-level performance.",
    },
  ];

  return (
    <>
      {/* SECTION 1 */}
      <section
        className="it-section advx-fade"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div className="it-header">
          <div className="it-badge advx-fade">
            Our <span>IT expertise</span>
          </div>

          <p className="it-description advx-fade">
            We combine innovation, performance, and security to craft powerful IT
            solutions that empower businesses across industries.
          </p>
        </div>

        <div className="scroll-container">
          <div className="scroll-track">
            {[...expertise, ...expertise].map((item, i) => (
              <div key={i} className="scroll-card">
                <div className="it-icon">{item.icon}</div>
                <p className="it-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section
        className="advx-wrapper advx-fade"
        ref={(el) => (sectionRefs.current[1] = el)}
      >
        <h2 className="advx-title">The Nim Technologies Advantage</h2>

        <div className="advx-grid">
          {advantageCards.map((item, index) => (
            <div
              key={index}
              className="advx-card advx-fade"
              ref={(el) => (sectionRefs.current[index + 2] = el)}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="advx-outer-circle">
                <div className="advx-inner-circle">{item.icon}</div>
              </div>

              <h3 className="advx-heading">{item.title}</h3>
              <p className="advx-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExpertiseAndAdvantage;
