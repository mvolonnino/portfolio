import React from "react";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
