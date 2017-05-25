import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, browserHistory } from 'react-router'
import allReducers from './redux/reducers';
import routes from './Routes';
import 'bootstrap/dist/css/bootstrap.css';

let store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
  	<Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
