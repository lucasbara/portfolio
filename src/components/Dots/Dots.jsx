import React from "react";
import style from "./Dots.module.css";

const Dots = () => {
  return (
    <div className={style.table}>
      <div className={style.dots}>
        <ul>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
          <li className={style.dot}></li>
        </ul>
      </div>
    </div>
  );
};

export default Dots;
