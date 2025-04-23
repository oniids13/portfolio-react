import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            If you're interested hiring me, feel free to send me a message. I am
            excited to work with you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>jdino.abaya@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+63 939 567 4339</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Muntinlupa City, Metro Manila, PH</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/oniids13"
              className="social-link"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/oniids/"
              className="social-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.facebook.com/oniids.abaya"
              className="social-link"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/oniids/" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/myzwgwya"
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
