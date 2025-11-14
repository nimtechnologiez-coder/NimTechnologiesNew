import React from "react";
import "../style/careernextregister.css";

const CareerNextRegister = () => {
  return (
    <div className="cn-register-container">
      <h2 className="cn-register-title">Register</h2>

      <form className="cn-register-form">
        <div className="cn-name-fields">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Location" required />
        <input type="text" placeholder="Current/Previous Job Title" required />
        <input type="text" placeholder="Current/Previous Company" required />

        <div className="cn-upload-wrapper">
          <label htmlFor="cn-cv-upload" className="cn-upload-btn">
            Upload Your CV
          </label>
          <input type="file" id="cn-cv-upload" hidden />
        </div>
      </form>
    </div>
  );
};

export default CareerNextRegister;
