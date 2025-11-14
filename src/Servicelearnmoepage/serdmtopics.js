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
    title: " SEO & Performance Marketing",
    text: "We combine advanced SEO techniques and performance-driven ad strategies to help brands dominate search results and maximize ROI. From keyword strategy to conversion optimization, we deliver measurable growth.",
    img: brain,
  },
  {
    title: " Social Media Management",
    text: "We craft compelling social media stories that connect your brand to its audience. Our creative strategy blends design, storytelling, and analytics — ensuring every post drives engagement and builds trust.",
    img: touch,
  },
  {
    title: "Computer Vision & Image Processing",
    text:
      "High-accuracy image detection, OCR, object tracking, quality control systems built using deep learning and AI camera intelligence.",
    img: scan,
  },
  {
    title: " Brand Strategy & Design",
    text: "We help businesses find their voice and visual identity through strategic brand positioning and creative design. From naming to logo creation, we craft brands that are memorable and market-ready",
    img: chat,
  },
  {
    title: " Google & Meta Ads",
    text: "Our certified marketing specialists run performance-focused ad campaigns that target, convert, and retain customers — optimizing every rupee you spend across Google and Meta platforms.",
    img: engine,
  },
  {
 title: " Content Marketing & Video Production",
    text: "We create data-backed content and videos that attract, educate, and convert. Whether it’s a product story, case study, or viral reel, we make sure your message connects emotionally and drives measurable action.",
    img: dataviz,
  },
  {
    title: " Marketing Automation (HubSpot, Zapier, etc.)",
    text: "We help you streamline your marketing, sales, and CRM operations using automation tools like HubSpot, Zapier, and Mailchimp. From lead scoring to workflow automation, we ensure your campaigns run 24/7 — even when you don’t.",
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
