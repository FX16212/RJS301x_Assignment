import React, { useEffect, useState } from 'react';

function Name(props) {
	const [name, setName] = useState('');
	useEffect(() => {
		const nameUser = localStorage.getItem('name_user');
		setName(nameUser);
	}, []);

	return (
		<li className="nav-item dropdown">
			<a
				className="nav-link dropdown-toggle"
				style={{ cursor: 'pointer' }}
				id="pagesDropdown"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false"
				href="#">
				<i className="fas fa-user-alt mr-1 text-gray"></i>
				{name}
			</a>
		</li>
	);
}

export default Name;
