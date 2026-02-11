import "../style/Hero.css";
import heroBg from "../images/seosec.png";

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

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfGNC9Mi3c3DjEaGtzPSGUG3Z5MZpA2dd_ryvgi8dfe3gERjg/viewform?usp=publish-editor" className="hero-link">
  <button className="hero-btn">Install Now</button>
</a>


          <span className="hero-note">
  
  One-time setup
</span>

        </div>
      </div>
    </section>
  );
};

export default Hero;
