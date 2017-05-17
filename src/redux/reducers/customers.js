import { combineReducers } from 'redux';
import { Customer } from '../../models';
import {
	ADD_NEW_CUSTOMER,
	UPDATE_NEW_CUSTOMER_FIELD,
} from '../actionTypes';

export function newCustomer(state = new Customer(), action) {
	switch (action.type) {
		case ADD_NEW_CUSTOMER:
			return new Customer();
		case UPDATE_NEW_CUSTOMER_FIELD:
			return Object.assign(
				new Customer(),
				state,
				{ [action.field]: action.value
			});
		default:
			return state;
	}
}

export function customersById(state = {}, action) {
	switch (action.type) {
		case ADD_NEW_CUSTOMER:
			return {
				...state,
				[action.customer.id]: action.customer,
			};
		default:
			return state;
	}
}

export default combineReducers({
	customersById,
	newCustomer,
});
