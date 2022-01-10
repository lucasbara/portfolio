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
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about me</Link>
          </li>
          <li>
            <Link to="/">skills</Link>
          </li>
          <li>
            <Link to="/">projects</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
