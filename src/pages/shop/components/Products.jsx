import React from 'react';
import { Link } from 'react-router-dom';

function Products({ Products, sort }) {
	if (sort === 'DownToUp') {
		Products.sort((a, b) => {
			return a.price - b.price;
		});
	} else if (sort === 'UpToDown') {
		Products.sort((a, b) => {
			return b.price - a.price;
		});
	}

	return (
		<div className="row">
			{/* -------------Product----------------- */}
			{Products &&
				Products.map((product) => (
					<div
						className="col-lg-4 col-sm-6 Section_Category"
						key={product._id.$oid}>
						<div className="product text-center">
							<div className="position-relative mb-3">
								<div className="badge text-white badge-"></div>
								<div className="d-block">
									<Link to={`/detail/${product._id.$oid}`}>
										<img
											className="img-fluid w-100"
											src={product.img1}
											alt="..."
										/>
									</Link>
								</div>
							</div>
							<h6>
								{' '}
								<a className="reset-anchor" href="detail.html">
									{product.name}
								</a>
							</h6>
							<p className="small text-muted">
								{product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
									' VND'}{' '}
							</p>
						</div>
					</div>
				))}
			{/* -------------Product----------------- */}
		</div>
	);
}

export default Products;
