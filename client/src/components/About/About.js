import React from "react";

import "./about.css";

import { Link } from "react-scroll";

import { aboutImage } from "../../data";

const About = () => {
  return (
    <section className="about_section" id="about">
      <div className="about_container">
        <div className="about_body">
          <img className="about_left_image" src={aboutImage} alt="" />
          <div className="about_details">
            <div className="about_details_right">
              <h1>About</h1>
              <h5>Student of Software Engineering</h5>

              <hr />
              
              <p className="about_descriptions">
                To be updated <br />
                <br />
                ...
              </p>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
