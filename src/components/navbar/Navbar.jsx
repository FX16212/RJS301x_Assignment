import React from 'react';
import './Navbar.css'; // import Css
import NavBarItem from './NavBarItem';

function Navbar() {
	return (
		<div>
			<div className="navbar-header">
				<div className="navbar-container">
					<h2 className="navbar-logo">Booking Website</h2>
					<div className="navbar-items">
						<button className="navbar-button">Register</button>
						<button className="navbar-button">Login</button>
					</div>
				</div>
			</div>
			<NavBarItem />
		</div>
	);
}

export default Navbar;
