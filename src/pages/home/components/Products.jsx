import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import ProductAPI from '../../../api/ProductAPI';
import Popup from './Popup';

function Products() {
	// const navigate = useNavigate();

	// State
	const [products, setProducts] = useState([]);
	const [state, setState] = React.useState({ open: false, product: '' });
	// Fetch all products
	useEffect(() => {
		const fetchData = async () => {
			const response = await ProductAPI.getAPI();
			const data = response.data.splice(0, 8);
			setProducts(data);
		};
		fetchData();
	}, []);

	const handlePopup = (product) => {
		setState({ open: true, product: product });
	};

	const handleClose = () => {
		setState({ open: false, product: '' });
	};

	return (
		<>
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
											<div className="d-block">
												<img
													className="img-fluid w-100"
													src={product.img1}
													alt="..."
													onClick={() => {
														handlePopup(product);
													}}
												/>
											</div>
										</div>
										<h6>
											{' '}
											<a className="reset-anchor">{product.name}</a>
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
			{state.open && (
				<Popup product={state.product} handleClose={handleClose} />
			)}
		</>
	);
}

export default Products;
