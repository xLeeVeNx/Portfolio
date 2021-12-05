import React from 'react';
import { Logo } from '../../Logo/Logo';
import { Menu } from './Inner/Menu';

export const Navigation: React.FC = () => {
	return (
		<nav className="nav">
			<div className="nav__inner">
				<Logo logoText="RD" />
				<Menu />
			</div>
		</nav>
	);
};