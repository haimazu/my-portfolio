import React from "react";

import "./socials.css";

import { social } from "../../data";

const Socials = () => {
  return (
    <ul className="socials_container_ul">
      {social.map((item, index) => {
        return (
          <li className="socials_icon" key={index}>
            <a
              className="socials_icon"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
