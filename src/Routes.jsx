import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import Overview from './components/pages/Overview.jsx';
import CustomerProfile from './components/pages/CustomerProfile';
import NewOrder from './components/pages/NewOrder';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Overview} />
		<Route path="customers" component={CustomerProfile} />
		<Route path="orders" component={NewOrder} />
	</Route>
);

export default routes;
