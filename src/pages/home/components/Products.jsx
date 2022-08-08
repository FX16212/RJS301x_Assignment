import React, { useEffect, useState } from 'react';
import ProductAPI from '../../../api/ProductApi';
import { useNavigate } from 'react-router-dom';
function Products() {
	// State
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	// Fetch all products
	useEffect(() => {
		const fetchData = async () => {
			const response = await ProductAPI.getAPI();
			const data = response.data.splice(0, 8);
			setProducts(data);
		};
		fetchData();
	}, []);
	return (
		<section className="py-5" id="section-products">
			{/* Header */}
			<header>
				<p className="small text-muted small text-uppercase mb-1">
					Made the hard way
				</p>
				<h2 className="h5 text-uppercase mb-4">Top trending products</h2>
			</header>
			{/* Products */}
			<div className="row">
				{products &&
					products.map((product) => {
						return (
							<div
								className="col-xl-3 col-lg-4 col-sm-6"
								key={product._id.$oid}>
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-"></div>
										<div
											className="d-block"
											onClick={() => navigate(`/detail/${product._id.$oid}`)}>
											<img
												className="img-fluid w-100"
												src={product.img1}
												alt="..."
											/>
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
						);
					})}
			</div>
		</section>
	);
}

export default Products;
