import Header from "./components/Header";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="porfolio-container">
        <Header />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
