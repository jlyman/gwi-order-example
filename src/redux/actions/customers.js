import {
	ADD_NEW_CUSTOMER,
	UPDATE_NEW_CUSTOMER_FIELD,
} from '../actionTypes';
import { Customer } from '../../models';

export function addCustomer() {
	return (dispatch, getState) => {
		const customer = new Customer(getState().customers.newCustomer);
		customer.id = 1;

		dispatch({
			type: ADD_NEW_CUSTOMER,
			customer,
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
