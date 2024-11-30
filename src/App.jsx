import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
      <ParticlesBackground darkMode={darkMode} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mt-16"
      >
        <Home />
        <About />
        <Experience/>
        <Skills />
        <Education/>
        <Projects />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
