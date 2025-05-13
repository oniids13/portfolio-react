import React, { useEffect, useRef } from "react";
import "../styles/Header.css"; // Adjust the path as necessary

const Header = ({ scrollToProjects }) => {
  // Replace with the actual path to your resume PDF
  const resumeUrl =
    "https://drive.google.com/file/d/1zC-hTSxQWczuoqC3L_SB6Ef6-1c5fdCy/view?usp=sharing";

  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Subtle fade-in animations on load
    const elements = [nameRef, titleRef, descRef, buttonsRef, imageRef];
    elements.forEach((el, index) => {
      if (el.current) {
        el.current.style.opacity = 0;
        setTimeout(() => {
          el.current.style.opacity = 1;
        }, 300 + index * 200);
      }
    });
  }, []);

  return (
    <header className="header-section">
      <div className="header-content">
        <div className="header-text">
          <h1 ref={nameRef} className="animate-element">
            Jose Dino Abaya
          </h1>
          <h2 ref={titleRef} className="animate-element">
            Web Developer & Programmer
          </h2>
          <p ref={descRef} className="animate-element">
            A passionate developer crafting responsive, user-friendly web
            applications with modern technologies. Dedicated to delivering
            efficient solutions while continuously expanding my skill set in the
            ever-evolving tech landscape.
          </p>
          <div ref={buttonsRef} className="header-buttons animate-element">
            <button className="cta-button" onClick={scrollToProjects}>
              View Portfolio
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Resume
            </a>
          </div>
        </div>
        <div ref={imageRef} className="header-image animate-element">
          <div className="image-container">
            <img
              src="images/Portfolio_pic.png"
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
