import React from 'react';
import myPhoto from '../../../../assets/images/AboutMe.png';

export const LeftSide: React.FC = () => {
	return (
		<div className="about__left">
			<img className="about__image" src={ myPhoto } alt="About me" />
		</div>
	);
};