import { useState, useEffect } from 'react';

// Components
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer';
// Components

// Experience Data
import { experience } from '../../constants/experience';
import { Decor } from '../Decor/Decor';
// Experience Data

const Experience = () => {
  const [isRamil, setIsRamil] = useState<boolean>(true);
  const [isDamil, setIsDamil] = useState<boolean>(false);

  const handleShowExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if ((e.target as HTMLElement).id === 'ramil') {
      setIsDamil(false);
      setIsRamil(true);
    } else if ((e.target as HTMLElement).id === 'damil') {
      setIsRamil(false);
      setIsDamil(true);
    }
  };

  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">Our Experience</h2>
      <div className="experience__filter">
        <button
          className={`${
            isRamil ? 'experience__button-active' : ''
          } experience__button`}
          id="ramil"
          onClick={(e) => {
            handleShowExperience(e);
          }}
        >
          Ramil
        </button>
        <button
          className={`${
            isDamil ? 'experience__button-active' : ''
          } experience__button`}
          id="damil"
          onClick={(e) => {
            handleShowExperience(e);
          }}
        >
          Damil
        </button>
      </div>
      {experience.map(({id, lastExp, name}) => {
        return (
          <ExperienceContainer
            lastExp={lastExp}
            name={name}
            isRamil={isRamil}
            isDamil={isDamil}
            key={id}
          />
        );
      })}
      <Decor fill="#202020"/>
    </section>
  );
};

export default Experience;
