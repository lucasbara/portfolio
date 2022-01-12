import React from "react";
import style from "./Dots.module.css";

const Dots = () => {
  return (
    <div className={style.table}>
      <div className={style.cell}>
        <ul className={style.dots}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dots;
