import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/ServicesHero.css";

import bgImage from "../images/servicebro.png";

const ServiceHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 120,
      once: false, // animate when entering viewport each time
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>NIM Technologies – IT Services | Web, SEO &amp; AI</title>
        <meta
          name="description"
          content="Explore NIM Technologies IT services including Web &amp; App Development, Digital Marketing, SEO, AI, and Software Solutions to grow your business online."
        />
      </Helmet>

      <section
        className="service-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="service-overlay">
          <div
            className="service-content"
            data-aos="fade-left"        // SLIDE FROM RIGHT
            data-aos-delay="200"
          >
            <span className="services-hero-btn">Our Services</span>


            <h1 data-aos="fade-left" data-aos-delay="600">
              Innovative Tech Services <br /> Built for Tomorrow
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
