import React from 'react';
import { useNavigate } from 'react-router-dom';
import Images from '../../../share/img/Images';

function Categories() {
	const navigate = useNavigate();

	return (
		<section className="pt-5">
			{/* Header */}
			<header className="text-center">
				<p className="small text-muted small text-uppercase mb-1">
					Carefully created collections
				</p>
				<h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
			</header>

			<div className="row">
				{/* Product 1 */}
				<div className="col-md-6 mb-6 mb-md-0">
					<div className="category-item mb-4" onClick={() => navigate('/shop')}>
						<img src={Images.product1} alt="" className="img-fluid" />
					</div>
				</div>
				{/* Product 2 */}
				<div className="col-md-6 mb-6 mb-md-0">
					<div className="category-item mb-4" onClick={() => navigate('/shop')}>
						<img src={Images.product2} alt="" className="img-fluid" />
					</div>
				</div>
				{/* Product 3 */}
				<div className="col-md-4 mb-4 mb-md-0">
					<div className="category-item mb-4" onClick={() => navigate('/shop')}>
						<img src={Images.product3} alt="" className="img-fluid" />
					</div>
				</div>
				{/* Product 4 */}
				<div className="col-md-4 mb-4 mb-md-0">
					<div className="category-item mb-4" onClick={() => navigate('/shop')}>
						<img src={Images.product4} alt="" className="img-fluid" />
					</div>
				</div>
				{/* Product 5 */}
				<div className="col-md-4 mb-4 mb-md-0">
					<div className="category-item mb-4" onClick={() => navigate('/shop')}>
						<img src={Images.product5} alt="" className="img-fluid" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Categories;
