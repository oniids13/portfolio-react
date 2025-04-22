import React from "react";
import "../styles/Header.css"; // Adjust the path as necessary

const Header = ({ scrollToProjects }) => {
  // Replace with the actual path to your resume PDF
  const resumeUrl =
    "https://drive.google.com/file/d/16BJ9i6lbEYXkBSxX4FwkkDhc8SFjZoTb/view?usp=sharing";

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
          <div className="header-buttons">
            <button className="cta-button" onClick={scrollToProjects}>
              View My Work
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View my Resume
            </a>
          </div>
        </div>
        <div className="header-image">
          <img
            src="images/Portfolio_pic.png"
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
