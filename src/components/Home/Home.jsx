import React from "react";
import style from "./Home.module.css";
import Card from "./Card.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import Resume from "../../assets/resume.pdf";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.mainContainer}>
        <div className={style.textLeft}>
          <p>Hello, I'm</p>
          <h1>Lucas Barallobre</h1>
          <p className={style.subTitle}>Full Stack Web Developer</p>
          <button>
            <a href={Resume} target="_blank">
              Download Resume
            </a>
          </button>
          <div className={style.icons}>
            <a href="https://github.com/lucasbara" target="_blank">
              <BsGithub />
            </a>
            <a href="https://wa.me/541141632401" target="_blank">
              <BsWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-barallobre/"
              target="_blank"
            >
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
