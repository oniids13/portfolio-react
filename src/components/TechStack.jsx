import React, { useState, useEffect } from "react";
import "../styles/TechStack.css";
// Import icons from react-icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiExpress,
  SiFlask,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiPostman,
  SiPrisma,
  SiOpenai,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { TbBrandTailwind, TbBrain } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animateItems, setAnimateItems] = useState(true);

  // Reset animation when category changes
  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Technology objects with icons
  const technologies = {
    frontend: [
      { name: "React", icon: <FaReact className="tech-icon" /> },
      { name: "HTML", icon: <FaHtml5 className="tech-icon" /> },
      { name: "CSS", icon: <FaCss3Alt className="tech-icon" /> },
      { name: "JavaScript", icon: <FaJs className="tech-icon" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="tech-icon" /> },
      { name: "Tailwind", icon: <TbBrandTailwind className="tech-icon" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="tech-icon" /> },
      { name: "Express.js", icon: <SiExpress className="tech-icon" /> },
      { name: "Flask", icon: <SiFlask className="tech-icon" /> },
      { name: "Python", icon: <FaPython className="tech-icon" /> },
    ],
    databases: [
      { name: "PostgreSQL", icon: <SiPostgresql className="tech-icon" /> },
      { name: "SQLite", icon: <SiSqlite className="tech-icon" /> },
      { name: "MongoDB", icon: <SiMongodb className="tech-icon" /> },
    ],
    others: [
      { name: "Git", icon: <FaGitAlt className="tech-icon" /> },
      { name: "GitHub", icon: <FaGithub className="tech-icon" /> },
      { name: "Postman", icon: <SiPostman className="tech-icon" /> },
      { name: "PrismaORM", icon: <SiPrisma className="tech-icon" /> },
      { name: "VS Code", icon: <VscCode className="tech-icon" /> },
      { name: "Cursor AI", icon: <FaLaptopCode className="tech-icon" /> },
      { name: "Figma", icon: <SiFigma className="tech-icon" /> },
      { name: "Canva", icon: <SiCanva className="tech-icon" /> },
      {
        name: "AI Prompt Engineering",
        icon: <SiOpenai className="tech-icon" />,
      },
      {
        name: "LLM Interaction",
        icon: <TbBrain className="tech-icon" style={{ opacity: 0.9 }} />,
      },
    ],
  };

  const getIconColor = (index) => {
    const colors = ["#3498db", "#2980b9", "#2c3e50", "#1abc9c"];
    return colors[index % colors.length];
  };

  return (
    <section id="tech-stack">
      <h2 className="section-title">Technical Expertise</h2>

      <div className="tech-navigation">
        {Object.keys(technologies).map((category) => (
          <button
            key={category}
            className={`tech-nav-button ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="tech-stack-container">
        <div className="tech-list">
          {animateItems &&
            technologies[activeCategory].map((tech, index) => (
              <div
                key={index}
                className="tech-item"
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <div
                  className="tech-icon-wrapper"
                  style={{ color: getIconColor(index) }}
                >
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
