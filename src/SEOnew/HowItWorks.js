import React from "react";
import "../style/HowItWorks.css";
 
// ✅ NORMAL REACT IMAGE IMPORTS
import phone from "../images/phonewhats.png";
import excel from "../images/excel.png";
import message from "../images/messages.png";
import calendar from "../images/calenders.png";
import reply from "../images/whatmess.png";
 
const steps = [
    {
        id: 1,
        number: "01",
        text: "Connected directly to your WhatsApp Business",
        image: phone,
        side: "left",
    },
    {
        id: 2,
        number: "02",
        text: "Lead details stored securely and accessible any time",
        image: excel,
        side: "right",
    },
    {
        id: 3,
        number: "03",
        text: "Instant owner notification for every enquiry",
        image: message,
        side: "left",
    },
    {
        id: 4,
        number: "04",
        text: "Appointment will be automatically worked on Google Calendar",
        image: calendar,
        side: "right",
    },
    {
        id: 5,
        number: "05",
        text: "Ready-made appointment reply templates",
        image: reply,
        side: "left",
    },
];
 
const HowItWorks = () => {
    return (
        <section className="how-section">
            <h2 className="how-title">How It Works</h2>
 
            <div className="how-wrapper">
                {/* SVG PATH */}
                <svg
                    className="how-path"
                    viewBox="0 0 1000 1500"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <marker
                            id="arrow"
                            markerWidth="6"
                            markerHeight="6"
                            refX="5"
                            refY="3"
                            orient="auto"
                        >
                            <path d="M0,0 L6,3 L0,6" fill="#6ccfc0" />
                        </marker>
                    </defs>
 
                    {/* 1 -> 2 */}
                    <circle cx="250" cy="150" r="6" fill="#6ccfc0" />
                    <path
                        d="M 340,150 C 550,150 750,300 750,350"
                        markerEnd="url(#arrow)"
                    />
 
                    {/* 2 -> 3 */}
                    <circle cx="750" cy="450" r="6" fill="#6ccfc0" />
                    <path
                        d="M 660,450 C 450,500 300,520 250,650"
                        markerEnd="url(#arrow)"
                    />
 
                    {/* 3 -> 4 */}
                    <circle cx="250" cy="750" r="6" fill="#6ccfc0" />
                    <path
                        d="M 340,750 C 550,750 750,820 750,950"
                        markerEnd="url(#arrow)"
                    />
 
                    {/* 4 -> 5 */}
                    <circle cx="670" cy="1050" r="6" fill="#6ccfc0" />
                    <path
                        d="M 660,1050 C 450,1050 250,1110 250,1210"
                        markerEnd="url(#arrow)"
                    />
                </svg>
 
                {/* STEPS */}
                {steps.map((step) => (
                    <div key={step.id} className={`how-step ${step.side}`}>
                        <div className="icon">
                            <img src={step.image} alt="" />
                        </div>
 
                        <div className="content">
                            <span>{step.number}</span>
                            <p>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
 
export default HowItWorks;
 
 