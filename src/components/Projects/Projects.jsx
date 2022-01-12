import React from "react";
import style from "./Projects.module.css";
import Card from "./Card.jsx";
import info from "./info.js";

const Projects = () => {
  return (
    <div className={style.projectsContainer}>
      <div className={style.boxContainer}>
        <h2>projects</h2>
        <div className={style.boxContent}>
          {info.map((p) => {
            return (
              <Card
                title={p.title}
                description={p.description}
                image={p.image}
                url={p.url}
                github={p.github}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
