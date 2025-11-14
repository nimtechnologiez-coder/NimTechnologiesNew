import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Footer.css";
import startupImg from "../images/footer.png"; // replace with your image
import msmeImg from "../images/Footer1.png"; // replace with your image

import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row align-items-start gy-4">

          {/* === Logos Section === */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <img src={startupImg} alt="Startup India" className="footer-logo mb-3" />
            <img src={msmeImg} alt="MSME" className="footer-logo" />
          </div>

          {/* === Company Info === */}
          <div className="col-lg-5 col-md-6 text-center text-md-start">
            <h5 className="footer-title">
              <span className="fw-bold">NIM </span>
              <span className="highlight">Technologies</span>
            </h5>
            <p className="footer-desc">
              Engineering digital intelligence that drives growth. From AI and
              Cloud to Data Analytics and beyond.
            </p>

            <div className="footer-icons mt-3">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          {/* === Quick Links === */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Industries</a></li>
              <li><a href="#">Academy</a></li>
            </ul>
          </div>

          {/* === Get in Touch === */}
          <div className="col-lg-2 col-md-6 text-center text-md-start">
            <h6 className="footer-heading">Get in Touch</h6>
            <ul className="footer-contact">
              <li><HiMail /> info@nimtech.com</li>
              <li><HiPhone /> +1 (234) 567-890</li>
              <li><HiLocationMarker /> Global Presence<br />7+ Countries</li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        {/* === Bottom Row === */}
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 small">
              © 2025 NIM Technologies. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="footer-policy">Privacy Policy</a>
            <a href="#" className="footer-policy">Terms of Service</a>
            <a href="#" className="footer-policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
