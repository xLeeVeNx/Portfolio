import React from 'react';
import { openModal } from '../pureFunctions/openModal';

type ButtonPropsType = {
	text: string;
	setAboutModalValue?: (value: boolean) => void;
}

export const Button: React.FC<ButtonPropsType> = ({text, setAboutModalValue}) => {
	if (setAboutModalValue) {
		return (
			<button className="button" onClick={ () => openModal(setAboutModalValue) }>{ text }</button>
		);
	} else {
		return (
			<a className="button" href="/">{ text }</a>
		);
	}
};