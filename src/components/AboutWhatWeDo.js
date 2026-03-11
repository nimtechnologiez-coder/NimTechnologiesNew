import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/AboutWhatWeDo.css";

const AboutWhatWeDo = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("awd-animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        cardRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const pillars = [
        {
            icon: "🌐",
            title: "Digital Transformation",
            text: "End-to-end IT solutions that modernise your operations and accelerate your time-to-market.",
        },
        {
            icon: "💡",
            title: "Strategy & Innovation",
            text: "We integrate strategy, technology, and creativity to produce significant, measurable outcomes.",
        },
        {
            icon: "🚀",
            title: "Growth & Scalability",
            text: "Supporting companies in growing, innovating, and thriving in the digital age — at their own pace.",
        },
    ];

    return (
        <section className="awd-section py-5" ref={sectionRef}>
            <div className="container">
                {/* Section Header */}
                <div ref={titleRef} className="awd-header awd-fade-up">
                    <span className="awd-badge">What We Do</span>
                    <h2 className="awd-title">
                        Powering <span className="awd-highlight">Digital</span> Transformation
                    </h2>
                    <p className="awd-intro">
                        At NIM Technologies, we offer digital transformation services and end-to-end
                        IT solutions to support companies in growing, innovating, and thriving in the
                        digital age. To produce significant outcomes, we integrate strategy, technology,
                        and creativity.
                    </p>
                </div>

                {/* Pillar Cards */}
                <div className="row justify-content-center g-4 mt-2">
                    {pillars.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div
                                ref={(el) => (cardRefs.current[i] = el)}
                                className="awd-card awd-fade-up"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <div className="awd-icon">{item.icon}</div>
                                <h3 className="awd-card-title">{item.title}</h3>
                                <p className="awd-card-text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutWhatWeDo;
