import React from "react";
import "../style/Foodtech.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import saasIcon from "../images/saas.png";
import eduIcon from "../images/education.png";
import foodIcon from "../images/foodtech.png";

/* === Reusable Scroll Animation Hook === */
const useScrollAnim = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return { ref, inView };
};

const CardsSection = () => {
  const badge = useScrollAnim();
  const headingText = useScrollAnim();
  const subText = useScrollAnim();

  const card1 = useScrollAnim();
  const card2 = useScrollAnim();
  const card3 = useScrollAnim();

  return (
    <section className="cards-wrapper">

      {/* === Section Heading === */}
      <div className="section-heading text-center">

        {/* Badge Animation */}
        <motion.div
          ref={badge.ref}
          className="section-badge"
          initial={{ opacity: 0, y: 40 }}
          animate={badge.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Industries We Empower
        </motion.div>

        {/* Heading Text Animation */}
        <motion.h2
          ref={headingText.ref}
          className="section-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={headingText.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          We build domain-specific digital ecosystems that <br />
          redefine how industries work.
        </motion.h2>
      </div>

      {/* === Cards === */}
      <div className="cards-container">

        {/* === CARD 1 === */}
        <motion.div
          ref={card1.ref}
          className="card-box"
          initial={{ opacity: 0, y: 50 }}
          animate={card1.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <img src={saasIcon} alt="SaaS Icon" className="card-icon" />
          <h4 className="card-title">SaaS</h4>
          <p className="card-text">
            We build scalable, secure, and cloud-native platforms that streamline
            operations, enhance performance, and drive business agility across industries.
          </p>
        </motion.div>

        {/* === CARD 2 (Center Lifted Card) === */}
        <motion.div
          ref={card2.ref}
          className="card-box lifted"
          initial={{ opacity: 0, y: 60 }}
          animate={card2.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.25 }}
        >
          <img src={eduIcon} alt="Education Icon" className="card-icon" />
          <h4 className="card-title">Education</h4>
          <p className="card-text">
            Building intelligent learning ecosystems with virtual classrooms,
            analytics-based progress tracking, and adaptive learning tools.
          </p>
        </motion.div>

        {/* === CARD 3 === */}
        <motion.div
          ref={card3.ref}
          className="card-box"
          initial={{ opacity: 0, y: 50 }}
          animate={card3.inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img src={foodIcon} alt="FoodTech Icon" className="card-icon" />
          <h4 className="card-title">FoodTech</h4>
          <p className="card-text">
            Transforming dining experiences with AI-powered restaurant systems,
            delivery management platforms, and smart inventory control.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CardsSection;
