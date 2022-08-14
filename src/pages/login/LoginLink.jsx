import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSession } from '../../redux/action/ActionSession';

function LoginLink(props) {
	const dispatch = useDispatch();
	const onRedirect = () => {
		localStorage.clear();
		const action = deleteSession('');
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
