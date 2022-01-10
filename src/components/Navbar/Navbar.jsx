import React from "react";
import style from "./Navbar.module.css";
import Logo from "../../assets/img/lucasBaraWeb.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navContainer}>
      <img src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>about me</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>skills</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>projects</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
