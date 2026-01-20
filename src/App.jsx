import Header from "./components/Header";
import Projects from "./components/Projects";
import UI from "./components/UI";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div className="portfolio-container">
        <Header />
        <Projects />
        <UI />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
