import React from "react";

import "./navbar.css";

import { navigation } from "../../data";

import { Link } from "react-scroll";

const Navbar = ({ isScroll }) => {
  return (
    <nav>
      <ul className="nav_container_ul">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="nav_container_li">
              <Link
                to={item.href}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                activeClass={isScroll ? "active" : "none"}
                className="nav_container_li"
              >
                { item.name.includes("HTB") ? <div style={{ color: "#9fef00" }}>{item.name}</div> : item.name }
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
