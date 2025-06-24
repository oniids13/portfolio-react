import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map _replyto (required by Formspree) to email in our local state
    const stateKey = name === "_replyto" ? "email" : name;
    setFormData((prev) => ({
      ...prev,
      [stateKey]: value,
    }));
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hello, I'll do my best to get back to you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:jdino.abaya@gmail.com">jdino.abaya@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+639395674339">+63 939 567 4339</a>
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
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/oniids/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.facebook.com/oniids.abaya"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/oniids/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/myzwgwya"
          method="POST"
          className="contact-form"
        >
          <div
            className={`form-group ${
              focusedInput === "name" || formData.name ? "active" : ""
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              required
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div
            className={`form-group ${
              focusedInput === "email" || formData.email ? "active" : ""
            }`}
          >
            <input
              type="email"
              id="email"
              name="_replyto"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              required
            />
            <label htmlFor="email">Your Email</label>
          </div>

          <div
            className={`form-group ${
              focusedInput === "subject" || formData.subject ? "active" : ""
            }`}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocusedInput("subject")}
              onBlur={() => setFocusedInput(null)}
            />
            <label htmlFor="subject">Subject</label>
          </div>

          <div
            className={`form-group ${
              focusedInput === "message" || formData.message ? "active" : ""
            }`}
          >
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedInput("message")}
              onBlur={() => setFocusedInput(null)}
              required
            ></textarea>
            <label htmlFor="message">Your Message</label>
          </div>

          <button type="submit" className="submit-btn">
            <span>Send Message</span>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
