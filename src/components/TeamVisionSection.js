import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/TeamVisionSection.css";
import visionImg from "../images/aboutusblack.jpeg"; // replace with your actual image

const TeamVision = () => {
  const imageRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-slide-in");
            observer.unobserve(entry.target); // trigger only once
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe stat cards
    statRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // Observe the image
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      statRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="team-vision-section py-5">
      <div className="container text-center">
        {/* === Top Stats (Animated) === */}
        <div className="row justify-content-center mb-5">
          {[
            { number: "50+", text: "TEAM MEMBERS" },
            { number: "25+", text: "Winning Projects" },
            { number: "100+", text: "Completed Projects" },
            { number: "250+", text: "Clients Review" },
          ].map((item, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div
                ref={(el) => (statRefs.current[index] = el)}
                className="stat-box fade-slide"
                style={{ transitionDelay: `${index * 0.2}s` }} // stagger animation
              >
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* === Vision Image with Scroll Animation === */}
        <div
          ref={imageRef}
          className="vision-area position-relative mx-auto mb-5 fade-slide"
        >
          <img src={visionImg} alt="Team Vision" className="vision-img" />
        </div>

        {/* === Tagline === */}
        <p className="vision-tagline mt-4">
          Together, we <span className="highlight">innovate</span>. Together, we{" "}
          <span className="highlight">grow</span>. <br />
          Together, we <span className="highlight">build the future</span>.
        </p>
      </div>
    </section>
  );
};

export default TeamVision;
