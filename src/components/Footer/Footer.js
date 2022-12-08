import React from "react";

import "./footer.css";

import { social, logoImage } from "../../data";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_body">
        <div className="footer_body_details">
          <div>
            <img src={logoImage} alt="" />
          </div>
          <p className="footer_copyright">
            Copyright &copy; 2022 H.A. All rights reserved.
          </p>
          <div className="footer_socials">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="footer_socials_icon" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
