import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";

import { Link } from "react-scroll";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const onHover = () => {
    setHover(!hover);
  };

  return (
    show && (
      <Link to="#" onMouseEnter={onHover} onMouseLeave={onHover}>
        <button
          onClick={() => scrollToTop()}
          className="btn_back_to_top"
        >
          {!hover ? <IoIosArrowUp /> : <IoMdArrowUp />}
        </button>
      </Link>
    )
  );
};

export default BackTopBtn;
