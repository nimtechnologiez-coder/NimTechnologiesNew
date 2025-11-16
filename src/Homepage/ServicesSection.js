import React from "react";
import "../style/ServiceSection.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cloudIcon from "../images/cloud.png";
import webIcon from "../images/web.png";
import dataIcon from "../images/data.png";
import marketingIcon from "../images/marketing.png";

const services = [
  {
    title: "Cloud & AI Solutions",
    desc: "Empowering businesses with intelligent automation, real-time insights, and scalable agility — transforming operations and unlocking limitless innovation through the power of the cloud and AI.",
    icon: cloudIcon,
    link: "/Ailearnmore",
  },
  {
    title: "Web Development",
    desc: "We craft seamless, high-performing digital experiences that combine creativity, functionality, and scalability — empowering businesses to grow in the digital era.",
    icon: webIcon,
    link: "/webt",
  },
  {
    title: "Data Analytics & Machine Learning",
    desc: "Turning raw data into strategic intelligence using predictive models, ML, and real-time analytics — enabling smarter decisions and innovation.",
    icon: dataIcon,
    link: "/Cloudlearn",
  },
  {
    title: "Digital Marketing",
    desc: "Unlock insights through analytics, automation, and strategic storytelling — helping brands grow with data-driven decisions.",
    icon: marketingIcon,
    link: "/dmlearn",
  },
];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.15,
      }}
    >
      <div className="service-icon">
        <img src={service.icon} alt={service.title} />
      </div>

      <h3 className="service-title">{service.title}</h3>
      <div className="accent-line"></div>

      <p className="service-desc">{service.desc}</p>

      <a href={service.link} className="learn-more">
        Learn More <div className="learn-more-icon">➜</div>
      </a>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
