import React from "react";
import style from "./About.module.css";
import Profile from "../../assets/img/profile_pic.jpg";
import ScrollToTop from "./ScrollToTop";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.mainContainer}>
        <div className={style.boxContainer}>
          <h2>about me</h2>
          <div className={style.boxContent}>
            <p>
              Hey! My name is Lucas Barallobre.<br></br> As a front-end
              developer, I have a keen eye for design and a and a deep
              understanding of how to create user interfaces that are both
              functional and aesthetically pleasing.<br></br> Performance and
              scalability are always top of mind for me. I have a strong
              foundation using a variety of tools to build high-quality
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className={style.scrollBtn}>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default About;
