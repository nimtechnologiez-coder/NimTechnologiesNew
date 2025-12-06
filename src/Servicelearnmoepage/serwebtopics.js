import React from "react";
import { motion } from "framer-motion";
import "../style/seraitopics.css";

/* IMPORT LOCAL IMAGES (place them in /src/assets/ai-cards/) */
import brain from "../careerimages/web01.png";
import touch from "../careerimages/web02.png";
import scan from "../careerimages/web03.png";
import chat from "../careerimages/web04.png";
import engine from "../careerimages/web05.png";
import dataviz from "../careerimages/web06.png";
import automation from "../careerimages/ai01.png";

const cards = [
  {
    title: "Custom Website Development (React, Node, Django)",
    text:
      "We craft custom, high-performance websites built on powerful frameworks like React, Node.js, and Django. Every line of code is optimized for speed, security, and scalability — delivering seamless experiences across all devices.",
    img: brain,
  },
  {
    title: " E-commerce & ERP Platforms",
    text:
      "From online stores to enterprise management systems, we build secure, scalable platforms that handle transactions, inventory, and data with precision. Whether it’s Shopify or a fully custom ERP, we deliver reliability with performance.",
    img: touch,
  },
  {
    title: " Mobile App Development (Android / iOS / Flutter)",
    text:
      "We build intuitive mobile applications that deliver flawless performance and user delight — from startups to enterprise-grade solutions. Our team blends design, functionality, and technology for apps that stand out.",
    img: scan,
  },
  {
    title: " UI/UX Design & Prototyping (Figma / Adobe XD)",
     text: "We deliver flexible, easy-to-manage CMS websites that empower your team to update, launch, and grow without technical hassle. From WordPress to Webflow, we make content management simple yet powerful.",
    img: chat,
  },
  {
    title: " CMS Solutions (WordPress, Webflow)",
    text:
      "Enterprise-grade ETL pipelines and cloud data warehousing for unified, scalable, and optimized data infrastructure.",
    img: engine,
  },
  {
    title: " API Development & Integration",
    text: "Our developers build secure and scalable APIs that connect applications, automate workflows, and ensure smooth communication across your platforms and third-party services.",
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
