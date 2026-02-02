import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/CeoSection.css";
import ceoImg from "../images/OurCEO.png";

const CeoSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const imageNode = imageRef.current;
    const textNode = textRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-slide-in");
            observer.unobserve(entry.target); // trigger once
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imageNode) observer.observe(imageNode);
    if (textNode) observer.observe(textNode);

    return () => {
      if (imageNode) observer.unobserve(imageNode);
      if (textNode) observer.unobserve(textNode);
    };
  }, []);

  return (
    <section className="ceo-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left Image */}
          <div className="col-lg-5 col-md-12 mb-4 mb-lg-0 d-flex justify-content-center">
            <div ref={imageRef} className="ceo-image-wrapper fade-slide">
              <img
                src={ceoImg}
                alt="CEO Suruthi T S"
                className="img-fluid rounded-4 ceo-img"
              />
            </div>
          </div>

          {/* Right Text */}
          <div ref={textRef} className="col-lg-7 col-md-12 ceo-text fade-slide">
            <h4 className="fw-bold mb-3">
              About Our CEO – <span className="highlight">Suruthi T S</span>
            </h4>

            <p>
              Suruthi T S is the visionary Founder and CEO of Nim Technologies, a
              forward-thinking organization committed to innovation and
              excellence in technology. With expertise in Power BI Development,
              Data and Financial Analysis, SQL, Python, and Data Modeling, she
              brings a strong analytical and strategic approach to every project.
            </p>

            <p>
              Her deep understanding of the stock market and data-driven
              decision-making has guided Nim Technologies toward consistent
              growth and success. Suruthi is dedicated to empowering professionals
              through continuous learning, effort, and innovation — values that
              form the core of Nim Technologies.
            </p>

            <div className="tagline mt-4">
              Together We <span className="highlight">Build</span> Brilliance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
