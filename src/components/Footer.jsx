import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Jose Dino Abaya. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
