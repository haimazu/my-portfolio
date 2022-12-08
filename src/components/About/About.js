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
              <h1>About me</h1>
              <h5>Student of Software Engineering</h5>

              <hr />

              <p className="about_descriptions">
                Hi, my name is Haim Azulay, I'm a software engineering student
                at Braude College. (last semester)
                <br />
                I started my studies as a practical software engineer also at
                Braude, and over the time I realized that I wanted to
                integrate into the field of information security.
                <br />
                At the beginning of my first semester in software engineering, I
                incorporated an information security cyber and hacking course at
                John Bryce College.
                <br />
                <br />
                Today I am interested in entering jobs in the field of
                information security.
                <br />
                <br />
                For more details and to receive a resume, you can
                contact me by clicking the button below.
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
