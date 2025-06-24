import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css"; // Adjust the path as necessary

const Header = ({ scrollToProjects }) => {
  // Replace with the actual path to your resume PDF
  const resumeUrl =
    "https://drive.google.com/file/d/1atbQ27P2Y2P4tAEPTfS4wjDW2iN8nI4Q/view?usp=sharing";

  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection("home")}>
            <div className="logo-container">
              <img
                src="images/personal_logo.png"
                alt="Jose Dino Logo"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            </div>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <a
              href="#home"
              className="nav-link"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
            <a
              href="#tech-stack"
              className="nav-link"
              onClick={() => scrollToSection("tech-stack")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="nav-link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </div>

          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="header-section" id="home">
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
              efficient solutions while continuously expanding my skill set in
              the ever-evolving tech landscape.
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
    </>
  );
};

export default Header;
