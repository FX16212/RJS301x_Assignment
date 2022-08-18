import React, { useEffect, useState } from 'react';
import ProductAPI from '../../api/ProductAPI';
import { Link, useParams } from 'react-router-dom';
import AddToCard from './components/AddToCard';
import Navbar from '../home/components/Navbar';
import Loading from '../home/components/Loading';
import Footer from '../home/components/Footer';

function Detail() {
	/*	State Detail */
	const [detail, setDetail] = useState({});

	// State sản phẩm cùng categories
	const [product, setProduct] = useState([]);

	//id params cho từng sản phẩm
	const { id } = useParams();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
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
			setLoading(false);
		};
		fetchData();
	}, [id]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
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
										<strong className="text-uppercase text-dark">
											Category:
										</strong>
										<button className="reset-anchor ml-2">
											{detail.category}
										</button>
									</div>

									<AddToCard product={detail} />
								</div>
							</div>
							<br />
							<br />

							<div className="nav-item">
								<button
									className="nav-link"
									style={{
										backgroundColor: '#383838',
										color: '#ffffff',
										width: '144px',
										height: '40px',
										textAlign: 'center',
									}}>
									DESCRIPTION
								</button>
							</div>
							<div className="mt-4">
								<h6 className="text-uppercase mt-4 mb-4">
									Product description{' '}
								</h6>
								<div
									style={{
										whiteSpace: 'pre-wrap',
									}}>
									<p className="text-muted text-small mb-0">
										{detail.long_desc}
									</p>
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
															<Link to={`/detail/${value._id.$oid}`}>
																<img
																	className="img-fluid w-100"
																	src={value.img1}
																	alt="..."
																/>
															</Link>
														</div>
													</div>
													<h6>
														{' '}
														<button className="reset-anchor" href="#">
															{value.name}
														</button>
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
			)}
		</>
	);
}

export default Detail;
