import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CartTotal() {
	const [totalPrice, setTotalPrice] = useState();

	const { cart } = useSelector((state) => state.cart);
	useEffect(() => {
		let sub_total = 0;
		cart.map((item) => {
			return (sub_total += parseInt(item.product.price) * parseInt(item.qty));
		});
		setTotalPrice(sub_total);
	}, [cart]);

	return (
		<div className="col-lg-4">
			<div className="card border-0 rounded-0 p-lg-4 bg-light">
				<div className="card-body">
					<h5 className="text-uppercase mb-4">Cart total</h5>
					<ul className="list-unstyled mb-0">
						<li className="d-flex align-items-center justify-content-between">
							<strong className="text-uppercase small font-weight-bold">
								Subtotal
							</strong>
							<span className="text-muted small">
								{totalPrice &&
									totalPrice.toLocaleString('it-IT', {
										style: 'currency',
										currency: 'VND',
									})}
							</span>
						</li>
						<li className="border-bottom my-2"></li>
						<li className="d-flex align-items-center justify-content-between mb-4">
							<strong className="text-uppercase small font-weight-bold">
								Total
							</strong>
							<span>
								{totalPrice &&
									totalPrice.toLocaleString('it-IT', {
										style: 'currency',
										currency: 'VND',
									})}
							</span>
						</li>
						<li>
							<form>
								<div className="form-group mb-0">
									<input
										className="form-control"
										type="text"
										placeholder="Enter your coupon"
									/>
									<button
										className="btn btn-dark btn-sm btn-block"
										type="button">
										{' '}
										<i className="fas fa-gift mr-2"></i>Apply coupon
									</button>
								</div>
							</form>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CartTotal;
