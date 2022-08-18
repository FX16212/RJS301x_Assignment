import React, { useRef, useEffect, useState } from 'react';
import Products from './components/Products';
import Pagination from './components/Pagination';
import SortProduct from './components/SortProduct';
import ProductAPI from '../../api/ProductAPI';
import Navbar from '../home/components/Navbar';
import Footer from '../home/components/Footer';
import Loading from '../home/components/Loading';

function Shop() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	// State để tìm kiếm sản phẩm
	const [search, setSearch] = useState('');

	//state dùng để sắp xếp sản phẩm
	const [sort, setSort] = useState('default');

	//Tổng số trang
	const [totalPage, setTotalPage] = useState();

	//Từng trang hiện tại
	const [pagination, setPagination] = useState({
		page: '1',
		qty: '9',
		search: '',
		category: 'all',
	});

	//Hàm nà dùng để lấy value từ component SortProduct truyền lên
	const handlerChangeSort = (value) => {
		setSort(value);
	};

	//Hàm này dùng để thay đổi state pagination.page
	//Nó sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
	const handlerChangePage = (value) => {
		//Sau đó set lại cái pagination để gọi chạy làm useEffect gọi lại API pagination
		setPagination({
			page: value,
			qty: pagination.qty,
			search: pagination.search,
			category: pagination.category,
		});
	};

	//Hàm này dùng để thay đổi state pagination.search
	//Hàm này sẽ truyền xuống Component con và nhận dữ liệu từ Component con truyền lên
	const handlerSearch = (value) => {
		setPagination({
			page: pagination.page,
			qty: pagination.qty,
			search: value,
			category: pagination.category,
		});
	};

	//Hàm này dùng để thay đổi state pagination.category
	const handlerCategory = (value) => {
		setPagination({
			page: pagination.page,
			qty: pagination.qty,
			search: pagination.search,
			category: value,
		});
	};

	// Gọi hàm useEffect tìm tổng số sản phẩm để tính tổng số trang
	// Và nó phụ thuộc và state pagination
	useEffect(() => {
		setLoading(true);
		const fetchAllData = async () => {
			const response = await ProductAPI.getAPI();
			const data = response.data;
			// Nếu mà category === 'all' thì nó sẽ gọi hàm get tất cả sản phẩm
			// Ngược lại thì nó sẽ gọi hàm pagination và phân loại sản phẩm

			switch (pagination.category) {
				case 'all':
					setProducts(
						data.filter((product) =>
							product.name.toLowerCase().includes(search.toLowerCase())
						)
					);
					break;
				case 'iphone':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'iphone'
						)
					);
					break;
				case 'ipad':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'ipad'
						)
					);
					break;
				case 'macbook':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'macbook'
						)
					);
					break;
				case 'airpod':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'airpod'
						)
					);
					break;
				case 'watch':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'watch'
						)
					);
					break;
				case 'mouse':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'mouse'
						)
					);
					break;
				case 'keyboard':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'keyboard'
						)
					);
					break;
				case 'other':
					setProducts(
						data.filter(
							(product) =>
								product.name.toLowerCase().includes(search.toLowerCase()) &&
								product.category === 'other'
						)
					);
					break;
				default:
					setProducts(
						data.filter((product) =>
							product.name.toLowerCase().includes(search.toLowerCase())
						)
					);
					break;
			}
			//Tính tổng số trang = tổng số sản phẩm / số lượng sản phẩm 1 trang
			const totalPage = Math.ceil(
				parseInt(data.length) / parseInt(pagination.qty)
			);
			setTotalPage(totalPage);
			setLoading(false);
		};
		fetchAllData();
	}, [pagination, search]);

	const delaySearchTextTimeOut = useRef(null);

	const onChangeText = (e) => {
		const value = e.target.value;
		setSearch(value);

		if (handlerSearch) {
			//Nếu người dùng đang nhập thì mình clear cái giây đó
			if (delaySearchTextTimeOut.current) {
				clearTimeout(delaySearchTextTimeOut.current);
			}

			delaySearchTextTimeOut.current = setTimeout(() => {
				handlerSearch(value);
			}, 500);
		}
	};

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Navbar />
					<div className="container">
						<section className="py-5 bg-light">
							<div className="container">
								<div className="row px-4 px-lg-5 py-lg-4 align-items-center">
									<div className="col-lg-6">
										<h1 className="h2 text-uppercase mb-0">Shop</h1>
									</div>
									<div className="col-lg-6 text-lg-right">
										<nav aria-label="breadcrumb">
											<ol className="breadcrumb justify-content-lg-end mb-0 px-0">
												<li
													className="breadcrumb-item active"
													aria-current="page">
													Shop
												</li>
											</ol>
										</nav>
									</div>
								</div>
							</div>
						</section>

						<section className="py-5">
							<div className="container p-0">
								<div className="row">
									<div className="col-lg-3 order-2 order-lg-1">
										<h5 className="text-uppercase mb-4">Categories</h5>
										<div className="py-2 px-4 bg-dark text-white mb-3">
											<strong className="small text-uppercase font-weight-bold">
												Apple
											</strong>
										</div>
										<ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('all');
													}}>
													All
												</button>
											</li>
										</ul>
										<div className="py-2 px-4 bg-light mb-3">
											<strong className="small text-uppercase font-weight-bold">
												IPHONE & MAC
											</strong>
										</div>
										<ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('iphone');
													}}>
													Iphone
												</button>
											</li>
											<li className="mb-2">
												<button
													className="reset-anchor"
													href="#"
													onClick={() => {
														handlerCategory('ipad');
													}}>
													Ipad
												</button>
											</li>
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => handlerCategory('macbook')}>
													Macbook
												</button>
											</li>
										</ul>
										<div className="py-2 px-4 bg-light mb-3">
											<strong className="small text-uppercase font-weight-bold">
												WIRELESS
											</strong>
										</div>
										<ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal">
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('airpod');
													}}>
													Airpod
												</button>
											</li>
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('watch');
													}}>
													Watch
												</button>
											</li>
										</ul>
										<div className="py-2 px-4 bg-light mb-3">
											<strong className="small text-uppercase font-weight-bold">
												OTHER
											</strong>
										</div>
										<ul className="list-unstyled small text-muted pl-lg-4 font-weight-normal mb-5">
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('mouse');
													}}>
													Mouse
												</button>
											</li>
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('keyboard');
													}}>
													Keyboard
												</button>
											</li>
											<li className="mb-2">
												<button
													className="reset-anchor"
													onClick={() => {
														handlerCategory('other');
													}}>
													Other
												</button>
											</li>
										</ul>
									</div>
									<div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
										<div className="row mb-3 align-items-center">
											{/* ------------------Search----------------- */}
											<div className="col-lg-4">
												<input
													className="form-control form-control-lg"
													type="text"
													placeholder="Enter Search Here!"
													onChange={onChangeText}
													value={search}
												/>
											</div>
											{/* ------------------Search----------------- */}

											{/* ------------------SortProduct----------------- */}
											<div className="col-lg-8">
												<ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
													<li className="list-inline-item">
														<SortProduct
															handlerChangeSort={handlerChangeSort}
														/>
													</li>
												</ul>
											</div>
										</div>
										{/* ------------------SortProduct----------------- */}

										{/* ------------------Products----------------- */}
										<Products Products={products} sort={sort} />
										{/* ------------------Products----------------- */}

										{/* ------------------Pagination----------------- */}
										<Pagination
											pagination={pagination}
											handlerChangePage={handlerChangePage}
											totalPage={totalPage}
										/>
										{/* ------------------Pagination----------------- */}
									</div>
								</div>
							</div>
						</section>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

export default Shop;
