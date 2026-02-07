import "../style/ProblemSolution.css";
import problemImg from "../images/Rectangle .png";
import solutionImg from "../images/Rectangle.png";

const ProblemSolution = () => {
  return (
    <section className="ps-section">
      <div className="ps-container">

        {/* ===== PROBLEM ===== */}
        <div className="ps-row">
          <div className="ps-text">
            <span className="ps-badge">The Problem They Recognize</span>
            <p>
              Most businesses receive daily enquiries through WhatsApp, missed
              calls, and after-hours messages, but many go unanswered or delayed.
              These aren’t lost leads — they’re missed responses, and every missed
              response means a lost appointment.
            </p>
          </div>

          <div className="ps-image ps-image-right">
            <img src={problemImg} alt="Problem" />
          </div>
        </div>

        {/* ===== SOLUTION ===== */}
        <div className="ps-row ps-reverse">
          <div className="ps-image ps-image-left">
            <img src={solutionImg} alt="Solution" />
          </div>

          <div className="ps-text">
            <span className="ps-badge">Our Solution</span>
            <p>
              Our WhatsApp Auto-Booking System instantly replies to enquiries and
              confirms appointments automatically, ensuring no lead is missed.
              With SEO bringing customers to you, bookings happen without needing
              a dedicated salesperson.
            </p>
          </div>
        </div>

        {/* ===== FEATURES WITH ICONS (EXACT FORMAT) ===== */}
<div className="ps-features">
  <div className="ps-feature-box">
    <i className="bi bi-person-fill"></i>
    <p>
      No Sales Person<br />Needed
    </p>
  </div>

  <div className="ps-feature-box">
    <i className="bi bi-search"></i>
    <p>
      SEO<br />Optimized
    </p>
  </div>

  <div className="ps-feature-box">
    <i className="bi bi-diagram-3"></i>
    <p>
      Fully<br />Automated
    </p>
  </div>
</div>


      </div>
    </section>
  );
};

export default ProblemSolution;
