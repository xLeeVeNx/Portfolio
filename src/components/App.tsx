import React, { useState, useEffect } from "react";

// Functions
import { closeModal } from "./pureFunctions/closeModal";
// Functions

// Types
import { TWorkCardModal } from "../types/works";
// Types

import { Header } from "./Header/Header";
import { About } from "./About/About";
import { Modal } from "./Modal/Modal";
import { AboutBody } from "./Modal/Inner/AboutBody/AboutBody";
import WorkModalBody from "./WorkModalBody/WorkModalBody";
import Works from "./Works/Works";
import Skills from "./Skills/Skills";
import Contacts from "./Contacts/Contacts";

export const App: React.FC = () => {
  const [aboutModalValue, setAboutModalValue] = useState<boolean>(false);
  const [isWorkModal, setIsWorkModal] = useState<boolean>(false);
  const [workCardData, setWorkCardData] = useState<TWorkCardModal>();

  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal(setAboutModalValue);
        closeModal(setIsWorkModal);
      }
    };
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      handleEscClose(e);
    });
    return () => {
      document.removeEventListener("keydown", (e: KeyboardEvent) => {
        handleEscClose(e);
      });
    };
  }, []);

  const handleSetWorkCardInfo = (workCardInfo: TWorkCardModal) => {
    setWorkCardData(workCardInfo);
  };

  return (
    <div className="wrapper">
      <Header />
      <About setAboutModalValue={setAboutModalValue} />

      <Modal active={aboutModalValue} setActive={setAboutModalValue}>
        <AboutBody active={aboutModalValue} />
      </Modal>

      <Works
        handleOpenWorkModal={setIsWorkModal}
        handleSetWorkCardInfo={handleSetWorkCardInfo}
      />
      <Skills />
      <Contacts />
      <Modal active={isWorkModal} setActive={setIsWorkModal}>
        <WorkModalBody workCardData={workCardData} />
      </Modal>
    </div>
  );
};
