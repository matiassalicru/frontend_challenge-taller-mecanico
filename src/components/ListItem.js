import React from 'react';

export const ListItem = ({ item, deleteItem }) => {
	return (
		<li className='list__item'>
			<p>{item.marca}</p>
			<button className='list__item-btn'>🗑️</button>
		</li>
	);
};
