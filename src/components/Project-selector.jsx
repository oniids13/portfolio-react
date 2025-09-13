import React, { useState } from "react";
import Projects from "./Projects";
import UI from "./UI";
import "../styles/ProjectSelector.css";

const ProjectSelector = () => {
  const [activeTab, setActiveTab] = useState("webdev");

  return (
    <section id="projects">
      <h2 className="section-title">Selected Work</h2>

      <div className="project-selector-container">
        <div className="toggle-container">
          <div className="toggle-wrapper">
            <button
              className={`toggle-btn ${activeTab === "webdev" ? "active" : ""}`}
              onClick={() => setActiveTab("webdev")}
            >
              <span className="toggle-icon">💻</span>
              Web Dev
            </button>
            <button
              className={`toggle-btn ${activeTab === "ui" ? "active" : ""}`}
              onClick={() => setActiveTab("ui")}
            >
              <span className="toggle-icon">🎨</span>
              UI/UX Design
            </button>
            <div
              className={`toggle-slider ${
                activeTab === "ui" ? "slide-right" : ""
              }`}
            />
          </div>
        </div>

        <div className="projects-content">
          {activeTab === "webdev" ? <Projects hideTitle={true} /> : <UI />}
        </div>
      </div>
    </section>
  );
};

export default ProjectSelector;
