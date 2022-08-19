import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReducerUser from './reducer/ReducerUser';
import ReducerCart from './reducer/ReducerCart';
import ReducerPopup from './reducer/ReducerModalPOpup';

const ReducerRoot = combineReducers({
	user: ReducerUser,
	cart: ReducerCart,
	modal: ReducerPopup,
});

const middleware = [thunk];

const store = createStore(
	ReducerRoot,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
