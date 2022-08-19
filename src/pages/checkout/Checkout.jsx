import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Loading from '../home/components/Loading';
import './Checkout.css';

function Checkout() {
	const [loading, setLoading] = useState(false);
	const [totalPrice, setTotalPrice] = useState();

	const { cart } = useSelector((state) => state.cart);
	useEffect(() => {
		let sub_total = 0;
		cart.map((item) => {
			return (sub_total += parseInt(item.product.price) * parseInt(item.qty));
		});
		setTotalPrice(sub_total);
	}, [cart]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);
	const onSubmit = () => {};
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<div className="container">
						<section className="py-5 bg-light">
							<div className="container">
								<div className="row px-4 px-lg-5 py-lg-4 align-items-center">
									<div className="col-lg-6">
										<h1 className="h2 text-uppercase mb-0">Checkout</h1>
									</div>
									<div className="col-lg-6 text-lg-right">
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb justify-content-lg-end mb-0 px-0">
												<li className="breadcrumb-item">
													<a href="/">Home</a>
												</li>
												<li className="breadcrumb-item">
													<a href="/cart">Cart</a>
												</li>
												<li
													className="breadcrumb-item active"
													aria-current="page">
													Checkout
												</li>
											</ol>
										</nav>
									</div>
								</div>
							</div>
						</section>
						<section className="py-5">
							<h2 className="h5 text-uppercase mb-4">Billing details</h2>
							<div className="row">
								<div className="col-lg-8">
									<form>
										<div className="row">
											<div className="col-lg-12 form-group">
												<label
													className="text-small text-uppercase"
													htmlFor="Fullname">
													Full Name:
												</label>
												<input
													className="form-control form-control-lg"
													placeholder="Enter Your Full Name Here!"
													{...register('fullname', {
														required: true,
													})}
												/>
												{errors.fullname && (
													<p className="text-danger">
														* Full Name is required !
													</p>
												)}
											</div>
											<div className="col-lg-12 form-group">
												<label
													className="text-small text-uppercase"
													htmlFor="Email">
													Email:{' '}
												</label>
												<input
													className="form-control form-control-lg"
													placeholder="Enter Your Email Here!"
													{...register('email', {
														required: true,
														pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													})}
												/>
												{errors.email?.type === 'required' && (
													<p className="text-danger">* Email is required !</p>
												)}
												{errors.email?.type === 'pattern' && (
													<p className="text-danger">
														* Incorrect Email Format
													</p>
												)}
											</div>
											<div className="col-lg-12 form-group">
												<label
													className="text-small text-uppercase"
													htmlFor="Phone">
													Phone Number:{' '}
												</label>
												<input
													className="form-control form-control-lg"
													placeholder="Enter Your Phone Number Here!"
													{...register('phone', {
														required: true,
													})}
												/>
												{errors.phone && (
													<p className="text-danger">
														* Phone Number is required!
													</p>
												)}
											</div>
											<div className="col-lg-12 form-group">
												<label
													className="text-small text-uppercase"
													htmlFor="Address">
													Address:{' '}
												</label>
												<input
													className="form-control form-control-lg"
													placeholder="Enter Your Address Here!"
													{...register('address', {
														required: true,
													})}
												/>
												{errors.address && (
													<p className="text-danger">
														* Your Address is required!
													</p>
												)}
											</div>
											<div className="col-lg-12 form-group">
												<button
													className="btn btn-dark"
													style={{ color: 'white' }}
													type="submit"
													onClick={handleSubmit(onSubmit)}>
													Place order
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-4">
									<div className="card border-0 rounded-0 p-lg-4 bg-light">
										<div className="card-body">
											<h5 className="text-uppercase mb-4">Your order</h5>
											<ul className="list-unstyled mb-0">
												{cart &&
													cart.map((item) => (
														<div key={item.id}>
															<li className="d-flex align-items-center justify-content-between">
																<strong className="small font-weight-bold">
																	{item.product.name}
																</strong>
																<span className="text-muted small">
																	{item.product.price &&
																		item.product.price.replace(
																			/(\d)(?=(\d{3})+(?!\d))/g,
																			'$1.'
																		) + ' VND'}{' '}
																	x {item.qty}
																</span>
															</li>
															<li className="border-bottom my-2"></li>
														</div>
													))}
												<li className="d-flex align-items-center justify-content-between">
													<strong className="text-uppercase small font-weight-bold">
														Total
													</strong>
													<span>
														{' '}
														{totalPrice &&
															totalPrice.toLocaleString('it-IT', {
																style: 'currency',
																currency: 'VND',
															})}
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					)
				</>
			)}
		</>
	);
}

export default Checkout;
