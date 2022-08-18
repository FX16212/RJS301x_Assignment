import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import LoginLink from '../../login/LoginLink';
import LogoutLink from '../../logout/LogoutLink';
import Name from '../../logout/Name';

/* Redux */
import { userLogin } from '../../../redux/action/ActionUser';

function Navbar() {
	const [active, setActive] = useState('Home');
	const navigate = useNavigate();

	const dispatch = useDispatch();

	//Get loginInfo & nameInfo từ LocalStorage
	const loginInfo = localStorage.getItem('USER_INFO');
	const nameInfo = localStorage.getItem('name_user');

	// Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của LocalStorage vẫn còn thì nó sẽ tiếp tục
	// đưa dữ liệu vào Redux
	if (loginInfo) {
		const action = userLogin(JSON.parse(loginInfo));
		dispatch(action);
	}

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
						<li className="nav-item" onClick={() => setActive('Home')}>
							<div
								className="nav-link"
								onClick={() => navigate('/')}
								style={
									active === 'Home' ? { color: '#dcb14a' } : { color: 'black' }
								}>
								Home
							</div>
						</li>
						<li className="nav-item" onClick={() => setActive('Shop')}>
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
						{nameInfo ? <Name /> : ''}
						{loginInfo ? <LoginLink /> : <LogoutLink />}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
