import React from "react";
import style from "./Card.module.css";
import { BsGithub } from "react-icons/bs";
import pokemon from "../../assets/img/project_pokemon.png";

const Card = ({ title, description, image, url, github }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardText}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={style.buttons}>
          <button>
            <a href={url} target="_blank">
              Live Demo
            </a>
          </button>
          <button className={style.buttonRounded}>
            <a href={github} target="_blank">
              <BsGithub />
            </a>
          </button>
        </div>
      </div>
      <div className={style.cardImage}>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default Card;

/*const Card = ({ title, description, image, url, github }) => {
  return (
    <div className={style.boxContent}>
      <div>
        <p>Test 1</p>
        <p>{title}asasa</p>
        <p>{description}asas</p>
        <p>{url}asas</p>
        <p>{github}asas</p>
      </div>
      <img src={image} alt={title}></img>
    </div>
  );
};*/
