import React from 'react';
import { ListItem } from './ListItem';

export const ItemList = ({ items, deleteItem }) => {
	return (
		<ul className='list__main'>
			{items.map((item, i) => (
				<ListItem key={i} item={item} deleteItem={deleteItem} />
			))}
		</ul>
	);
};
