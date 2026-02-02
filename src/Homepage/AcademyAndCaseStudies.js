import React from "react";
import "../style/AcademyAndCaseStudies.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CaseImg1 from "../images/OurCase.png";
import CaseImg2 from "../images/OurCase1.png";
import CaseImg3 from "../images/OurCase2.png";

/* -------------------------------
   Reusable Scroll Animation Hook
-------------------------------- */
const useScrollAnim = (threshold = 0.2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, x: 0 });
    }
  }, [inView, controls]); // ✅ FIXED

  return { ref, controls };
};

const AcademyAndCaseStudies = () => {
  const academyHeader = useScrollAnim();
  const featureCard = useScrollAnim();
  const caseHeader = useScrollAnim();

  const caseStudies = [
    {
      image: CaseImg1,
      title: "Smart Retail Management System",
      description:
        "Manual billing and stock tracking led to time loss and data errors. Solution: Developed a cloud-based POS and inventory platform with real-time analytics. Result: Improved efficiency by 65% and reduced manual errors by 90%.",
    },
    {
      image: CaseImg2,
      title: "AI-Based Customer Support Chatbot",
      description:
        "High volume of support tickets and delayed responses. Solution: Created an AI chatbot integrated with CRM for instant user support. Result: 24/7 response capability and 50% cost savings in support operations.",
    },
    {
      image: CaseImg3,
      title: "Website Revamp for a Tech Startup",
      description:
        "Outdated design and poor mobile experience. Solution: Redesigned the entire UI/UX with a responsive and modern layout. Result: Increased user engagement by 70% within the first month.",
    },
  ];

  return (
    <div className="academy-case-wrapper">
      {/* ================== Academy Section ================== */}
      <section className="academy-section">
        <motion.div
          className="academy-header"
          ref={academyHeader.ref}
          initial={{ opacity: 0, y: 50 }}
          animate={academyHeader.controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="academy-title">
            Nim <span className="highlight-blue">Academy</span>
          </h2>

          <motion.h3
            className="academy-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Master IT Skills, Build Your Future With{" "}
            <span className="highlight-green">Nim </span>
            <span className="highlight-dark">Academy</span>
          </motion.h3>

          <motion.p
            className="academy-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Nim Academy is your gateway to mastering IT skills...
          </motion.p>
        </motion.div>

        {/* ===== Feature Card ===== */}
        <motion.div
          className="academy-feature-card motion-clip"
          ref={featureCard.ref}
          initial={{ opacity: 0, x: 120 }}
          animate={featureCard.controls}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="feature-inner">
            <motion.h3
              className="feature-title"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              BUILT TO BRIDGE <span className="feature-green">BOTH WORLDS</span>
            </motion.h3>

            <motion.p
              className="feature-subtext"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether you sell products or deliver services...
            </motion.p>

            <motion.div
              className="feature-buttons"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <button className="feature-btn">Hands-On Learning</button>
              <button className="feature-btn">Expert Mentorship</button>
              <button className="feature-btn">Career-Ready Skills</button>
              <button className="feature-btn">Certification Pathways</button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================== Case Studies Section ================== */}
      <section className="case-section">
        <motion.div
          className="case-header"
          ref={caseHeader.ref}
          initial={{ opacity: 0, y: 50 }}
          animate={caseHeader.controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="case-tag">Our Case Studies</p>
          <h2 className="case-title">
            Transforming Ideas into{" "}
            <span className="highlight">Digital Success</span>
          </h2>
          <p className="case-subtext">
            Explore how we’ve helped our clients innovate...
          </p>
        </motion.div>

        <div className="case-grid motion-clip">
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              className="case-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.25,
              }}
            >
              <img
                src={item.image}
                className="case-image"
                alt={item.title}
              />
              <div className="case-content">
                <h4 className="case-card-title">{item.title}</h4>
                <p className="case-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AcademyAndCaseStudies;
