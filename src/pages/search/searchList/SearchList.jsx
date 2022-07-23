import React from 'react';
import SearchItems from '../../../data/search.json';
import './SearchList.css';

function SearchList() {
	return (
		<div>
			{SearchItems.map((item, index) => {
				return (
					<div className="hotelSearch" key={index}>
						<img src={item.image_url} alt="" className="hotelImg" />
						<div className="hotelDesc">
							<h1 className="hotelTitle">{item.name}</h1>
							<span className="hotelDistance">
								{' '}
								{item.distance} from center
							</span>
							<span className="hotelTaxiOp">{item.tag}</span>
							<span className="hotelSubtitle">{item.description}</span>
							<span className="hotelFeatures">{item.type}</span>
							<span className="hotelCancelOp">
								{' '}
								{item.free_cancel ? 'Free cancellation' : ''}{' '}
							</span>
						</div>
						<div className="hotelDetails">
							<div className="hotelRating">
								<span> {item.rate_text} </span>
								<button> {item.rate} </button>
							</div>
							<div className="hotelDetailTexts">
								<span className="hotelPrice">$ {item.price} </span>
								<p className="hotelTaxOp">Includes taxes and fees</p>
								<button className="hotelCheckButton">See availability</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SearchList;
