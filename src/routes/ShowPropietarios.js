import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ItemList } from '../components/ItemList';
import { getProp } from '../store/actions/prop';

export const ShowPropietarios = () => {
	const [data, setData] = useState([]);
	const dispatch = useDispatch();
	// GET STATE OF PROPIETARIOS
	const { newState } = useSelector(state => state.propietarios);

	useEffect(() => {
		dispatch(getProp());
	}, []);

	return (
		<>
			<Link className='btn' to='/'>
				Volver
			</Link>
			<ItemList items={data} />
		</>
	);
};
