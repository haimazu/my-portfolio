import React, { useEffect, useState } from "react";

import "./header.css";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Socials from "../Socials/Socials";

import { logoImage } from "../../data";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? "nav_background_with_scroll" : "nav_background_without_scroll"}`}
    >
      <div className="header_container">
        {/* logo */}
        <img src={logoImage} alt="" />
        {/* nav */}
        <div className="nav">
          <Navbar isScroll={bg} />
        </div>
        {/* socials */}
        <div className="socials">
          <Socials />
        </div>
        {/* sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
