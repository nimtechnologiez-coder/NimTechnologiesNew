import React, { useEffect } from "react";
import "../style/OurServices.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import robotImage from "../images/Robot.png";

const OurServices = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <section className="os-section" ref={ref}>
      <motion.div
        className="os-wrapper"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

        {/* === TOP CARDS === */}
        <div className="os-card-row">
          <div className="os-card">
            <h3 className="os-number">100+</h3>
            <p className="os-text">Successful Projects</p>
          </div>

          <div className="os-card">
            <h3 className="os-number">100+</h3>
            <p className="os-text">Custom Applications</p>
          </div>

          <div className="os-card">
            <h3 className="os-number">20+</h3>
            <p className="os-text">Business Partnerships</p>
          </div>
        </div>

        {/* === TITLE + ROBOT IMAGE === */}
        <div className="os-title-box">
          <h2 className="os-title">-Our Services-</h2>
          <img src={robotImage} alt="Service Robot" className="os-robot" />
        </div>

        {/* === DESCRIPTION === */}
        <div className="os-description">
          <h3 className="os-heading">
            What We <span className="os-highlight">Build</span> — Engineering Digital{" "}
            <span className="os-highlight">Growth</span>
          </h3>

          <p className="os-subtext">
            Nim Technologies blends <span className="os-highlight">innovation</span> and
            execution — delivering future-ready digital ecosystems.
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default OurServices;
