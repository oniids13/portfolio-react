import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-content">
        <div className="header-text">
          <h1>Jose Dino Abaya</h1>
          <h2>Web Developer / Programmer</h2>
          <p>
            I build beautiful, responsive, and user-friendly web applications
            with modern technologies. Passionate about creating efficient
            solutions and continuously learning new skills.
          </p>
          <button className="cta-button">View My Work</button>
        </div>
        <div className="header-image">
          <img
            src="src\images\Portfolio_pic.png"
            alt="Profile pic"
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
