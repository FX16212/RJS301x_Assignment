import React from 'react';

function Popup({ product, handleClose }) {
	return (
		<div className="modal fade show">
			<div
				className="modal-dialog modal-lg modal-dialog-centered"
				role="document">
				<div className="modal-content">
					<div className="modal-body p-0">
						<div className="row align-items-stretch">
							<div className="col-lg-6 p-lg-0">
								<img
									style={{ width: '100%' }}
									className="product-view d-block h-100 bg-cover bg-center"
									src={product.img1}
								/>
								<img className="d-none" href={product.img2} />
								<img className="d-none" href={product.img3} />
							</div>
							<div className="col-lg-6">
								<a className="close p-4" type="button" onClick={handleClose}>
									×
								</a>
								<div className="p-5 my-md-4">
									<h2 className="h4">{product.name}</h2>
									<p className="text-muted">
										{product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') +
											' VND'}{' '}
									</p>
									<p className="text-small mb-4">{product.short_desc}</p>
									<div className="row align-items-stretch mb-4">
										<div className="col-sm-5 pl-sm-0 fix_addwish">
											<a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0">
												<i className="far fa-heart mr-2"></i>Add Too Wish List
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Popup;
