import React, { useEffect, useRef } from "react";
import "../style/OurValuesInAction.css";
import image from "../images/nextnim1.png"; // replace with your actual image

const OurValuesInAction = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftTextRef.current) {
              entry.target.classList.add("animate-slide-in-left");
            } else if (entry.target === rightTextRef.current) {
              entry.target.classList.add("animate-slide-in-right");
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-slide-in-right");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    // observe all elements
    [leftTextRef.current, rightTextRef.current, imageRef.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="values-section">
      <div className="values-container">
        {/* Heading */}
        <div className="values-heading">
          <h2>Our Values in Action</h2>
        </div>

        {/* Flex container */}
        <div className="values-flex">
          {/* LEFT COLUMN */}
          <div ref={leftTextRef} className="values-column fade-left">
            <div className="values-box">
              <h3>
                What We <span className="highlight">Believe</span>
              </h3>
              <p>Represents global reach</p>
              <div className="underline"></div>
            </div>

            <div className="values-box">
              <h3>
                What <span className="highlight">We Do</span>
              </h3>
              <p>Represents innovation, vision, core belief</p>
              <div className="underline"></div>
            </div>

            <div className="values-box">
              <h3>
                World <span className="highlight">Offices</span>
              </h3>
              <p>Shows projects, execution, or services</p>
              <div className="underline"></div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="values-center">
            <div className="glow-bg"></div>
            <img
              ref={imageRef}
              src={image}
              alt="Phone Mockup"
              className="values-image fade-right"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div ref={rightTextRef} className="values-column fade-right">
            <div className="values-box">
              <h3>
                Media <span className="highlight">Center</span>
              </h3>
              <p>Stands for community and sustainability</p>
              <div className="underline"></div>
            </div>

            <div className="values-box">
              <h3>
                Our <span className="highlight">People</span>
              </h3>
              <p>Updates, news, media</p>
              <div className="underline"></div>
            </div>

            <div className="values-box">
              <h3>
                Social <span className="highlight">Impact</span>
              </h3>
              <p>Symbolizes teamwork and talent</p>
              <div className="underline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesInAction;
