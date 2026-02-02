import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/TeamVisionSection.css";
import visionImg from "../images/aboutusblack.jpeg";

const TeamVision = () => {
  const imageRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const statNodes = statRefs.current;
    const imageNode = imageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-slide-in");
            observer.unobserve(entry.target); // trigger once
          }
        });
      },
      { threshold: 0.2 }
    );

    // observe stat cards
    statNodes.forEach((node) => {
      if (node) observer.observe(node);
    });

    // observe image
    if (imageNode) observer.observe(imageNode);

    return () => {
      statNodes.forEach((node) => {
        if (node) observer.unobserve(node);
      });

      if (imageNode) observer.unobserve(imageNode);
    };
  }, []);

  return (
    <section className="team-vision-section py-5">
      <div className="container text-center">
        {/* Top Stats */}
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
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Image */}
        <div
          ref={imageRef}
          className="vision-area position-relative mx-auto mb-5 fade-slide"
        >
          <img src={visionImg} alt="Team Vision" className="vision-img" />
        </div>

        {/* Tagline */}
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
