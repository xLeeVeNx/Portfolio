import React, { useState } from 'react';

import { Header } from './Header/Header';
import { About } from './About/About';
import { Modal } from './Modal/Modal';
import { AboutBody } from './Modal/Inner/AboutBody/AboutBody';

export const App: React.FC = () => {
	const [aboutModalValue, setAboutModalValue] = useState(false);


	return (
		<div className="wrapper">
			<Header />
			<About setAboutModalValue={setAboutModalValue} />
			{
				aboutModalValue &&
				<Modal active={aboutModalValue} setActive={setAboutModalValue}>
					<AboutBody />
				</Modal>
			}
		</div>
	);
};
