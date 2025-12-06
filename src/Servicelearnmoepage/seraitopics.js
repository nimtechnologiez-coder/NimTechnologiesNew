import React from "react";
import { motion } from "framer-motion";
import "../style/seraitopics.css";

/* IMPORT LOCAL IMAGES (place them in /src/assets/ai-cards/) */
import brain from "../careerimages/ai01.png";
import touch from "../careerimages/ai02.png";
import scan from "../careerimages/ai03.png";
import chat from "../careerimages/ai04.png";
import engine from "../careerimages/ai05.png";
import dataviz from "../careerimages/ai06.png";
import automation from "../careerimages/ai07.png";

const cards = [
  {
    title: "AI-Powered Analytics Dashboards",
    text:
      "Intelligent analytics dashboards powered by AI & automation, converting static reports into actionable business insights with real-time patterns, anomaly detection and data-driven actions.",
    img: brain,
  },
  {
    title: "Predictive Insights & Forecasting",
    text:
      "Forecast demand, detect risks, optimize financial decisions and operational strategies using machine learning predictive analytics.",
    img: touch,
  },
  {
    title: "Computer Vision & Image Processing",
    text:
      "High-accuracy image detection, OCR, object tracking, quality control systems built using deep learning and AI camera intelligence.",
    img: scan,
  },
  {
    title: "NLP & Chatbot Development",
    text:
      "AI chatbots with NLP that understand intent, automate communication, and provide personalized, real-time support across industries.",
    img: chat,
  },
  {
    title: "Data Warehousing & ETL Pipelines",
    text:
      "Enterprise-grade ETL pipelines and cloud data warehousing for unified, scalable, and optimized data infrastructure.",
    img: engine,
  },
  {
    title: "Business Intelligence (Power BI / Tableau)",
    text:
      "Interactive dashboards and BI visualizations that help businesses make data-driven decisions with clarity and confidence.",
    img: dataviz,
  },
  {
    title: "AI-Driven Automation Systems",
    text:
      "Automation platforms powered by AI to reduce manual effort, increase productivity, and streamline business operations.",
    img: automation,
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
