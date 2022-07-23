import React from 'react';
import NavbarList from '../../data/navBar.json'; // import data from json file
import './NavBarItem.css';

function NavBarItem() {
	return (
		<div className="navbarItem">
			<div className="navbarItem-list">
				<div className="navbarItem-list-container">
					{NavbarList.map((navBar, index) => {
						return (
							<div
								className={
									'navbarItem-list-item ' + `${navBar.active ? 'active' : ''}`
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
