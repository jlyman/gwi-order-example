import { combineReducers } from 'redux';
import { Order } from '../../models';
import {
	ADD_NEW_ORDER,
	UPDATE_NEW_ORDER_FIELD,
} from '../actionTypes';

export function newOrder(state = new Order(), action) {
	switch (action.type) {
		case ADD_NEW_ORDER:
			return new Order();
		case UPDATE_NEW_ORDER_FIELD:
			return Object.assign(
				new Order(),
				state,
				{ [action.field]: action.value
			});
		default:
			return state;
	}
}

export function ordersById(state = {}, action) {
	switch (action.type) {
		case ADD_NEW_ORDER:
			return {
				...state,
				[action.order.id]: action.order,
			};
		default:
			return state;
	}
}

export default combineReducers({
	ordersById,
	newOrder,
});
