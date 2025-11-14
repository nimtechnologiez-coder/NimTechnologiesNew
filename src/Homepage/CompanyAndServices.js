import React from "react";
import "../style/CompanyAndServices.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import companyImage from "../images/homeabout.png";

const CompanyAndServices = () => {
  // Animation controls
  const imageControls = useAnimation();
  const textControls = useAnimation();

  // Observe when section enters view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      imageControls.start({ opacity: 1, x: 0 });
      textControls.start({ opacity: 1, x: 0 });
    }
  }, [inView, imageControls, textControls]);

  return (
    <section className="company-section" ref={ref}>
      {/* Left Side Image */}
      <motion.div
        className="company-image-container"
        initial={{ opacity: 0, x: -100 }}
        animate={imageControls}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={companyImage}
          alt="About NIM Technology"
          className="company-image"
        />
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        className="company-content"
        initial={{ opacity: 0, x: 100 }}
        animate={textControls}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <p className="company-tag">About Our Company</p>
        <h2 className="company-title">
          Simplifying the complex through smart technology
        </h2>
        <p className="company-text">
          At NIM Technology, we build intelligent products, powerful platforms,
          and transformative digital experiences — all driven by the strength of
          AI, Cloud, and Data. We don’t just create technology; we craft
          solutions that think, adapt, and evolve with your business. Whether
          you’re a growing startup or a global enterprise, we turn every
          challenge into an opportunity — transforming complex ideas into
          scalable digital success.
        </p>
      </motion.div>
    </section>
  );
};

export default CompanyAndServices;
