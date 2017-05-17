import {
	ADD_NEW_CUSTOMER,
	UPDATE_NEW_CUSTOMER_FIELD,
} from '../actionTypes';

export function addCustomer(customer) {
	return {
		type: ADD_NEW_CUSTOMER,
		customer,
	};
}

export function updateNewCustomerField(field, value) {
	return {
		type: UPDATE_NEW_CUSTOMER_FIELD,
		field,
		value,
	};
}
