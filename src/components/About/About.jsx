import React from "react";
import style from "./About.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import Profile from "../../assets/img/profile_pic.jpg";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <Navbar />
      <div className={style.mainContainer}>
        <div className={style.boxContainer}>
          <h2>about me</h2>
          <div className={style.boxContent}>
            <img src={Profile} alt="Lucas Bara" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              corporis facere eum hic aperiam animi sunt deleniti, tempora
              recusandae nisi repudiandae, inventore beatae minus omnis quod
              soluta reiciendis. <br></br>Maiores, debitis. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Nihil corporis facere eum
              hic aperiam animi sunt deleniti, tempora recusandae nisi
              repudiandae, inventore beatae minus omnis quod soluta reiciendis?
              Maiores, debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
