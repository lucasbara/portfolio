import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import style from "./App.module.css";

function App() {
  return (
    <React.Fragment>
      <div>
        <Home />
      </div>
      <section id="about" className={style.aboutContainer}>
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </React.Fragment>
  );
}

export default App;
