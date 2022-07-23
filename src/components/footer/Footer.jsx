import './Footer.css';
import footers from '../../data/footer';

const Footer = () => {
	return (
		<div className="footer">
			<div className="fLists">
				{footers.map((footer, index) => {
					return (
						<ul className="fList" key={index}>
							{footer.col_values.map((value, index) => {
								return (
									<li className="fListItem" key={index}>
										{value}
									</li>
								);
							})}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
