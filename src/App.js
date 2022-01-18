import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import style from "./App.module.css";

function App() {
  return [
    <div className={style.app}>
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
        <section id="contact">
          <Contact />
        </section>
      </React.Fragment>
    </div>,
  ];
}

export default App;
