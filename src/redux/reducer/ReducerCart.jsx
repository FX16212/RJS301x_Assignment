import { ADD_CART, DELETE_CART, UPDATE_CART } from '../action/ActionTypes';

const getLocalStorage = () => {
	let cart = localStorage.getItem('cart');
	if (cart) {
		return JSON.parse(localStorage.getItem('cart'));
	} else {
		return [];
	}
};

const initialState = {
	cart: getLocalStorage(),
};

const ReducerCart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			const { id, qty, product } = action.payload;
			const tempItem = state.cart.find((i) => i.id === id);

			/* Nếu thêm  sản phẩm bị trùng thì sẽ thêm qty cho sản phẩm
		 Nếu thêm  sản phẩm không bị trùng thì sẽ thêm mới sản phẩm */

			if (tempItem) {
				const tempCart = state.cart.map((cartItem) => {
					if (cartItem.id === id) {
						let newQty = cartItem.qty + qty;
						return { ...cartItem, qty: newQty };
					} else {
						return cartItem;
					}
				});

				return { ...state, cart: tempCart };
			} else {
				const newItem = {
					id,
					product,
					qty,
				};
				return { ...state, cart: [...state.cart, newItem] };
			}
		case DELETE_CART:
			const tempCart = state.cart.filter((item) => item.id !== action.payload);
			return { ...state, cart: tempCart };
		case UPDATE_CART:
			const { ids, value } = action.payload;
			const tempCarts = state.cart.map((item) => {
				if (item.id === ids) {
					if (value === 'inc') {
						let newAmount = item.qty + 1;
						return { ...item, qty: newAmount };
					}
					if (value === 'dec') {
						let newAmount = item.qty - 1;
						return { ...item, qty: newAmount };
					}
				}
				return item;
			});

			return { ...state, cart: tempCarts };

		default:
			return state;
	}

	// throw new Error(`No Matching "${action.type}" - action type`);
};

export default ReducerCart;
