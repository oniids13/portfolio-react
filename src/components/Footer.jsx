import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} <span>Jose Dino Abaya</span>. All
          rights reserved.
        </p>
        <div className="footer-links">
          <a href="#top" className="footer-link">
            Home
          </a>
          <a href="#tech-stack" className="footer-link">
            Skills
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
