import React from 'react';

import { Skill } from '../../../Skill/Skill';
import { Title } from '../../../Title/Title';

export const AboutBody: React.FC = () => {
	return (
		<>
			<h2 className="about-modal__title">My skills</h2>

			<div className="about-modal__skills">
				<Skill procent="90%" name="HTML/CSS" color="yellow" />
				<Skill procent="65%" name="JavaScript" color="blue" />
				<Skill procent="75%" name="React/Redux" color="red" />
				<Skill procent="80%" name="TypeScript" color="green" />
			</div>
		</>
	);
};