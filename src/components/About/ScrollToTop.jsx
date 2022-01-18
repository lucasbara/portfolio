import React, { useState, useEffect } from "react";
import style from "./ScrollToTop.module.css";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  var y = window.pageYOffset;
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        console.log(window.scrollY);
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
  }, []);
  return (
    <a
      className={visibility ? style.button : style.buttonNone}
      onClick={() => scroll.scrollToTop()}
    >
      <BsFillArrowUpCircleFill />
    </a>
  );
};

export default ScrollToTop;
