import React, { useEffect, useState } from 'react';
import ProductAPI from '../../api/ProductAPI';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import { addCart } from '../../redux/action/ActionCart';
import { toast } from 'react-toastify';

function Detail(props) {
	// State Detail
	const [detail, setDetail] = useState({});
	// State sản phẩm cùng categories
	const [product, setProduct] = useState([]);

	const dispatch = useDispatch();

	//id params cho từng sản phẩm
	const { id } = useParams();

	//id_user được lấy từ redux
	const id_user = useSelector((state) => state.Cart.id_user);

	useEffect(() => {
		const fetchData = async () => {
			const response = await ProductAPI.getAPI();

			const filterData = response.data.filter((data) => data._id.$oid === id);

			const filterCategory = response.data.filter(
				(data) =>
					data.category === filterData[0].category &&
					data._id.$oid !== filterData[0]._id.$oid
			);
			setDetail(filterData[0]);
			setProduct(filterCategory);
		};
		fetchData();
	}, []);

	//Phần này là để thay đổi số lượng khi mua sản phẩm
	const [text, setText] = useState(1);
	const onChangeText = (e) => {
		setText(e.target.value);
	};
	//Tăng lên 1 đơn vị
	const upText = () => {
		const value = parseInt(text) + 1;

		setText(value);
	};

	//Giảm 1 đơn vị
	const downText = () => {
		const value = parseInt(text) - 1;
		if (value === 0) return;
		setText(value);
	};
	//Hàm này là Thêm Sản Phẩm
	const addToCart = () => {
		let id_user_cart = '';

		if (localStorage.getItem('id_user')) {
			id_user_cart = localStorage.getItem('id_user');
		} else {
			id_user_cart = id_user;
		}

		const data = {
			idUser: id_user_cart,
			idProduct: detail._id.$oid,
			nameProduct: detail.name,
			priceProduct: detail.price,
			count: text,
			img: detail.img1,
		};

		if (localStorage.getItem('id_user')) {
			const cartItem = {
				idUser: id_user_cart,
				idProduct: detail._id.$oid, // Lấy idProduct
				count: text, // Lấy số lượng
			};

			localStorage.setItem('CART_ITEM', JSON.stringify(cartItem));
		} else {
			const action = addCart(data);
			dispatch(action);
		}

		toast.success('Bạn Đã Thêm Hàng Thành Công!');
	};
	return (
		<>
			<Navbar />
			<section className="py-5">
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-6">
							<div className="row m-sm-0">
								<div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0">
									<div
										className="owl-thumbs d-flex flex-row flex-sm-column"
										data-slider-id="1">
										<div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0">
											<img className="w-100" src={detail.img1} alt="..." />
										</div>
										<div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0">
											<img className="w-100" src={detail.img2} alt="..." />
										</div>
										<div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0">
											<img className="w-100" src={detail.img3} alt="..." />
										</div>
										<div className="owl-thumb-item flex-fill mb-2 mr-2 mr-sm-0">
											<img className="w-100" src={detail.img4} alt="..." />
										</div>
									</div>
								</div>

								<div
									id="carouselExampleControls"
									className="carousel slide col-sm-10 order-1 order-sm-2"
									data-ride="carousel">
									<div className="carousel-inner owl-carousel product-slider">
										<div className="carousel-item active">
											<img
												className="d-block w-100"
												src={detail.img1}
												alt="First slide"
											/>
										</div>
										<div className="carousel-item">
											<img
												className="d-block w-100"
												src={detail.img2}
												alt="Second slide"
											/>
										</div>
										<div className="carousel-item">
											<img
												className="d-block w-100"
												src={detail.img3}
												alt="Third slide"
											/>
										</div>
										<div className="carousel-item">
											<img
												className="d-block w-100"
												src={detail.img4}
												alt="Third slide"
											/>
										</div>
									</div>
									<a
										className="carousel-control-prev"
										href="#carouselExampleControls"
										role="button"
										data-slide="prev">
										<span
											className="carousel-control-prev-icon"
											aria-hidden="true"></span>
										<span className="sr-only">Previous</span>
									</a>
									<a
										className="carousel-control-next"
										href="#carouselExampleControls"
										role="button"
										data-slide="next">
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<h1>{detail.name}</h1>
							<p className="text-muted lead">
								{' '}
								{detail.price &&
									detail.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
										' VND'}
							</p>
							<p className="text-small mb-4">{detail.short_desc}</p>
							<div className="mb-4">
								<strong className="text-uppercase text-dark">Category:</strong>
								<a className="reset-anchor ml-2">{detail.category}</a>
							</div>

							<div className="row align-items-stretch mb-4">
								<div className="col-sm-5 pr-sm-0">
									<div className="border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white">
										<span className="small text-uppercase text-gray mr-4 no-select">
											Quantity
										</span>
										<div className="quantity">
											<button
												className="dec-btn p-0"
												style={{ cursor: 'pointer' }}>
												<i className="fas fa-caret-left" onClick={downText}></i>
											</button>
											<input
												className="form-control border-0 shadow-0 p-0"
												type="text"
												value={text}
												onChange={onChangeText}
											/>
											<button
												className="inc-btn p-0"
												style={{ cursor: 'pointer' }}>
												<i className="fas fa-caret-right" onClick={upText}></i>
											</button>
										</div>
									</div>
								</div>
								<div className="col-sm-3 pl-sm-0">
									<a
										className="btn btn-dark btn-sm btn-block d-flex align-items-center justify-content-center px-0 text-white"
										onClick={addToCart}>
										Add to cart
									</a>
								</div>
							</div>
						</div>
					</div>
					<br />
					<br />

					<div className="nav-item">
						<a
							className="nav-link"
							style={{
								backgroundColor: '#383838',
								color: '#ffffff',
								width: '144px',
								height: '40px',
								textAlign: 'center',
							}}>
							DESCRIPTION
						</a>
					</div>
					<div className="mt-4">
						<h6 className="text-uppercase mt-4 mb-4">Product description </h6>
						<div
							style={{
								whiteSpace: 'pre-wrap',
							}}>
							<p className="text-muted text-small mb-0">{detail.long_desc}</p>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<h2 className="h5 text-uppercase mb-4">Related products</h2>
					<div className="row">
						{product.length > 0 &&
							product.map((value) => {
								return (
									<div className="col-lg-3 col-sm-6" key={value._id.$oid}>
										<div className="product text-center skel-loader">
											<div className="d-block mb-3 position-relative">
												<div className="d-block">
													<img
														className="img-fluid w-100"
														src={value.img1}
														alt="..."
													/>
												</div>
											</div>
											<h6>
												{' '}
												<a className="reset-anchor">{value.name}</a>
											</h6>
											<p className="small text-muted">
												{value.price &&
													value.price.replace(
														/(\d)(?=(\d{3})+(?!\d))/g,
														'$1.'
													) + ' VND'}
											</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Detail;
