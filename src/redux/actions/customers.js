import { CALL_API } from 'redux-api-middleware';
import {
	ADD_NEW_CUSTOMER,
	UPDATE_NEW_CUSTOMER_FIELD,
	ADD_CUSTOMER_VALIDATION_ERROR_OCCURRED,

	ADD_CUSTOMER_API_REQUEST_START,
	ADD_CUSTOMER_API_REQUEST_SUCCESS,
	ADD_CUSTOMER_API_REQUEST_ERROR,
} from '../actionTypes';
import { Customer } from '../../models';

export function addCustomer() {
	return (dispatch, getState) => {
		const customer = getState().customers.newCustomer;

		// Validate required fields
		if (customer.name.length === 0) {
			dispatch({
				type: ADD_CUSTOMER_VALIDATION_ERROR_OCCURRED,
				field: 'name',
				error: 'Name is a required field',
			});
			return;
		}
		if (customer.address1.length === 0) {
			dispatch({
				type: ADD_CUSTOMER_VALIDATION_ERROR_OCCURRED,
				field: 'address1',
				error: 'Address is a required field',
			});
			return;
		}

		dispatch({
			[CALL_API]: {
				endpoint: 'http://localhost:3003/customers',
				method: 'POST',
				types: [ADD_CUSTOMER_API_REQUEST_START, ADD_CUSTOMER_API_REQUEST_SUCCESS, ADD_CUSTOMER_API_REQUEST_ERROR],
				body: JSON.stringify(customer),
				// headers: { 'Content-Type': 'application/json' },
			}
		});
	}
}

export function updateNewCustomerField(field, value) {
	return {
		type: UPDATE_NEW_CUSTOMER_FIELD,
		field,
		value,
	};
}
