import React from "react";
import "../style/careersrole.css";

const jobs = [
  {
    title: "CRO",
    type: "Full Time / Permanent – Nagercoil, India",
    desc: "As the Customer Relationship Officer (CRO), you will be responsible for building and maintaining relationships with prospective and current students, providing guidance from inquiry to enrollment and beyond.",
    applyLink: "/apply", // ✅ Internal link (React Router route)
  },
  {
    title: "Backend Developer",
    type: "Full Time / Permanent – Bengaluru, India",
    desc: "Join our backend engineering team to build scalable APIs using Node.js, Express, and MongoDB. You’ll ensure high availability, security, and performance of our server-side logic and data management.",
    applyLink: "https://forms.gle/backend-dev-form", // ✅ External link
  },
  {
    title: "UI/UX Designer",
    type: "Full Time / Permanent – Remote",
    desc: "We are seeking a creative UI/UX designer to turn our software into intuitive and visually appealing products. You’ll work closely with cross-functional teams to design consistent and delightful user experiences.",
    applyLink: "https://forms.gle/uiux-designer-form", // ✅ External link
  },
];

const OpenRoles = () => {
  return (
    <section className="open-roles-section">
      <h1 className="open-roles-heading">
        Explore <span className="highlight">Open</span> Roles
      </h1>

      <div className="roles-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            {/* LEFT CONTENT */}
            <div className="job-card-left">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-type">{job.type}</div>
              <p className="job-desc">{job.desc}</p>

              {/* APPLY NOW BUTTON */}
              {job.applyLink.startsWith("http") ? (
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apply-btn"
                >
                  APPLY NOW
                </a>
              ) : (
                <a href={job.applyLink} className="apply-btn">
                  APPLY NOW
                </a>
              )}
            </div>

            {/* RIGHT DECORATIVE AREA */}
            <div className="job-card-right">
              <div className="cross-lines"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenRoles;