import React, { useEffect, useState } from 'react';
import ListCarts from './component/ListCarts';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';
import CartTotal from './component/CartTotal';
import { useSelector } from 'react-redux';
import Loading from '../home/components/Loading';

function Cart() {
	const { cart } = useSelector((state) => state.cart);
	const [loading, setLoading] = useState(false);
	//Hàm này dùng để redirect đến page checkout
	const [navigate, setNavigate] = useState(false);

	const onCheckout = () => {
		if (!localStorage.getItem('USER_INFO')) {
			toast.error('Vui Lòng Kiểm Tra Lại Đăng Nhập!');
			return;
		}

		if (cart.length === 0) {
			toast.error('Vui Lòng Kiểm Tra Lại Giỏ Hàng!');
			return;
		}

		setNavigate(true);
	};

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					{cart.length > 0 ? (
						<div className="container">
							<section className="py-5 bg-light">
								<div className="container">
									<div className="row px-4 px-lg-5 py-lg-4 align-items-center">
										<div className="col-lg-6">
											<h1 className="h2 text-uppercase mb-0">Cart</h1>
										</div>
										<div className="col-lg-6 text-lg-right">
											<nav aria-label="breadcrumb">
												<ol className="breadcrumb justify-content-lg-end mb-0 px-0">
													<li
														className="breadcrumb-item active"
														aria-current="page">
														Cart
													</li>
												</ol>
											</nav>
										</div>
									</div>
								</div>
							</section>
							<section className="py-5">
								<h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
								<div className="row">
									<div className="col-lg-8 mb-4 mb-lg-0">
										{cart.map((item) => (
											<ListCarts key={item.id} {...item} />
										))}
										<div className="bg-light px-4 py-3">
											<div className="row align-items-center text-center">
												<div className="col-md-6 mb-3 mb-md-0 text-md-left">
													<Link
														className="btn btn-link p-0 text-dark btn-sm"
														to={`/shop`}>
														<i className="fas fa-long-arrow-alt-left mr-2"> </i>
														Continue shopping
													</Link>
												</div>
												<div className="col-md-6 text-md-right">
													{navigate && <Navigate to={'/checkout'} />}
													<span
														className="btn btn-outline-dark btn-sm"
														onClick={onCheckout}>
														Procceed to checkout
														<i className="fas fa-long-arrow-alt-right ml-2"></i>
													</span>
												</div>
											</div>
										</div>
									</div>
									<CartTotal />
								</div>
							</section>
						</div>
					) : (
						<div
							style={{ minHeight: 'calc(100vh - 10rem)', padding: '5rem 0' }}>
							<div className="empty" style={{ textAlign: 'center' }}>
								<h2
									style={{
										textTransform: 'none',
										marginBottom: '1rem',
									}}>
									Your cart is empty
								</h2>
								<Link
									to="/shop"
									className="btn btn-primary btn-xs btn-xs-disabled"
									style={{ textTransform: 'uppercase' }}>
									fill it
								</Link>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
}

export default Cart;
