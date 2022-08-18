import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/action/ActionUser';

function LoginLink() {
	const dispatch = useDispatch();
	const onRedirect = () => {
		localStorage.clear();
		const action = userLogout('');
		dispatch(action);
	};

	return (
		<li className="nav-item" onClick={onRedirect}>
			<Link className="nav-link" to="/login">
				( Logout )
			</Link>
		</li>
	);
}

export default LoginLink;
