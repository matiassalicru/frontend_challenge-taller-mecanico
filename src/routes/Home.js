import React from 'react';
import { Template } from '../components/Template';
import taller from '../assets/taller.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProp } from '../store/actions/prop';

export const Home = () => {
	const dispatch = useDispatch();

	return (
		<>
			<header className='app-header'>
				<h1 className='title'>Taller Mecánico</h1>
			</header>

			<img className='main-img' src={taller} alt='hombre arreglando motor' />
			<Template>
				<Link to='/props' className='btn'>
					Ver Propietarios
				</Link>
				<Link to='/create' className='btn'>
					Añadir nuevo propietario
				</Link>
			</Template>
		</>
	);
};
