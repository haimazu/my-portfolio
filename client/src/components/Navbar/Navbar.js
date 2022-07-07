import React from "react";

import "./navbar.css";

import { navigation } from "../../data";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = ({ isScroll }) => {
  return (
    <nav>
      <ul className="nav_container_ul">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="nav_container_li">
              <LinkS
                to={item.href}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                activeClass={isScroll ? "active" : "none"}
                className="nav_container_li"
              >
                {item.name}
              </LinkS>
            </li>
          );
        })}
        <LinkR className="nav_container_btn_link" to="login">
          Login
        </LinkR>
      </ul>
    </nav>
  );
};

export default Navbar;
