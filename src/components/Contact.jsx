import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "jdino.abaya@gmail.com",
      href: "mailto:jdino.abaya@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+63 939 567 4339",
      href: "tel:+639395674339",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Muntinlupa City, Metro Manila, PH",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/oniids13",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/oniids/",
      label: "LinkedIn",
    },
    {
      icon: <FaDribbble />,
      href: "https://dribbble.com/jose-dino-abaya/",
      label: "Dribbble",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle contact-subtitle">
        I'm currently open to new opportunities. Let's connect!
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-description">
              Whether you have a project in mind, a question to ask, or just want 
              to say hello — I'd love to hear from you. I'll do my best to get 
              back to you as soon as possible.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div className="contact-item" key={index}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-visual">
            <div className="visual-container">
              <div className="visual-glow"></div>
              <img
                src="images/PIC_SIDE.png"
                alt="Jose Dino Abaya"
                className="contact-pic"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
