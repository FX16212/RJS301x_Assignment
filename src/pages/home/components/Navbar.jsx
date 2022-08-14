import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../../redux/action/ActionCart';
import { addSession } from '../../../redux/action/ActionSession';
import LoginLink from '../../login/LoginLink';
import LogoutLink from '../../logout/LogoutLink';
import Name from '../../logout/Name';

function Navbar() {
	const [active, setActive] = useState('Home');
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const id_user = localStorage.getItem('id_user');

	// Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của LocalStorage vẫn còn thì nó sẽ tiếp tục
	// đưa dữ liệu vào Redux
	if (id_user) {
		const action = addSession(id_user);
		dispatch(action);
	} else {
		//Đưa idTemp vào Redux temp để tạm lưu trữ
		localStorage.setItem('id_temp', 'abc999');
		const action = addUser(localStorage.getItem('id_temp'));
		dispatch(action);
	}

	//Get IdUser từ redux khi user đã đăng nhập
	const idUser = useSelector((state) => state.Session.idUser);

	const [loginUser, setLoginUser] = useState(false);
	const [nameUser, setNameUser] = useState(false);

	useEffect(() => {
		if (!idUser) {
			setLoginUser(false);
			setNameUser(false);
		} else {
			setLoginUser(true);
			setNameUser(true);
		}
	}, [idUser]);

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
						{nameUser ? <Name /> : ''}
						{loginUser ? <LoginLink /> : <LogoutLink />}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
