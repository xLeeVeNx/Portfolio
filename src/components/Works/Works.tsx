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

const Works: React.FC<IWorks> = ({ handleOpenWorkModal, handleSetWorkCardInfo }) => {
  return (
    <section className="works">
      <h2 className="works__title">Latest Project</h2>
      <WorksCardContainer handleOpenWorkModal={handleOpenWorkModal} handleSetWorkCardInfo={handleSetWorkCardInfo} />
    </section>
  );
};

export default Works;
