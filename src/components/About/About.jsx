import React from "react";
import style from "./About.module.css";
import Profile from "../../assets/img/profile_pic.jpg";
import Rectangle from "../../assets/img/home_rectangle.svg";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.mainContainer}>
        <div className={style.boxContainer}>
          <h2>about me</h2>
          <div className={style.boxContent}>
            <img src={Profile} alt="Lucas Bara" />
            <p>
              Hey! My name is Lucas Barallobre, i was borned in Buenos
              Argentina. I'm a Full Stack Web Developer, who is interested in
              expanding their front-end skills. <br></br>
              I’m passionate about technology innovation, design, and having big
              challenging tasks on my to-do list
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
