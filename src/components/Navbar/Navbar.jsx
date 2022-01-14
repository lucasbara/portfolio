import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/img/lucasBaraWeb.png";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <img onClick={() => scroll.scrollToTop()} src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="about" smooth={true}>
              about me
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true}>
              skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true}>
              projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
