import React, { useEffect, useState } from 'react';
import ProductAPI from '../../../api/ProductAPI';
import { useDispatch, useSelector } from 'react-redux';
import { showPopup, hidePopup } from '../../../redux/action/ActionModalPopUp';
import Popup from './Popup';

function Products() {
	const dispatch = useDispatch();
	// State
	const [products, setProducts] = useState([]);

	// Fetch all products
	useEffect(() => {
		const fetchData = async () => {
			const response = await ProductAPI.getAPI();
			const data = response.data.splice(0, 8);
			setProducts(data);
		};
		fetchData();
	}, []);
	// Lấy dữ liệu từ Redux
	const { isOpen, product } = useSelector((state) => state.modal);

	const handleShowPopup = (product) => {
		dispatch(showPopup(product));
	};

	const handleClose = () => {
		dispatch(hidePopup());
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
														handleShowPopup(product);
													}}
												/>
											</div>
										</div>
										<h6>
											{' '}
											<a className="reset-anchor" href="#">
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
			{isOpen && <Popup product={product} handleClose={handleClose} />}
		</>
	);
}

export default Products;
