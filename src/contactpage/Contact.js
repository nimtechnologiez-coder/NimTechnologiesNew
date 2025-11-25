import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 
import "../style/contact.css";

const ContactPage = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_t1j2t9l",      // ✅ Your Service ID
        "template_2ro3y4l",     // ✅ Your Template ID
        formRef.current,        // sends the whole form
        "uxCZ6WGvKJaBi87p0"     // ✅ Your Public Key
      )
      .then(
        () => {
          alert("Your message has been sent successfully! 🎉");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact-body">
      {/* ========================== 1. HEADING SECTION ========================== */}
      <section className="contact-heading fade-up">
        <h1>
          Let’s Build Something <span>Extraordinary</span> Together
        </h1>
        <p>
          At NIM Technologies, we believe that great partnerships start with meaningful conversations.
          Whether you’re exploring collaboration opportunities, seeking tailored digital solutions,
          or looking to bring your ideas to life — our team is ready with expertise and commitment.
        </p>
      </section>

      {/* ========================== 2. ADDRESS + FORM ========================== */}
      <section className="contact-main">
        
        {/* LEFT — Address Info */}
        <div className="contact-left slide-right">
          <h2>COME VISIT US AT</h2>
          <h1>
            <span>Our</span> Address
          </h1>

          {/* Phone */}
          <div className="contact-card">
            <div className="icon-box">
              <img src="https://img.icons8.com/ios-filled/90/000000/phone.png" alt="phone" />
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>+91 7418855108</p>
            </div>
          </div>

          {/* Address */}
          <div className="contact-card">
            <div className="icon-box">
              <img src="https://img.icons8.com/ios-filled/90/000000/marker.png" alt="address" />
            </div>
            <div>
              <h3>Our Address</h3>
              <p>
                57/57b, Rajakkamangalam Rd, Thambathu,<br />
                Kurusady, North Konam, Nagercoil,<br />
                Tamil Nadu 629170
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="icon-box">
              <img src="https://img.icons8.com/ios-filled/100/000000/new-post.png" alt="email" />
            </div>
            <div>
              <h3>Email</h3>
              <p>nimtechnologiez@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="contact-right slide-left">
          <div className="form-header">
            <h1>
              WE'LL MAKE A <span>GREAT</span> TEAM
            </h1>
            <p>
              Have a project for us? <span>Get in touch!</span>
            </p>
          </div>

          {/* ⭐ EMAILJS FORM ⭐ */}
          <form ref={formRef} onSubmit={sendEmail} className="contact-form">
            <p>Send Message</p>
            <h2>
              Drop <span>US A LINE</span>
            </h2>

            <input type="text" name="user_name" placeholder="Enter Your Name" required />
            <input type="text" name="user_phone" placeholder="Your Phone Number" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Tell Us About Your Idea" required></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit Your Request"}
            </button>
          </form>
        </div>
      </section>

      {/* ========================== 3. AFTER FORM HEADING ========================== */}
      <section className="after-form fade-up">
        <h1>
          Your <span>vision</span> deserves to <br />
          be heard — let’s talk
        </h1>
      </section>

      {/* ========================== 4. MAP SECTION ========================== */}
      <div className="mapp-container fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.882740776533!2d77.40708544999999!3d8.1631162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f10046dc4a8d%3A0xd372272bbc55b!2sNim%20Technologies!5e0!3m2!1sen!2sin!4v169### (replace ### with updated timestamp)!"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
