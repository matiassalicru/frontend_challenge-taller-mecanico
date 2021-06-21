import { types } from '../types';

export const carReducer = (state = {}, action) => {
	switch (action.type) {
		case types.carGet:
			console.log('carGet');
			return state;

		default:
			return state;
	}
};
