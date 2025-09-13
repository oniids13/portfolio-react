import Header from "./components/Header";
import TechStack from "./components/TechStack";
import ProjectSelector from "./components/Project-selector";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div className="porfolio-container">
        <Header />
        <TechStack />
        <ProjectSelector />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
