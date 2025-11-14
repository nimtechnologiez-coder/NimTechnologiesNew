import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/TeamSection.css";
import teamBanner from "../images/Nimabout.png"; // replace with your actual image

const TeamSection = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            observer.unobserve(entry.target); // ✅ one-time animation
          }
        });
      },
      { threshold: 0.3 }
    );

    // Safely observe valid refs
    const elementsToObserve = [bannerRef.current, textRef.current].filter(Boolean);
    elementsToObserve.forEach((el) => {
      if (el instanceof Element) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="team-section py-5">
      <div className="container">
        {/* === Banner Section with Scroll Animation === */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              ref={bannerRef}
              className="team-banner position-relative fade-up"
              style={{ backgroundImage: `url(${teamBanner})` }}
            >
              <button className="team-btn">Meet Our Team</button>
            </div>
          </div>
        </div>

        {/* === Description Section with Scroll Animation === */}
        <div className="row mt-5">
          <div className="col-12">
            <p ref={textRef} className="team-description fade-up">
              At Nim Technologies, we believe that great achievements are not
              built by individuals but by passionate minds working together
              toward a shared vision. Our team is the driving force behind every
              innovation, every project, and every milestone we reach.
              <br />
              <br />
              Each member brings unique expertise — from development and design
              to coordination and training — shaping our company into a space of
              creativity, learning, and collaboration. Sheeja, our HR Manager,
              nurtures a positive and empowering work culture. Rathesh, our
              Project Coordinator, ensures every idea transforms seamlessly into
              execution. Dhanush, Mithun, and SaiKumar, our talented developers,
              turn complex challenges into smart and efficient solutions, while
              Mithun and Babisha also guide aspiring minds through training and
              mentorship. Jasmine Soundariya, our creative UI/UX Designer,
              crafts intuitive digital experiences that connect innovation with
              human touch.
              <br />
              <br />
              Together, we are more than just a team — we are a family of
              thinkers, creators, and dreamers dedicated to building technology
              that makes a difference. At Nim Technologies, every idea is
              valued, every skill is celebrated, and every success is shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
