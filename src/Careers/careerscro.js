import React from "react";
import "../style/careerscro.css";
import Careers from "../Careers/careers"; // ✅ import your Careers hero section
// import RegisterForm from "./careernextregister";
// import TalentCommunity from "./careertalent";

const CroPage = () => {
  return (
    <div className="cro-page">
      {/* ✅ Top Careers Banner */}
      <Careers />

      {/* ✅ CRO Role Section */}
      <section className="cro-section">
        <h1 className="cro-title">Customer Relationship Officer (CRO)</h1>
        <p className="cro-location">Location: Nagercoil</p>
        <p className="cro-department">Department: Customer Relations</p>

        <h3 className="cro-summary-heading">Job Summary:</h3>
        <p className="cro-summary">
          We are seeking a dedicated <strong>Customer Relationship Officer</strong> to strengthen
          relationships with prospective and current students. The ideal candidate will provide
          guidance throughout the student lifecycle—from course inquiries to enrollment and
          ongoing support—ensuring a seamless and positive academic experience.
        </p>

        <h3 className="cro-resp-heading">Key Responsibilities:</h3>
        <ul className="cro-resp-list">
          <li>
            Serve as the primary contact for course information, enrollment, and general student inquiries.
          </li>
          <li>
            Assist students in selecting suitable IT programs and navigating admission procedures.
          </li>
          <li>
            Oversee onboarding and orientation to ensure a smooth transition into the academy.
          </li>
          <li>
            Maintain accurate and confidential student records within the CRM system.
          </li>
          <li>
            Coordinate with marketing and admissions teams to support recruitment and conversion initiatives.
          </li>
          <li>
            Monitor student satisfaction, collect feedback, and suggest improvements.
          </li>
          <li>
            Participate in organizing student engagement events, webinars, and workshops.
          </li>
        </ul>
      </section>

      {/* ✅ Registration & Talent Community Sections */}
      {/* <RegisterForm />
      <TalentCommunity /> */}
    </div>
  );
};

export default CroPage;