import "../style/Hero.css";
import heroBg from "../images/back.png";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Smart SEO<br />
            Lead Automation<br />
            Growing Businesses
          </h1>

          <p>
            Installed in 30 minutes on your existing<br />
            WhatsApp Business.
          </p>

          <button className="hero-btn">Install Now</button>

          <span className="hero-note">
  
  One-time setup
</span>

        </div>
      </div>
    </section>
  );
};

export default Hero;
