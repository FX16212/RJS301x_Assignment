import React from 'react';
import Images from '../../../share/img/Images';
import { useNavigate } from 'react-router-dom';

function Banner() {
	const navigate = useNavigate();

	return (
		<section
			className="hero pb-3 bg-cover bg-center d-flex align-items-center"
			style={{ backgroundImage: `url(${Images.banner})` }}>
			<div className="container py-5">
				<div className="row px-4 px-lg-5">
					<div className="col-lg-6">
						<p className="text-muted small text-uppercase mb-2">
							New Inspiration 2020
						</p>
						<h1 className="h2 text-uppercase mb-3">20% off on new season</h1>
						<button className="btn btn-dark" onClick={() => navigate('/shop')}>
							Browse collections
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
