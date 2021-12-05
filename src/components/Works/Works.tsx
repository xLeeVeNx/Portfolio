import React from "react";

// Types
import { TWorkCardModal } from "../../types/works";
// Types

// Components
import WorksCardContainer from "../WorksCardContainer/WorksCardContainer";
// Components

interface IWorks {
  handleOpenWorkModal: (state: boolean) => void;
  handleSetWorkCardInfo: (workCardInfo: TWorkCardModal) => void;
}

const Works: React.FC<IWorks> = ({
  handleOpenWorkModal,
  handleSetWorkCardInfo,
}) => {
  return (
    <section className="works">
      <h2 className="works__title">Latest Project</h2>
      <WorksCardContainer
        handleOpenWorkModal={handleOpenWorkModal}
        handleSetWorkCardInfo={handleSetWorkCardInfo}
      />
      <svg
        className="contacts__decor"
        x="0px"
        y="0px"
        viewBox="0 186.5 1920 113.5"
      >
        <polygon
          points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "
          fill="#2a2a2a"
        ></polygon>
      </svg>
    </section>
  );
};

export default Works;
