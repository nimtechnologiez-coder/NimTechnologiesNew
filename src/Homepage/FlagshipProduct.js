import React from "react";
import "../style/FlagshipProduct.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import nimLogo from "../images/nimbook.png";

const FlagshipProduct = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <section className="fp-section" ref={ref}>
      <motion.div
        className="fp-container"
        initial={{ opacity: 0, x: -100 }}
        animate={controls}
      >
        <div className="fp-top">

          {/* LEFT – IMAGE */}
          <motion.div
            className="fp-left"
            initial={{ opacity: 0, x: -80 }}
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={nimLogo} alt="Nimbooks Logo" className="fp-logo-img" />
          </motion.div>

          {/* RIGHT – TEXT */}
          <div className="fp-right">
            <h1 className="fp-brand">
              <span className="fp-n">N</span>im
              <span className="fp-book">book</span>
            </h1>

            <h2 className="fp-heading">
              Our <span className="fp-highlight">Flagship</span> Product —{" "}
              <span className="fp-highlight">Nim Books</span>
            </h2>

            <h3 className="fp-subtitle">Simplify Finance. Amplify Focus.</h3>

            <p className="fp-description">
              NimBooks is more than accounting software—it’s a business growth
              partner. By turning numbers into clear insights, it transforms
              invoices, expenses, and reports into a bigger picture: your
              business journey. With NimBooks, accounting becomes a story of
              clarity, progress, and smarter decisions.
            </p>

            {/* Button with Link */}
            <a
              href="/nimbook"
              
              rel="noopener noreferrer"
            >
              <button className="fp-btn">
                Access NimBooks <span className="fp-arrow">➜</span>
              </button>
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FlagshipProduct;
