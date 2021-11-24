import React from "react";
import { List } from "./Inner/List/List";
import { Text } from "./Inner/Text";
import { Button } from "../../../Button/Button";
import { Title } from "../../../Title/Title";

type RightSidePropsType = {
  setAboutModalValue: (value: boolean) => void;
  name: string;
  age: string;
  phone: string;
  email: string;
  text: string;
};

export const RightSide: React.FC<RightSidePropsType> = ({
  setAboutModalValue,
  name,
  age,
  phone,
  email,
  text,
}) => {
  return (
    <div className="about__right">
      <Title text="About Me" />

      <div className="about__box">
        <Text content={text} />
      </div>

      <List name={name} age={age} phone={phone} email={email} />

      <Button text="More About" setAboutModalValue={setAboutModalValue} />
    </div>
  );
};
