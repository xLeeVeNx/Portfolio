import React from 'react';

type SkillPropsType = {
    procent: string;
    name: string;
    color: string;
}

export const Skill: React.FC<SkillPropsType> = ({procent, name, color}) => {
    return (
        <div className="about-modal__skill">
            <div className={`about-modal__progress ${color}`}>
						<span className="about-modal__progress-left">
							<span className="about-modal__progress-bar"/>
						</span>
                <span className="about-modal__progress-right">
							<span className="about-modal__progress-bar"/>
			 			</span>
                <span className="about-modal__progress-value">{procent}</span>
            </div>
            <span className="about-modal__text">{name}</span>
        </div>
    );
};