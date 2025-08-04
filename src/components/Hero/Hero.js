import React from "react";

import "./hero.css";

import { Link } from "react-scroll";

import { heroImage } from "../../data";

const Hero = () => {
  return (
    <section id="home" className="hero_container">
      <div className="hero_body">
        <div className="hero_details">
          <div className="hero_details_left">
            <p className="hero_details_left_me">Welcome, I'm Haim Azulay.</p>
            <h1 className="hero_details_left_title">
               Software Engineer 🔹 <br />Security Researcher
            </h1>
            <p className="hero_details_left_subtitle">
              For more details feel free to contact me.
            </p>
            <button className="btn_md">
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                Contact me
              </Link>
            </button>
          </div>
          <div className="hero_details_right">
            <img className="hero_details_right_image" src={heroImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
