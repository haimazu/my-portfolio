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
              <h5>Software Engineer 🔹 Security Researcher</h5>

              <hr />
                
              <p className="about_descriptions">
                Hi, my name is Haim Azulay, I'm a Software Engineer from Braude College with a strong passion for information security.
                <br />
                I started my academic journey as a Practical Software Engineer at Braude and quickly realized my desire to specialize in cybersecurity.
                <br />
                Early in my software engineering studies, I took the initiative to enroll in a cyber and ethical hacking course at John Bryce College to deepen my knowledge in the field.
                <br />
                Today, I have over a year of hands-on experience as a Security Researcher, where I’ve been involved in analyzing threats, discovering vulnerabilities, and contributing to real-world security solutions.
                <br />
                <br />
                I'm now actively seeking new opportunities in the information security field.
                <br />
                <br />
                For more details and to receive a resume, you can contact me by clicking the button below.
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
