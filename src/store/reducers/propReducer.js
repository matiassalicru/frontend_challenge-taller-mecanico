import { types } from '../types';

const initialState = {};

export const propReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.propGet:
			console.log('PropGet');

			const newState = action.payload.props;

			console.log(newState);
			return {
				...state,
				newState,
			};

		default:
			return state;
	}
};
