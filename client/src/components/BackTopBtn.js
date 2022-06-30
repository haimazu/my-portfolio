import React, { useState, useEffect } from "react";

import { animateScroll as scroll } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className="btn_back_to_top"
        >
          <IoIosArrowUp />
        </button>
      )
    );
  }
};

export default BackTopBtn;
