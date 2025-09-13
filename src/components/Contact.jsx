import React from "react";
import "../styles/Contact.css";

const Contact = () => {
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
            <a
              href="https://dribbble.com/jose-dino-abaya/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
            >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>

        <div className="contact-image">
          <div className="image-wrapper">
            <img
              src="images/PIC_SIDE.png"
              alt="Jose Dino Abaya"
              className="contact-pic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
