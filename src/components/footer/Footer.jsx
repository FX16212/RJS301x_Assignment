import './Footer.css';
import footers from '../../data/footer';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-Lists">
				{footers.map((footer, index) => {
					return (
						<ul className="footer-List" key={index}>
							{footer.col_values.map((value, index) => {
								return (
									<li className="footer-List-Item" key={index}>
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
