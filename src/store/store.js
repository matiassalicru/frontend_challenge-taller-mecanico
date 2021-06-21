import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { propReducer } from './reducers/propReducer';
import { carReducer } from './reducers/carReducer';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose; //Para utilizar esto hay que importar compose.

const reducers = combineReducers({
	propietarios: propReducer,
	autos: carReducer,
});

export const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);
