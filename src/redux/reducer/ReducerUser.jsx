import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from '../action/ActionTypes';

const user = JSON.parse(localStorage.getItem('LIST_USER'));

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

const ReducerAuth = (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER:
			return {
				...state,
				isLoggedIn: false,
			};
		case USER_LOGIN:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload.user,
			};
		case USER_LOGOUT:
			return {
				...state,
				isLoggedIn: false,
			};

		default:
			return state;
	}
};
export default ReducerAuth;
