import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out for collaboration or just to say hello!</p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>john.doe@example.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
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
