import React from "react";
import style from "./Home.module.css";
import Card from "./Card.jsx";
import Dots from "../Dots/Dots.jsx";
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
            <a href="www.google.com.ar" target="_blank">
              <BsGithub />
            </a>
            <a href="" target="_blank">
              <BsWhatsapp />
            </a>
            <a href="" target="_blank">
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className={style.aside}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
