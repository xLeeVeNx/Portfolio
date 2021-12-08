import React from "react";
import Particles from "react-particles-js";
import { Decor } from "../Decor/Decor";
import { Content } from "./Content/Content";

type AboutPropsType = {
  setAboutModalValue: (value: boolean) => void;
};

export const About: React.FC<AboutPropsType> = ({ setAboutModalValue }) => {
  return (
    <section className="about" id="about">
      <Content setAboutModalValue={setAboutModalValue} />
      <Decor fill="#202020" />
      <Particles
        className="about__decor"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 5,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
            },
          },
        }}
      />
      <div className="line" />
    </section>
  );
};
