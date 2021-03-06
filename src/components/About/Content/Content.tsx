import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { LeftSide } from "./LeftSide/LeftSide";
import { RightSide } from "./RightSide/RightSide";

// Info about us
import aboutInfo from "../../../constants/about-us-info.json";
// Info about us

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

type ContentPropsType = {
  abs: (data: any) => void;
};

export const Content: React.FC<ContentPropsType> = ({ abs }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      navigation
      grabCursor
      className="mySwiper"
    >
      {aboutInfo.map(({ id, name, age, phone, email, text }) => {
        return (
          <SwiperSlide key={id}>
            <div className="about__inner">
              <LeftSide />
              <RightSide
                name={name}
                age={age}
                phone={phone}
                email={email}
                text={text}
                abs={() => abs({name, age, phone, email})}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
