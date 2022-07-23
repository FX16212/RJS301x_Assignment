import React from 'react';
import NavbarList from '../../data/navBar.json'; // import data from json file
import './NavBarItem.css';

function NavBarItem() {
	return (
		<div className="navbar">
			<div className="navbar-list">
				<div className="navbar-list-container">
					{NavbarList.map((navBar, index) => {
						return (
							<div
								className={
									'navbar-list-item ' + `${navBar.active ? 'active' : ''}`
								}
								key={index}>
								<i className={'fas ' + `${navBar.icon}`} />
								<span>{navBar.type}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default NavBarItem;
