import { types } from '../types';

export const getCar = () => {
	return dispatch => {
		fetch('http://localhost:5000/car/getall')
			.then(res => res.json())
			.then(data => {
				dispatch(setCars(data));
			});
	};
};

export const setCars = cars => {
	return {
		type: types.carGet,
		payload: cars,
	};
};

export const deleteCar = id => {
	return {
		type: types.carGet,
		payload: id,
	};
};
