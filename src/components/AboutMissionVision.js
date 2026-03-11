import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/AboutMissionVision.css";

const AboutMissionVision = () => {
    const missionRef = useRef(null);
    const visionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("amv-animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (missionRef.current) observer.observe(missionRef.current);
        if (visionRef.current) observer.observe(visionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="amv-section py-5">
            <div className="container">

                {/* Section Label */}
                <div className="amv-top-badge">
                    <span className="amv-badge">Our Mission &amp; Vision</span>
                </div>

                <div className="row g-5 align-items-stretch mt-1">

                    {/* === MISSION === */}
                    <div className="col-lg-6">
                        <div ref={missionRef} className="amv-card amv-card-mission amv-fade-left">
                            <div className="amv-card-icon">🎯</div>
                            <h2 className="amv-card-heading">Our Mission</h2>
                            <div className="amv-divider"></div>
                            <p className="amv-card-text">
                                Our goal is to provide online and mobile development, cloud solutions,
                                innovative and scalable IT services, and digital marketing services that
                                promote <span className="amv-highlight">sustainable business growth</span>{" "}
                                and{" "}
                                <span className="amv-highlight">digital transformation</span>.
                            </p>
                            <ul className="amv-list">
                                <li>Web &amp; Mobile Development</li>
                                <li>Cloud Solutions</li>
                                <li>Scalable IT Services</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </div>
                    </div>

                    {/* === VISION === */}
                    <div className="col-lg-6">
                        <div ref={visionRef} className="amv-card amv-card-vision amv-fade-right">
                            <div className="amv-card-icon">🌍</div>
                            <h2 className="amv-card-heading">Our Vision</h2>
                            <div className="amv-divider"></div>
                            <p className="amv-card-text">
                                Our goal is to establish ourselves as a reputable{" "}
                                <span className="amv-highlight">worldwide leader</span> in software
                                development, SaaS solutions, AI-driven technologies, and digital
                                transformation services, enabling companies with{" "}
                                <span className="amv-highlight">cutting-edge technology</span>.
                            </p>
                            <ul className="amv-list">
                                <li>Software Development</li>
                                <li>SaaS Solutions</li>
                                <li>AI-Driven Technologies</li>
                                <li>Digital Transformation</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMissionVision;
