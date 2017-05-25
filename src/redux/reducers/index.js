import { combineReducers } from 'redux';
import customers from './customers';
import orders from './orders';

const rootReducer = combineReducers({
	customers,
	orders,
});

export default rootReducer;