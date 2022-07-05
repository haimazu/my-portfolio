import React from "react";

import "./navbar.css";

import { navigation } from "../../data";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_container_ul">
        {navigation.map((item, index) => {
          return (
            <li className="nav_container_li" key={index}>
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
