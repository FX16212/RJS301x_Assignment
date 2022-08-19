import { SHOW_POPUP, HIDE_POPUP } from '../action/ActionTypes';

const initialState = {
	isOpen: false,
	product: null,
};

const ReducerPopup = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_POPUP:
			const { product } = action.payload;
			return {
				...state,
				isOpen: true,
				product: product,
			};
		case HIDE_POPUP:
			return {
				...state,
				isOpen: false,
			};
		default:
			return state;
	}
};
export default ReducerPopup;
