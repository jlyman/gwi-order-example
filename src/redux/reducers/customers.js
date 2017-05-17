import { combineReducers } from 'redux';
import { Customer } from '../../models';

export function newCustomer(state = new Customer(), action) {
	switch (action.type) {
		default:
			return state;
	}
}

export function customersById(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default combineReducers({
	customersById,
	newCustomer,
});
