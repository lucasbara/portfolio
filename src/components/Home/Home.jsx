import React from "react";
import style from "./Home.module.css";
import Card from "./Card.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.mainContainer}>
        <div className={style.textLeft}>
          <p>Hello, I'm</p>
          <h1>Lucas Barallobre</h1>
          <p className={style.subTitle}>Full Stack Web Developer</p>
          <button>Download Resume</button>
          <div className={style.icons}>
            <BsGithub />
            <BsLinkedin />
            <BsWhatsapp />
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
