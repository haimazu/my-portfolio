import React, { useState } from "react";

import "./sidebar.css";

import { IoMdClose } from "react-icons/io";
import { CgMenu } from "react-icons/cg";

import { navigation } from "../../data";

import Socials from "../Socials/Socials";
import { motion } from "framer-motion";

import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className="sidebar_container">
      <div onClick={() => setIsOpen(true)} className="sidebar_is_open">
        <CgMenu className="sidebar_is_open_menu_icon" />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="sidebar_circle_bg"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${isOpen ? "sidebar_motion_open" : "sidebar_motion_close"}`}
        onClick={() => setIsOpen(false)}
      >
        <div onClick={() => setIsOpen(false)} className="sidebar_xicon_div">
          <IoMdClose className="sidebar_xicon" />
        </div>
        {navigation.map((item, index) => {
          return (
            <li key={index} className="sidebar_navigation_li">
              <LinkS
                to={item.href}
                smooth={true}
                duration={500}
                offset={-70}
                className="sidebar_navigation_link"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </LinkS>
            </li>
          );
        })}
        <LinkR className="sidebar_container_btn_link" to="login">
          Login
        </LinkR>
        <Socials />
      </motion.ul>
    </nav>
  );
};

export default Sidebar;
