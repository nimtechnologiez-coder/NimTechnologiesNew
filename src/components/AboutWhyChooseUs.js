import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/AboutWhyChooseUs.css";

const AboutWhyChooseUs = () => {
    const titleRef = useRef(null);
    const rowRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("awc-animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (titleRef.current) observer.observe(titleRef.current);
        rowRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const reasons = [
        { icon: "🔒", label: "Secure by Design", desc: "Every solution is built with enterprise-grade security from day one." },
        { icon: "📈", label: "Scalable Architecture", desc: "Technology that grows with your business — no rebuilds needed." },
        { icon: "🔮", label: "Future-Ready Tech", desc: "Cutting-edge technologies and data-driven tactics keep you ahead." },
        { icon: "🎯", label: "Client-Focused Strategy", desc: "Your goals shape our roadmap. We measure success by your outcomes." },
        { icon: "⚡", label: "High-Performance Results", desc: "Quantifiable growth and measurable KPIs on every project." },
        { icon: "🤝", label: "Dedicated to Innovation", desc: "Continuous R&D ensures you always get the best solutions." },
    ];

    return (
        <section className="awc-section py-5">
            <div className="container">
                {/* Header */}
                <div ref={titleRef} className="awc-header awc-fade-up">
                    <span className="awc-badge">Why Choose Us</span>
                    <h2 className="awc-title">
                        Your Growth, <span className="awc-highlight">Our Priority</span>
                    </h2>
                    <p className="awc-intro">
                        At NIM Technologies, we provide digital solutions that are secure, scalable,
                        and prepared for the future using cutting-edge technologies and data-driven
                        tactics. We guarantee quantifiable growth and high-performance outcomes for
                        each project with a client-focused strategy and dedication to innovation.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="row g-4 mt-2">
                    {reasons.map((item, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div
                                ref={(el) => (rowRefs.current[i] = el)}
                                className="awc-item awc-fade-up"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <span className="awc-item-icon">{item.icon}</span>
                                <div>
                                    <h4 className="awc-item-label">{item.label}</h4>
                                    <p className="awc-item-desc">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutWhyChooseUs;
