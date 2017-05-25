import {
	ADD_NEW_ORDER,
	UPDATE_NEW_ORDER_FIELD,
} from '../actionTypes';

export function addOrder() {
	return {
		type: ADD_NEW_ORDER,
	};
}

export function updateNewOrderField(field, value) {
	return {
		type: UPDATE_NEW_ORDER_FIELD,
		field,
		value,
	};
}
