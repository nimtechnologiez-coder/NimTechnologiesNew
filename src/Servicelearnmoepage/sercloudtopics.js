import React from "react";
import { motion } from "framer-motion";
import "../style/seraitopics.css";

/* IMPORT LOCAL IMAGES (place them in /src/assets/ai-cards/) */
import brain from "../careerimages/ai01.png";
import touch from "../careerimages/ai01.png";
import scan from "../careerimages/ai01.png";
import chat from "../careerimages/ai01.png";
import engine from "../careerimages/ai01.png";
import dataviz from "../careerimages/ai01.png";
import automation from "../careerimages/ai01.png";

const cards = [
  {
    title: " SaaS Application Development",
    text:
      "We design and build SaaS applications that grow with your business — secure, multitenant, and performance-optimized. From MVP to enterprise rollout, our team ensures your product is engineered for reliability, flexibility, and success.",
    img: brain,
  },
  {
    title: " Cloud Migration & Deployment (AWS, Azure, GCP)",
    text:
      "Move your legacy systems to the cloud with confidence. We handle every stage of migration — assessment, planning, execution, and optimization — ensuring high availability, compliance, and peak performance across AWS, Azure, and Google Cloud.",
    img: touch,
  },
  {
    title: "Cloud Monitoring & Cost Optimization",
    text:
      "We help businesses gain full visibility into their cloud environments — monitoring performance, detecting anomalies, and optimizing cloud costs without compromising on performance.",
    img: scan,
  },
  {
    title: " API Integration & Backend Engineering",
    text:
      "We develop robust backend systems and secure APIs that seamlessly connect your applications, services, and data layers — enabling reliable communication between systems and platforms.",
    img: chat,
  },
  {
    title: "Data Warehousing & ETL Pipelines",
    text:
      "Enterprise-grade ETL pipelines and cloud data warehousing for unified, scalable, and optimized data infrastructure.",
    img: engine,
  },
  {
    title: "Multi-Tenant SaaS Platforms",
    text:
      "We architect and build multi-tenant SaaS platforms that serve multiple customers efficiently — with isolated data, scalable infrastructure, and unified control.",
    img: dataviz,
  },

];

const itemVariants = (isRight) => ({
  offscreen: { opacity: 0, x: isRight ? 60 : -60, scale: 0.98 },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, duration: 0.6 },
  },
});

export default function AiCards() {
  return (
    <section className="ai-wrapper" aria-label="AI feature cards">
      {cards.map((card, i) => {
        const isReverse = i % 2 !== 0;
        const textRadiusClass = isReverse ? "right-radius" : "left-radius";
        const imgRadiusClass = isReverse ? "left-img-radius" : "right-img-radius";

        return (
          <motion.div
            className={`ai-card ${isReverse ? "reverse" : ""}`}
            key={card.title}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            // small stagger for cards
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.div
              className={`ai-text ${textRadiusClass}`}
              variants={itemVariants(!isReverse)}
            >
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </motion.div>

            <motion.div
              className={`ai-img-box ${imgRadiusClass}`}
              variants={itemVariants(isReverse)}
            >
              <img src={card.img} alt={card.title} loading="lazy" />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
