import React, { useEffect, useRef } from "react";
import "../style/AIDigitalSection.css";

import aiImage from "../images/image.png";
import cloudImage from "../images/service2.png";
import webImage from "../images/service3.png";
import marketingImage from "../images/service4.png";

const AIDigitalSection = () => {
  const services = [
    {
      id: "01",
      title: "Artificial Intelligence & Data Solutions",
      desc: `Unlock smarter possibilities with intelligent automation and data-driven insights.
      We design AI-powered systems that help businesses analyze, predict, and perform better — 
      turning complex data into clear, actionable results.`,
      img: aiImage,
      link: "/Ailearnmore", // <-- ADD LINK HERE
    },
    {
      id: "02",
      title: "Cloud & SaaS Development",
      desc: `Build, scale, and manage your applications in the cloud with unmatched flexibility.
      We create secure, high-performance SaaS solutions that help businesses operate smarter 
      and grow faster in the digital age.`,
      img: cloudImage,
      link: "/Cloudlearn", // <-- ADD LINK HERE
    },
    {
      id: "03",
      title: "Web, Mobile & Full Stack Development",
      desc: `Delivering innovation through modern, scalable, and user-focused applications —
      we build digital ecosystems that connect users, data, and advanced technology.`,
      img: webImage,
      link: "/web", // <-- ADD LINK HERE
    },
    {
      id: "04",
      title: "Digital Marketing & Brand Transformation",
      desc: `Elevate your brand with data-backed marketing strategies and modern storytelling.
      We deliver measurable results and lasting digital impact.`,
      img: marketingImage,
      link: "/dmlearn", // <-- ADD LINK HERE
    },
  ];

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("nimAI-visible");
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach(section => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nimAI-container">
      {/* Header */}
      <section className="nimAI-header">
        <div className="nimAI-header-badge">
          Nim <span>Technologies</span> Services
        </div>

        <p className="nimAI-header-desc">
          Providing end-to-end digital, <span>development</span>, and IT{" "}
          <span>solutions</span> that transform <span>your</span> business.
        </p>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          ref={el => (sectionRefs.current[index] = el)}
          className={`nimAI-service-section nimAI-fade-slide ${
            index % 2 !== 0 ? "nimAI-reverse-layout" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`nimAI-image-container ${
              index % 2 === 0 ? "nimAI-slide-right" : "nimAI-slide-left"
            }`}
          >
            <img src={service.img} alt={service.title} className="nimAI-image" />
          </div>

          {/* Content */}
          <div
            className={`nimAI-content ${
              index % 2 === 0 ? "nimAI-slide-left" : "nimAI-slide-right"
            }`}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            {/* Link Added */}
            <a href={service.link} className="nimAI-btn">
              LEARN MORE
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AIDigitalSection;
