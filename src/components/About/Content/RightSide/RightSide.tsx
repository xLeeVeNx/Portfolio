import React from 'react';
import { List } from './Inner/List/List';
import { Text } from './Inner/Text';
import { Button } from '../../../Button/Button';
import { Title } from '../../../Title/Title';

type RightSidePropsType = {
	setAboutModalValue: (value: boolean) => void;
}

export const RightSide: React.FC<RightSidePropsType> = ({setAboutModalValue}) => {
	return (
		<div className="about__right">
			<Title text="About Me" />

			<div className="about__box">
				<Text
					content="I am a meticulous Front-end developer with over 2 years of experience focused on
					crafting clean, creative and user‑friendly experiences. I develop responsive single page
					applications using modern web technologies, carefully thinking about the architecture and code."
				/>
			</div>

			<List />

			<Button text="More About" setAboutModalValue={setAboutModalValue} />
		</div>
	);
};