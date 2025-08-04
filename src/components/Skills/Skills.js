import React from "react";

import "./skills.css";

import Category from "./Category";

import { Languages } from "../../data";
import { Tat } from "../../data";
import { Platforms } from "../../data";
import { Background } from "../../data";
import { Databases } from "../../data";
import { Systems } from "../../data";

const Skills = () => {
  const titles = [
    "Programming / Tag Languages",
    "Technologies and Tools",
    "Web & CMS Platforms",
    "Background (at a basic level)",
    "Databases",
    "Operating Systems",
  ];
  const data = [Languages, Tat, Platforms, Background, Databases, Systems];

  return (
    <section className="knowledge_section" id="skills">
      <div className="knowledge_container">
        <div className="knowledge_title">
          <h1 style={{ color: "var(--color-primary)" }}>Professional skills</h1>
        </div>

        <hr />

        {
          titles.map((title, index) => {
            return <Category title={titles[index]} data={data[index]} key={index} />
          })
        }
      </div>
    </section>
  );
};

export default Skills;
