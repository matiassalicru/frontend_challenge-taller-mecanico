import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import { Home } from './Home';
import { ShowPropietarios } from './ShowPropietarios';

export const AppRouter = () => {
	return (
		<div className='main'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/props' component={ShowPropietarios} />

					<Redirect to='/' />
				</Switch>
			</Router>
		</div>
	);
};
