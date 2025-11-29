import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import brainImg from "../images/WhoWe.png"; // ✅ Ensure correct path

const AboutPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const tagRef = useRef(null);
  const teamTagRef = useRef(null);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-slide-in");
            }, i * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [
      textRef.current,
      imageRef.current,
      tagRef.current,
      teamTagRef.current,
      ...timelineRefs.current,
    ];

    elements.filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <style>{`
        /* ===== GENERAL ===== */
        .about-who {
          font-family: "Poppins", sans-serif;
          color: #0c1e3b;
          background-color: #fff;
        }

        /* ===== TEXT STYLES ===== */
        .who-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .who-subtitle {
          font-size: 1.6rem;
          color: #000;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: #00a693;
          font-weight: 700;
        }

        .who-description {
          font-size: 1.1rem;
          color: #444;
          line-height: 1.9;
          margin-bottom: 0.8rem;
        }

        /* ===== ANIMATIONS ===== */
        .fade-left,
        .fade-right {
          opacity: 0;
          transition: all 1s ease-out;
        }
        .fade-left {
          transform: translateX(-80px);
        }
        .fade-right {
          transform: translateX(80px);
        }
        .animate-slide-in {
          opacity: 1;
          transform: translateX(0);
        }
        .fade-left.animate-slide-in,
        .fade-right.animate-slide-in {
          transition-delay: 0.2s;
        }

        /* ===== IMAGE CARD ===== */
        .brain-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          width: 370px;
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.1);
        }

        .brain-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
        }

        .brain-info {
          background: #aef5e9;
          padding: 25px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }

        .brain-info h4 {
          font-size: 1.2rem;
          color: #000;
        }

        .brain-info p {
          font-size: 1.05rem;
          color: #222;
          line-height: 1.7;
        }

        /* ===== TIMELINE SECTION ===== */
        .timeline-section {
          font-family: "Poppins", sans-serif;
          background: #ffffff;
          color: #0c1e3b;
          text-align: center;
          padding: 80px 0;
        }

        /* === Gradient Tag === */
        .future-tag {
          display: inline-block;
          background: linear-gradient(90deg, #b3fff2 0%, #ffffff 100%);
          padding: 14px 40px;
          border-radius: 50px;
          font-size: 1.6rem;
          font-weight: 700;
          color: #000;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          margin-bottom: 70px;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .future-tag.animate-slide-in {
          opacity: 1;
          transform: translateY(0);
        }

        .future-tag .highlight {
          color: #00796b;
          font-weight: 700;
        }

        .future-tag:hover {
          transform: translateY(-5px);
          box-shadow: 0px 6px 18px rgba(0, 166, 147, 0.3);
        }

        /* === Timeline Cards === */
        .timeline-containerr {
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex-wrap: wrap;
          gap: 30px;
          padding: 0 60px;
        }

        .timeline-card {
          background: #fff;
          border: 2px solid #00a693;
          border-radius: 0 0 25px 25px;
          border-bottom-left-radius: 60px;
          width: 230px;
          height: 280px;
          padding: 30px 20px;
          box-shadow: 8px 8px 0px #b2e9df;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .timeline-card.animate-slide-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .timeline-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 10px 10px 0px #91e3d4;
          transition: all 0.4s ease;
        }

        /* === Year Circle === */
        .year-circle {
          width: 85px;
          height: 85px;
          background: #6ec1b2;
          color: #000;
          font-weight: 700;
          font-size: 1.4rem;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        /* === Team Tag === */
        .team-tag {
          display: inline-block;
          background: linear-gradient(90deg, #b3fff2 0%, #ffffff 100%);
          padding: 14px 40px;
          border-radius: 50px;
          font-size: 1.6rem;
          font-weight: 700;
          color: #000;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          margin: 60px auto 0;
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s ease;
        }

        .team-tag.animate-slide-in {
          opacity: 1;
          transform: translateY(0);
        }

        .team-tag:hover {
          transform: translateY(-4px);
          box-shadow: 0px 6px 18px rgba(0, 166, 147, 0.3);
        }

        /* === Responsive === */
        @media (max-width: 992px) {
          .who-title {
            font-size: 2.4rem;
          }
          .who-subtitle {
            font-size: 1.4rem;
          }
          .brain-card {
            width: 80%;
          }
        }

        @media (max-width: 768px) {
          .timeline-containerr {
            flex-wrap: wrap;
            justify-content: center;
            padding: 0 30px;
          }
          .timeline-card {
            width: 80%;
            height: auto;
          }
          .future-tag, .team-tag {
            font-size: 1.3rem;
            padding: 12px 30px;
          }
        }

        @media (max-width: 576px) {
          .about-who {
            text-align: center;
          }
          .who-title {
            font-size: 2rem;
          }
          .timeline-containerr {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .timeline-card {
            width: 90%;
            padding: 25px 15px;
          }
        }
      `}</style>

      {/* ===== SECTION 1: WHO WE ARE ===== */}
      <section className="about-who py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              ref={textRef}
              className="col-lg-6 col-md-12 about-text mb-5 mb-lg-0 fade-left"
            >
              <h2 className="who-title">Who We Are</h2>
              <h3 className="who-subtitle">
                Choose The <span className="fw-bold">Best IT</span> &{" "}
                <span className="highlight">Digital Solutions</span>{" "}
                <span className="fw-bold">Partner</span>
              </h3>
              <p className="who-description">
                NIM Technologies is a fast-growing tech startup dedicated to
                delivering innovative digital solutions that empower businesses
                to grow smarter and faster.
              </p>
              <p className="who-description">
                We provide web development, mobile apps, UI/UX design, AI
                integration, and cloud services with a focus on creativity and
                quality.
              </p>
            </div>

            <div className="col-lg-5 col-md-12 d-flex justify-content-center">
              <div ref={imageRef} className="brain-card shadow-sm fade-right">
                <img
                  src={brainImg}
                  alt="Digital Innovation"
                  className="brain-img"
                />
                <div className="brain-info text-center">
                  <h4 className="fw-bold mb-2">
                    Best Emerging Tech Company
                  </h4>
                  <p className="m-0">
                    We adapt our delivery to meet your business needs, ensuring
                    quality, consistency, and long-term results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: TIMELINE ===== */}
      <section className="timeline-section text-center py-5">
        <div ref={tagRef} className="future-tag fade-left">
          Innovating the <span className="highlight">Digital</span> Future
        </div>

        <div className="timeline-containerr">
          {[
            {
              year: "2020",
              title: "The Beginning",
              text: "NIM Technologies was founded with a vision to deliver affordable, high-quality digital solutions.",
            },
            {
              year: "2021",
              title: "Building Foundations",
              text: "Started serving local businesses with web and app development projects.",
            },
            {
              year: "2022",
              title: "Expanding Horizons",
              text: "Introduced cloud and AI-based solutions to improve business efficiency.",
            },
            {
              year: "2023",
              title: "Growing Strong",
              text: "Partnered with multiple startups and enterprises across India.",
            },
            {
              year: "2024",
              title: "Trusted Tech Partner",
              text: "Recognized as a reliable technology partner for innovation-driven companies.",
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => (timelineRefs.current[index] = el)}
              className="timeline-card fade-left"
            >
              <div className="year-circle">{card.year}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <div ref={teamTagRef} className="team-tag fade-right mt-5">
          Team Behind <span className="highlight">NIM</span> Technologies
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
