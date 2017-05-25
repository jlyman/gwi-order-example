import { combineReducers } from 'redux';
import { Customer } from '../../models';
import {
	ADD_CUSTOMER_API_REQUEST_SUCCESS,
	UPDATE_NEW_CUSTOMER_FIELD,
	ADD_CUSTOMER_VALIDATION_ERROR_OCCURRED,
} from '../actionTypes';

export function newCustomer(state = new Customer(), action) {
	switch (action.type) {
		case ADD_CUSTOMER_API_REQUEST_SUCCESS:
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

export function newCustomerErrors(state = {}, action) {
	switch (action.type) {
		case ADD_CUSTOMER_VALIDATION_ERROR_OCCURRED:
			return { [action.field]: action.error };
		case ADD_CUSTOMER_API_REQUEST_SUCCESS:
			return {};
		default:
			return state;
	}
}

export function customersById(state = {}, action) {
	switch (action.type) {
		case ADD_CUSTOMER_API_REQUEST_SUCCESS: {
			const customer = action.payload;
				return {
					...state,
					[customer.id]: customer,
				};
			}
		default:
			return state;
	}
}

export default combineReducers({
	customersById,
	newCustomer,
	newCustomerErrors,
});
