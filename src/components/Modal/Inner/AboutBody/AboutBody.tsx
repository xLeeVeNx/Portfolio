import React from "react";

import { Skill } from "../../../Skill/Skill";

interface IAboutBody {
  active: boolean;
}

export const AboutBody: React.FC<IAboutBody> = ({ active }) => {
  return (
    <div className="about-modal">
      <h2 className="about-modal__title">My skills</h2>

      <div className="about-modal__skills">
        <Skill procent="90%" name="HTML/CSS" color="yellow" active={active} />
        <Skill procent="65%" name="JavaScript" color="blue" active={active} />
        <Skill procent="75%" name="React/Redux" color="red" active={active} />
        <Skill procent="80%" name="TypeScript" color="green" active={active} />
      </div>
    </div>
  );
};
