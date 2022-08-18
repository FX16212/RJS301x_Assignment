import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/action/ActionCart';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

function AddToCard({ product }) {
	const dispatch = useDispatch();
	const { id } = useParams();
	const cartItems = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];
	//Phần này là để thay đổi số lượng khi mua sản phẩm
	const [qty, setQty] = useState(1);
	const onChangeQty = (e) => {
		setQty(e.target.value);
	};
	//Tăng lên 1 đơn vị
	const increase = () => {
		setQty((oldQty) => {
			let temQty = oldQty + 1;
			return temQty;
		});
	};

	//Giảm 1 đơn vị
	const decrease = () => {
		setQty((oldQty) => {
			let temQty = oldQty - 1;
			return temQty;
		});
	};

	//Hàm này là Thêm Sản Phẩm
	const addCart = () => {
		const data = {
			id,
			qty,
			product,
		};

		cartItems.push(data);

		/* Save To LocalStorage */
		localStorage.setItem('cart', JSON.stringify(cartItems));

		/* Save To Redux */
		dispatch(addToCart(id, qty, product));

		toast.success('Bạn Đã Thêm Hàng Thành Công!');
	};
	return (
		<div className="row align-items-stretch mb-4">
			<div className="col-sm-5 pr-sm-0">
				<div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
					<span className="small text-uppercase text-gray mr-4 no-select">
						Quantity
					</span>
					<div className="quantity">
						<button className="dec-btn p-0" style={{ cursor: 'pointer' }}>
							<i className="fas fa-caret-left" onClick={decrease}></i>
						</button>
						<input
							className="form-control border-0 shadow-0 p-0"
							type="text"
							value={qty}
							onChange={onChangeQty}
						/>
						<button className="inc-btn p-0" style={{ cursor: 'pointer' }}>
							<i className="fas fa-caret-right" onClick={increase}></i>
						</button>
					</div>
				</div>
			</div>
			<div className="col-sm-3 pl-sm-0">
				<Link to="/cart">
					<button
						className="btn btn-dark btn-sm btn-block d-flex align-items-center justify-content-center px-0 text-white"
						onClick={addCart}>
						Add to cart
					</button>
				</Link>
			</div>
		</div>
	);
}

export default AddToCard;
