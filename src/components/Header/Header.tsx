import React from 'react';
import { Navigation } from './Navigation/Navigation';
import { Content } from './Content/Content';
import { Decor } from '../Decor/Decor';

export const Header: React.FC = () => {
	return (
		<header className="header">
			<Navigation />

			<Content />

			<Decor fill="#2a2a2a"/>
		</header>
	);
};