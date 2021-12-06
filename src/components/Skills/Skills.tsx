import React from "react";

// Components
import SkillsCardContainer from "../SkillsCardContainer/SkillsCardContainer";
import { Decor } from "../Decor/Decor";
// Components

interface ISkills {}

const Skills: React.FC<ISkills> = ({}) => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Our Skills</h2>
      <SkillsCardContainer />
      <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
        <polygon
          points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
          fill="#2a2a2a"
        />
      </svg>
    </section>
  );
};

export default Skills;
