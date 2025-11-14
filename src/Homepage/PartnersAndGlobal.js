import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/PartnersAndGlobal.css";
import partnerImg from "../images/Ellipse 1274.png";
import worldMap from "../images/Ellipse 1275.png";
import worldMapp from "../images/map.png";

const PartnersAndGlobal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120 });
  }, []);

  return (
    <div className="partners-global-wrapper">
      {/* ===================== PARTNERS SECTION ===================== */}
      <section className="partners-section">
        <h2 className="partners-title" data-aos="fade-up">
          Our Partners <span>Believe</span> in Us
        </h2>

        <p className="partners-subtitle" data-aos="fade-up" data-aos-delay="150">
          Collaboration is at the heart of innovation. Our long-term partnerships
          with clients and brands speak for our commitment to excellence.
        </p>

        <div className="partners-content">
          {/* LEFT SEMI-CIRCLE IMAGE */}
          <div
            className="partners-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="outer-circle">
              <img src={partnerImg} alt="Teamwork" className="circle-bg" />
              <div className="inner-circle">
                <img src={worldMap} alt="Center" className="center-image" />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="partners-right"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <button className="partner-btn">Become Our Partner</button>

            <div className="stats-box top-box" data-aos="zoom-in" data-aos-delay="400">
              <h3>2k+</h3>
              <p>Projects Delivered</p>
            </div>

            <div className="stats-box mid-box" data-aos="zoom-in" data-aos-delay="500">
              <h3>1k+</h3>
              <p>Trusted Clients</p>
            </div>

            <div className="stats-box bottom-box" data-aos="zoom-in" data-aos-delay="600">
              <h3>5k+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GLOBAL FOOTPRINT SECTION ===================== */}
      <section className="global-section">
        <h2 className="global-title" data-aos="fade-up">
          Our <span>Global</span> Footprint — The{" "}
          <span className="highlight">Nim</span> Impact
        </h2>

        <p className="global-subtitle" data-aos="fade-up" data-aos-delay="150">
          We’re proud of our journey — but we’re even prouder of the impact
          we’ve made.
        </p>

        <div className="map-container" data-aos="fade-up" data-aos-delay="250">
          <img src={worldMapp} alt="World Map" className="world-map" />
        </div>

        {/* ✅ Added Stats Section (same UI, same gradient as image) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "60px",
            padding: "80px 0",
          }}
        >
          {[
            { num: "7+", text: "Countries Served", delay: 200 },
            { num: "120+", text: "Projects Delivered", delay: 300 },
            { num: "15+", text: "Enterprise Platforms Built", delay: 400 },
            { num: "95%", text: "Client Retention", delay: 500 },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={item.delay}
              style={{
                width: "220px",
                height: "180px",
                background:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(1, 133, 119, 0.35) 50%, rgba(1, 148, 133, 0) 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "6px",
              }}
            >
              <h2
                style={{
                  fontSize: "42px",
                  margin: "0",
                  fontWeight: "700",
                  color: "#00685fff",
                }}
              >
                {item.num}
              </h2>
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontSize: "17px",
                  fontWeight: "500",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnersAndGlobal;
