import React from 'react';
import { Item } from './Inner/Item';

interface IAbout {
	[key: string]: string;
	id: string;
}

export const List: React.FC = () => {
	const data: IAbout[] = [
		{Name: 'Berdyev Damil', id: '1'},
		{Age: '18 years', id: '2'},
		{Phone: '+7-(777)-369-22-86', id: '3'},
		{Email: 'berdyevwork@mail.ru', id: '4'},
	];

	return (
		<ul className="about__list">
			{
				data.map(item => {
					const key = Object.keys(item)[0];
					const value = Object.values(item)[0];

					return <Item key={ item.id } label={ key } value={ value } />;
				})
			}
		</ul>
	);
};