import React from "react";
import style from "./Card.module.css";
import { BsGithub } from "react-icons/bs";
import pokemon from "../../assets/img/project_pokemon.png";

const Card = ({ title, description, image, url, github }) => {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardText}>
        <p>Pokémon API</p>
        <p>
          Pokémon API is a full stack web development, where you can find
          existing pokemons and create new ones. You can also be able to filter
          the pokemon by type, and order it.
        </p>
        <div className={style.buttons}>
          <button>Live Demo</button>
          <button className={style.buttonRounded}>
            <BsGithub />
          </button>
        </div>
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
