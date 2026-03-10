import React, { useRef, useEffect } from "react";
import "../style/CompanyIndustries.css";

const industries = [
    {
        icon: "🛒",
        name: "Retail",
        description:
            "We build omnichannel retail platforms — from inventory management to personalized shopping experiences — helping retailers scale online and offline seamlessly.",
        tags: ["E-Commerce", "POS Systems", "Inventory AI", "Loyalty Programs"],
        color: "#4f46e5",
        link: "#retail",
    },
    {
        icon: "🏥",
        name: "Healthcare",
        description:
            "Transforming patient care with HIPAA-compliant apps, telemedicine portals, appointment scheduling systems, and EHR integrations that modernize clinical workflows.",
        tags: ["Telemedicine", "EHR Integration", "Patient Apps", "HIPAA Compliant"],
        color: "#0ea5e9",
        link: "#healthcare",
    },
    {
        icon: "🏦",
        name: "Finance & Fintech",
        description:
            "Secure, scalable fintech solutions including digital banking dashboards, payment gateways, loan origination platforms, and real-time transaction analytics.",
        tags: ["Payment Gateway", "Digital Banking", "Loan Platforms", "Analytics"],
        color: "#f59e0b",
        link: "#fintech",
    },
    {
        icon: "🎓",
        name: "Education",
        description:
            "End-to-end EdTech platforms with live classes, LMS portals, gamified learning, placement tracking, and AI-powered personalization for modern learners.",
        tags: ["LMS", "Live Classes", "Placement Tracking", "AI Tutors"],
        color: "#10b981",
        link: "#education",
    },
    {
        icon: "🏗️",
        name: "Real Estate",
        description:
            "Property listing platforms, CRM tools for agents, virtual tours, lead management systems, and analytics dashboards that power data-driven real estate decisions.",
        tags: ["Property Listings", "Virtual Tours", "CRM", "Lead Management"],
        color: "#8b5cf6",
        link: "#realestate",
    },
    {
        icon: "🍔",
        name: "Food & Restaurant",
        description:
            "Full-stack restaurant tech — online ordering platforms, kitchen display systems, delivery tracking, QR menus, and loyalty rewards built for the food industry.",
        tags: ["Online Ordering", "KDS", "QR Menus", "Delivery Tracking"],
        color: "#ef4444",
        link: "#food",
    },
    {
        icon: "🚚",
        name: "Logistics & Supply Chain",
        description:
            "Route optimization, fleet management, warehouse automation, real-time tracking dashboards, and supply chain visibility tools for modern logistics operations.",
        tags: ["Fleet Management", "Route Optimization", "Warehouse", "Tracking"],
        color: "#06b6d4",
        link: "#logistics",
    },
    {
        icon: "🏭",
        name: "Manufacturing",
        description:
            "Digital transformation for manufacturers — IoT dashboards, quality control systems, predictive maintenance alerts, and production analytics for Industry 4.0.",
        tags: ["IoT Dashboards", "Quality Control", "Predictive Maintenance", "Industry 4.0"],
        color: "#f97316",
        link: "#manufacturing",
    },
];

const CompanyIndustries = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ci-card-visible");
                    }
                });
            },
            { threshold: 0.12 }
        );
        cardRefs.current.forEach((ref) => ref && observer.observe(ref));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="ci-section" id="comp-industries">
            {/* Header */}
            <div className="ci-header">
                <span className="ci-badge">Industries We Serve</span>
                <h2 className="ci-title">
                    The sectors where we've made
                    <span className="ci-title-accent"> real impact</span>
                </h2>
                <p className="ci-sub">
                    Across verticals and geographies, NimTechnologies delivers tailored
                    digital solutions that move businesses forward.
                </p>
            </div>

            {/* Grid */}
            <div className="ci-grid">
                {industries.map((ind, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardRefs.current[i] = el)}
                        className="ci-card ci-card-anim"
                        style={{ "--ci-accent": ind.color, transitionDelay: `${(i % 4) * 0.1}s` }}
                    >
                        <div className="ci-card-top">
                            <div className="ci-icon-wrap" style={{ background: `${ind.color}18` }}>
                                <span className="ci-icon">{ind.icon}</span>
                            </div>
                            <h3 className="ci-card-name">{ind.name}</h3>
                        </div>

                        <p className="ci-card-desc">{ind.description}</p>

                        <div className="ci-tags">
                            {ind.tags.map((tag, j) => (
                                <span key={j} className="ci-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="ci-card-bar" style={{ background: ind.color }} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyIndustries;
