import React from "react";
import style from "./Card.module.css";

const Card = () => {
  const key = "{";
  return (
    <div className={style.card}>
      <div className={style.text}>
        <p>
          1&nbsp;&nbsp;class <b>Person</b> "{`${key}`}"
        </p>
        <p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() </p>
        <p>
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "{" "}
          <b>Lucas Barallobre</b>
        </p>
        <p>
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
          <b>Developer</b>", "<b>Design</b>"];
        </p>
        <p>
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new
          Date().getFullYear() - 1998;
        </p>
        <p>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "}"</p>
        <p>7&nbsp;&nbsp; "}"</p>
      </div>
    </div>
  );
};

export default Card;
