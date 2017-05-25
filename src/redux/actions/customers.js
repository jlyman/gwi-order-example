import { CALL_API } from 'redux-api-middleware';
import {
	ADD_NEW_CUSTOMER,
	UPDATE_NEW_CUSTOMER_FIELD,
	ADD_CUSTOMER_VALIDATION_ERROR_OCCURRED,

	GET_CUSTOMER_API_REQUEST_START,
	GET_CUSTOMER_API_REQUEST_SUCCESS,
	GET_CUSTOMER_API_REQUEST_ERROR,

	ADD_NEW_CUSTOMER_API_REQUEST_START,
	ADD_NEW_CUSTOMER_API_REQUEST_SUCCESS,
	ADD_NEW_CUSTOMER_API_REQUEST_ERROR,
} from '../actionTypes';
import { Customer } from '../../models';

export function getCustomers() {
	return {
		[CALL_API]: {
			endpoint: 'http://localhost:3003/customers',
			method: 'GET',
			types: [GET_CUSTOMER_API_REQUEST_START, GET_CUSTOMER_API_REQUEST_SUCCESS, GET_CUSTOMER_API_REQUEST_ERROR],
		}
	}
}

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
				types: [ADD_NEW_CUSTOMER_API_REQUEST_START, ADD_NEW_CUSTOMER_API_REQUEST_SUCCESS, ADD_NEW_CUSTOMER_API_REQUEST_ERROR],
				body: JSON.stringify(customer),
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json',
				},
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
