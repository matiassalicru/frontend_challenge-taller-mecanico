import { types } from '../types';

export const getProp = () => {
	return dispatch => {
		fetch('http://localhost:5000/prop/getall')
			.then(res => res.json())
			.then(data => {
				dispatch(setProps(data));
			});
	};
};

export const setProps = props => {
	return {
		type: types.propGet,
		payload: props,
	};
};
