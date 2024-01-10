import React, { useState } from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navigation from "./components/nav/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="App">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Work darkMode={darkMode} />
      <Contact darkMode={darkMode}/>
      <Footer />
    </div>

  );
}

