import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-name">Jose Dino Abaya</span>
          <span className="footer-tagline">Full Stack Developer & UI/UX Designer</span>
        </div>

        <div className="footer-links">
          <a href="#home" className="footer-link" onClick={scrollToTop}>
            Home
          </a>
          <a href="#webdev-projects" className="footer-link">
            Projects
          </a>
          <a href="#uiux-projects" className="footer-link">
            Design
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} <span>Jose Dino Abaya</span>. All
            rights reserved.
          </p>
          <p className="built-with">
            Built with React & passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
