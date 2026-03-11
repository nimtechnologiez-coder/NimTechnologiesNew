import { Helmet } from "react-helmet";
import "../style/Hero.css";
import heroBg from "../images/seosec.png";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>SEO Services by NIM Technologies | Boost Search Rankings</title>
        <meta
          name="description"
          content="Boost your online visibility with NIM Technologies' SEO services including keyword research, on-page and off-page optimization."
        />
      </Helmet>

      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              SEO Services That Boost<br />
              Your Online Visibility
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
    </>
  );
};

export default Hero;
