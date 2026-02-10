import React from "react";
import "../style/Nimbook.css";
import heroBg from "../images/productgpt.png";
import featureImg from "../images/tablet_image 1.png"; // Update path to your features image
import cardBg from "../images/Rectangle-34625110.jpg";
import cardBg2 from "../images/Rectangle-34625111 1.png";
import iconList from "../images/Vector 1.png";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from "aos";
import { motion } from 'framer-motion';


<motion.div whileHover={{ scale: 1.05, y: -10, opacity: 0.9 }}>
  Hover me
</motion.div>

const Nimbook = () => {

 useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
return(
  <div >
    {/* Hero Section */}
    <div className="nimbook-hero" data-aos="fade-up">
      <div className="hero-img-wrapper">
        <div className="hero-overlay-content">
          <h1>
            Nim <span className="book-text">Books</span>
          </h1>
          <p  className="hero-subtitle">
            Comprehensive <br />
            accounting software for <br />
            growing businesses
          </p>
        </div>
        <img src={heroBg} alt="" className="hero-bg-img" />
      </div>
    </div>
    {/* Flagship Section */}
    <section className="flagship-section" data-aos="fade-up" data-aos-delay="100">
      <h1>
        <span className="flagship-nim">Nim</span>{" "}
        <span className="flagship-books">Books</span>
      </h1>
      <h2>
        <span className="flagship-nim">Our Flagship</span>{" "}
        <span className="flagship-books">Product</span>
      </h2>
      <p>
        Nim Books is an intelligent accounting software<br/> designed for modern
        businesses to streamline financial operations with real-time insights
        and cloud access.
      </p>
      <button className="flagship-btn">Access Nim Books</button>
    </section>
    {/* Feature Highlight Section */}
    <section className="feature-highlight" data-aos="fade-up" data-aos-delay="200">
  <div className="feature-list">
    <ul>
      <li>Smart Financial Insights</li>
      <li>GST-Ready Invoicing</li>
      <li>Bank-Level Security</li>
      <li>Works Seamlessly on Web &amp; Mobile</li>
    </ul>
  </div>
  <div className="feature-image">
    <img src={featureImg} alt="Nimbook Tablet" />
  </div>
</section>

{/* Must-Have Features Section */}
    <section className="modern-features-root" data-aos="fade-up" data-aos-delay="300">
      <h2 className="modern-features-title">
        Features that your<br />accounting software must have!
      </h2>
      <div className="modern-features-card-bg" style={{ backgroundImage: `url(${cardBg})` } } data-aos="fade-left"
  data-aos-delay="100">
        <div className="modern-features-overlay">
          <h3>Smart Accounting for Smarter Businesses</h3>
          <div className="modern-features-desc">
            Nim Books is a modern accounting solution crafted for businesses worldwide. <br/>Manage your finances effortlessly with a software.
          </div>
          <div className="modern-features-list-row">
            <div className="modern-features-col">
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Minimal design showcasing
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Futuristic dashboard preview
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Abstract financial graphic
              </div>
            </div>
            <div className="modern-features-col">
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Crafted for business worldwide.
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Software that grows with you.
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Professional global Saas look.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padd" data-aos="fade-right" data-aos-delay="300"> 
         <div className="modern-features-card-bg" style={{ backgroundImage: `url(${cardBg2})` }}>
        <div className="modern-features-overlay">
          <h3>Your Business. Your Books. Simplified</h3>
          <div className="modern-features-desc">
            Stay on top of your payables. Track bills, automate recurring expenses, and<br/> include client expenses on invoices.
          </div>
          <div className="modern-features-list-row">
            <div className="modern-features-col">
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                The Nim Books Difference
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Borderless Accounting
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Adaptive Automation
              </div>
            </div>
            <div className="modern-features-col">
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                A business growth partner
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Unified Financial Intelligence
              </div>
              <div className="modern-features-list-item">
                <img src={iconList} alt="" className="modern-features-icon" />
                Insightful AI-Powered Analytics
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

  <section className="nimbook-designed-section" data-aos="fade-up" data-aos-delay="400">
  <h2 className="designed-title">
    Designed for Every Business.<br />
    Perfected for Yours.
  </h2>
<p className="designed-desc">
  No matter your sector, Nim Books adapts to your<br /> 
  workflows and scales with your growth — making<br /> 
  finance simpler, smarter, and globally compliant
</p>
</section>

<section className="nimbook-business-types" data-aos="fade-up" data-aos-delay="500">
  <div className="business-tag-row">
    <div className="business-tag">Retailers</div>
    <div className="business-tag">Wholesalers</div>
    <div className="business-tag">Manufacturers</div>
    <div className="business-tag">Retailers</div>
  </div>
  <div className="business-tag-row">
    <div className="business-tag business-tag-bold">Distributors</div>
    <div className="business-tag">E-commerce</div>
    <div className="business-tag">Consultants</div>
    <div className="business-tag">Agencies</div>
  </div>
  <div className="business-tag-row business-tag-row-center">
    <div className="business-tag">SaaS Companies</div>
    <div className="business-tag">Freelancers</div>
    <div className="business-tag">Professionals</div>
  </div>
</section>

<section className="nimbook-testimonial-section" data-aos="fade-up" data-aos-delay="600">
  <div className="nimbook-testimonial-card">
    Nim Books streamlined what QuickBooks couldn’t, saving us hours. Now we are able to manage our financial structure better.
  </div>
</section>
</div>
);

};

export default Nimbook;