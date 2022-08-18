import { ADD_CART, DELETE_CART, UPDATE_CART } from './ActionTypes';

export const addToCart = (id, qty, product) => {
	return {
		type: ADD_CART,
		payload: { id, qty, product },
	};
};

export const deleteCart = (id) => {
	return {
		type: DELETE_CART,
		payload: id,
	};
};

export const updateCart = (ids, value) => {
	return {
		type: UPDATE_CART,
		payload: { ids, value },
	};
};
