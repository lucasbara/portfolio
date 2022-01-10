import React from "react";
import style from "./Home.module.css";
import Card from "./Card.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Rectangle from "../../assets/img/home_rectangle.svg";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <img className={style.rectangle} src={Rectangle} />
      <div className={style.mainContainer}>
        <div className={style.textLeft}>
          <p>Hello, I'm</p>
          <h1>Lucas Barallobre</h1>
          <p className={style.subTitle}>Full Stack Web Developer</p>
          <button>Download Resume</button>
          <div className={style.icons}>
            <span>
              <BsGithub />
            </span>
            <span>
              <BsWhatsapp />
            </span>
            <span>
              <BsLinkedin />
            </span>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
