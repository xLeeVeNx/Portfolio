import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';

type ContentPropsType = {
	setAboutModalValue: (value: boolean) => void;
}

export const Content: React.FC<ContentPropsType> = ({setAboutModalValue}) => {
	return (
		<div className="about__inner">
			<LeftSide />

			<RightSide setAboutModalValue={setAboutModalValue} />
		</div>
	);
};