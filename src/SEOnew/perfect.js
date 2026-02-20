import "../style/PerfectBusiness.css";
import bgImage from "../images/perfectbg.png";
import ctaImg from "../images/person.png";

const PerfectBusiness = () => {
  return (
    <section className="pb-section">
    <div className="curve-banner">
  <p>
    No technical knowledge required from your side <br />
    We set up everything
  </p>
</div>


      {/* ===== MAIN BACKGROUND CARD ===== */}
      <div
        className="pb-card"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="pb-title">
          Perfect for Growing <br /> Businesses
        </h2>

        <div className="pb-content">
          {/* LEFT */}
          <div className="pb-glass">
            <h3>Who This Is For</h3>
            <ul>
              <li>Dental clinics</li>
              <li>Skin & hair clinics</li>
              <li>Salons</li>
              <li>Real estate agents</li>
              <li>Consultants</li>
              <li>Any business getting daily WhatsApp enquiries</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="pb-glass">
            <h3>What You Get</h3>
            <ul>
              <li>WhatsApp auto-reply setup</li>
              <li>Lead capture & tracking system</li>
              <li>Appointment confirmation templates</li>
              <li>Instant owner alerts</li>
              <li>30 days support</li>
              <li>Make this shorter for a poster or ad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== ICON FEATURES ===== */}
      <div className="pb-features">
        <div className="pb-feature">
          <i className="bi bi-clock"></i>
          <p>Install Time</p>
          <span>30 Minutes</span>
        </div>

        <div className="pb-feature">
          <i className="bi bi-calendar-check"></i>
          <p>Live on the</p>
          <span>Same Day</span>
        </div>

        <div className="pb-feature">
          <i className="bi bi-tag"></i>
          {/* <p>₹7,999</p> */}
          <p>Get Know More</p>
        </div>
      </div>

      {/* ===== CURVED CTA BOX (EXACT FORMAT) ===== */}
      <div className="pb-cta-wrapper">
        <div className="pb-cta-box">
          <div className="pb-cta-left">
            <h3>
              Ready to stop missing <br />
              customer enquiries?
            </h3>
            <button className="pb-cta-btn">Install</button>
          </div>

          <div className="pb-cta-right">
            <img className="person" src={ctaImg} alt="Customer support" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectBusiness;
