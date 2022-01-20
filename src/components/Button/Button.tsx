import React from 'react';
import { openModal } from '../pureFunctions/openModal';

type ButtonPropsType = {
	text: string;
	abs?: () => void;
}

export const Button: React.FC<ButtonPropsType> = ({text, abs}) => {
	if (abs) {
		return (
			<button className="button" onClick={ () => abs && openModal(abs) }>{ text }</button>
		);
	} else {
		return (
			<a className="button" href="/">{ text }</a>
		);
	}
};
