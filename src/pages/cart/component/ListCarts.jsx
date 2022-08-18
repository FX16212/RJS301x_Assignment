import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, deleteCart } from '../../../redux/action/ActionCart';
import { toast } from 'react-toastify';

function ListCart({ id, product, qty }) {
	// Lấy dữ liệu cart từ Redux store
	const { cart } = useSelector((state) => state.cart);

	// Sate Update Qty
	const [quantity, setQuantity] = useState(qty);

	const dispatch = useDispatch();

	const handlerChangeQty = (e) => {
		setQuantity(e.target.value);
	};

	const increase = () => {
		setQuantity((quantity) => quantity + 1);
		dispatch(updateCart(id, 'inc'));
		toast.warning('Updated quantity!');
	};
	const decrease = () => {
		setQuantity((quantity) => quantity - 1);
		dispatch(updateCart(id, 'dec'));
		toast.warning('Updated quantity!');
	};

	const handleDeleteCart = (id) => {
		// Delete the cart from redux store
		dispatch(deleteCart(id));

		// Delete the cart from the localStorage
		cart.splice(id, 1);
		localStorage.setItem('cart', JSON.stringify(cart));

		toast.error('Bạn đã xóa sản phẩm thành công!');
	};

	return (
		<div className="table-responsive mb-4">
			<table className="table">
				<thead className="bg-light">
					<tr className="text-center">
						<th className="border-0" scope="col">
							{' '}
							<strong className="text-small text-uppercase">Image</strong>
						</th>
						<th className="border-0" scope="col">
							{' '}
							<strong className="text-small text-uppercase">Product</strong>
						</th>
						<th className="border-0" scope="col">
							{' '}
							<strong className="text-small text-uppercase">Price</strong>
						</th>
						<th className="border-0" scope="col">
							{' '}
							<strong className="text-small text-uppercase">Quantity</strong>
						</th>
						<th className="border-0" scope="col">
							{' '}
							<strong className="text-small text-uppercase">Total</strong>
						</th>
						<th className="border-0" scope="col">
							{' '}
							<strong className="text-small text-uppercase">Remove</strong>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-center" key={id}>
						<td className="pl-0 border-0">
							<div className="media align-items-center justify-content-center">
								<Link
									className="reset-anchor d-block animsition-link"
									to={`/detail/${id}`}>
									<img src={product.img1} alt={product.name} width="70" />
								</Link>
							</div>
						</td>
						<td className="align-middle border-0">
							<div className="media align-items-center justify-content-center">
								<Link
									className="reset-anchor h6 animsition-link"
									to={`/detail/${id}`}>
									{product.name}
								</Link>
							</div>
						</td>

						<td className="align-middle border-0">
							<p className="mb-0 small">
								{product.price &&
									product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
										' VND'}
							</p>
						</td>
						<td className="align-middle border-0">
							<div className="quantity justify-content-center">
								<button
									className="dec-btn p-0"
									style={{ cursor: 'pointer' }}
									onClick={decrease}>
									<i className="fas fa-caret-left"></i>
								</button>
								<input
									className="form-control form-control-sm border-0 shadow-0 p-0"
									type="number"
									min="1"
									value={quantity}
									onChange={handlerChangeQty}
								/>
								<button
									className="inc-btn p-0"
									style={{ cursor: 'pointer' }}
									onClick={increase}>
									<i className="fas fa-caret-right"></i>
								</button>
							</div>
						</td>
						<td className="align-middle border-0">
							<p className="mb-0 small">
								{(parseInt(product.price) * parseInt(quantity))
									.toFixed(0)
									.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND'}
							</p>
						</td>
						<td className="align-middle border-0">
							<button
								className="reset-anchor remove_cart"
								style={{ cursor: 'pointer' }}
								onClick={() => handleDeleteCart(id)}>
								<i className="fas fa-trash-alt small text-muted"></i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ListCart;
