import React from "react";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="app">
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
