import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register,';
import Shop from './pages/shop/Shop';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
