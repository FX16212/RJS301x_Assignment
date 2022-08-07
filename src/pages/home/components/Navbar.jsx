import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();
	const [active, setActive] = useState('Home');

	const handlerActive = (value) => {
		setActive(value);
	};

	return (
		<div className="container px-0 px-lg-3">
			<nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
				<div className="navbar-brand" onClick={() => navigate('/')}>
					<span className="font-weight-bold text-uppercase text-dark">
						Boutique
					</span>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item" onClick={() => handlerActive('Home')}>
							<div
								className="nav-link"
								onClick={() => navigate('/')}
								style={
									active === 'Home' ? { color: '#dcb14a' } : { color: 'black' }
								}>
								Home
							</div>
						</li>
						<li className="nav-item" onClick={() => handlerActive('Shop')}>
							<div
								className="nav-link"
								onClick={() => navigate('/shop')}
								style={
									active === 'Shop' ? { color: '#dcb14a' } : { color: 'black' }
								}>
								Shop
							</div>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<div className="nav-link" onClick={() => navigate('/cart')}>
								<i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart
							</div>
						</li>
						<li className="nav-item">
							<div className="nav-link" onClick={() => navigate('/login')}>
								<i className="fas fa-user-plus mr-1 text-gray"></i>Login
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
