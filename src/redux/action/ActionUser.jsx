import { USER_REGISTER, USER_LOGIN, USER_LOGOUT } from './ActionTypes';

export const userRegister = (payload) => {
	return {
		type: USER_REGISTER,
		payload,
	};
};

export const userLogin = (data) => {
	return {
		type: USER_LOGIN,
		payload: {
			user: data,
		},
	};
};

export const userLogout = () => {
	return {
		type: USER_LOGOUT,
	};
};
