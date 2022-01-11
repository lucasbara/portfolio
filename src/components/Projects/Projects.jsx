import React from "react";
import style from "./Projects.module.css";
import Card from "./Card.jsx";
import projectInfo from "./Projects.js";

const Projects = () => {
  return (
    <div className={style.projectsContainer}>
      <div className={style.boxContainer}>
        <h2>projects</h2>
        <div className={style.boxContent}>
          {projectInfo.map((p) => {
            <Card
              title={p.title}
              description={p.description}
              image={p.image}
              url={p.url}
              github={p.github}
            />;
          })}
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
