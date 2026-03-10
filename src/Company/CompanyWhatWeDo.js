import React, { useRef, useEffect } from "react";
import "../style/CompanyWhatWeDo.css";

const services = [
    {
        icon: "🌐",
        title: "Web & App Development",
        desc: "Custom-built websites, progressive web apps, and mobile applications crafted for performance, accessibility, and scale.",
    },
    {
        icon: "🤖",
        title: "AI & Automation",
        desc: "Intelligent automation workflows, machine learning models, chatbots, and AI-powered analytics for smarter decision-making.",
    },
    {
        icon: "☁️",
        title: "Cloud Solutions",
        desc: "Cloud migration, DevOps pipelines, serverless architectures, and infrastructure management on AWS, Azure, and GCP.",
    },
    {
        icon: "📊",
        title: "Digital Marketing",
        desc: "Data-driven marketing strategies — SEO, performance ads, social media management, and conversion rate optimization.",
    },
    {
        icon: "🔒",
        title: "Cybersecurity",
        desc: "Security audits, penetration testing, compliance frameworks, and ongoing monitoring to protect your digital assets.",
    },
    {
        icon: "🎨",
        title: "UI/UX Design",
        desc: "Human-centered design with wireframes, prototypes, design systems, and A/B tested interfaces that convert.",
    },
];

const CompanyWhatWeDo = () => {
    const secRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll(".cwd-item").forEach((el, i) => {
                            setTimeout(() => el.classList.add("cwd-item-visible"), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );
        if (secRef.current) observer.observe(secRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="cwd-section" ref={secRef}>
            <div className="cwd-inner">
                {/* Left label */}
                <div className="cwd-left">
                    <span className="cwd-badge">What We Do</span>
                    <h2 className="cwd-heading">
                        Services powering<br />
                        <span className="cwd-heading-accent">every industry</span>
                    </h2>
                    <p className="cwd-para">
                        No matter the sector, our core service capabilities remain the same —
                        world-class engineering, design, and strategy delivered with precision.
                    </p>
                    <a href="/service" className="cwd-link">
                        View All Services →
                    </a>
                </div>

                {/* Right grid */}
                <div className="cwd-grid">
                    {services.map((s, i) => (
                        <div key={i} className="cwd-item">
                            <div className="cwd-item-icon">{s.icon}</div>
                            <div>
                                <h4 className="cwd-item-title">{s.title}</h4>
                                <p className="cwd-item-desc">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyWhatWeDo;
