import React from "react";

import "./skills.css";

const Category = ({ title, data }) => {
  return (
    <section className="category_section">
      <div className="category_container">
        <div className="category_title">
          { !title.includes("Background") ? <h2>{title}</h2> : <h4>{title}</h4> }
        </div>

        {data.map((item, index) => {
          return (
            <div className="category_list" key={index}>
              <img style={{ width: "80px", height: "80px" }} src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;