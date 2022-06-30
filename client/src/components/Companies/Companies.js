import React from "react";

import "./companies.css";

import { companies } from "../../data";

const Companies = () => {
  return (
    <section className="companies_section">
      <div className="companies_container">
        {companies.map((company, index) => {
          return (
            <div key={index}>
              <img src={company.image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
