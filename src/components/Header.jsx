import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";

const Header = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1atbQ27P2Y2P4tAEPTfS4wjDW2iN8nI4Q/view?usp=sharing";

  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const techRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Tech stack for hero section
  const heroTechStack = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  useEffect(() => {
    // Staggered fade-in animations
    const elements = [nameRef, titleRef, descRef, buttonsRef, imageRef, techRef];
    elements.forEach((el, index) => {
      if (el.current) {
        el.current.style.opacity = 0;
        el.current.style.transform = "translateY(20px)";
        setTimeout(() => {
          if (el.current) {
            el.current.style.opacity = 1;
            el.current.style.transform = "translateY(0)";
          }
        }, 200 + index * 150);
      }
    });

    // Scroll listener for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection("home")}>
            <div className="logo-container">
              <img
                src="images/personal_logo.png"
                alt="Jose Dino Logo"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = "none";
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
              href="#webdev-projects"
              className="nav-link"
              onClick={() => scrollToSection("webdev-projects")}
            >
              Projects
            </a>
            <a
              href="#uiux-projects"
              className="nav-link"
              onClick={() => scrollToSection("uiux-projects")}
            >
              Design
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
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className="header-content">
          <div className="header-text">
            <p ref={nameRef} className="greeting animate-element">
              Hello, I'm
            </p>
            <h1 ref={titleRef} className="name animate-element">
              Jose Dino Abaya
            </h1>
            <h2 className="title animate-element">
              Full Stack Developer & UI/UX Designer
            </h2>
            <p ref={descRef} className="description animate-element">
              Crafting responsive, user-friendly web applications with modern
              technologies. Passionate about delivering efficient, user-centered
              solutions with clean code and beautiful interfaces.
            </p>
            <div ref={buttonsRef} className="header-buttons animate-element">
              <button
                className="cta-button primary"
                onClick={() => scrollToSection("webdev-projects")}
              >
                <span>View Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <span>Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>

          <div ref={imageRef} className="header-image animate-element">
            <div className="image-container">
              <div className="image-glow"></div>
              <img
                src="images/Portfolio_pic.png"
                alt="Jose Dino Abaya"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Row */}
        <div ref={techRef} className="hero-tech-stack animate-element">
          <p className="tech-label">Technologies I work with</p>
          <div className="tech-icons-row">
            {heroTechStack.map((tech, index) => (
              <div
                key={tech.name}
                className="tech-icon-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
