import React from "react";
import "../style/careertalent.css";

const TalentCommunity = () => {
  return (
    <section className="talent-join-section">
    <h1 className="talent-heading">Join Our Talent Community</h1>
    <p className="talent-subtext">
      Stay connected by joining our network. We'll keep you informed
      about opportunities that match your interest and upcoming events.
    </p>
    <form className="talent-form" autoComplete="off">
      <div className="talent-form-row">
        <div className="input-group">
          <label htmlFor="fullname">FULL NAME</label>
          <input id="fullname" type="text" autoComplete="off" />
        </div>
        <div className="input-group">
          <label htmlFor="email">E-MAIL ADDRESS</label>
          <input id="email" type="email" autoComplete="off" />
        </div>
      </div>
      <button type="submit" className="talent-btn">Submit</button>
    </form>
  </section>
  );
};

export default TalentCommunity;