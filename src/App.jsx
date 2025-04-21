import Header from "./components/Header";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import React, { useRef } from "react";

function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="porfolio-container">
        <Header scrollToProjects={scrollToProjects} />
        <TechStack />
        <Projects ref={projectsRef} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
