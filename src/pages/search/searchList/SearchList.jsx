import React from 'react';
import SearchItems from '../../../data/search.json';
import './SearchList.css';

function SearchList() {
	return (
		<div>
			{SearchItems.map((item, index) => {
				return (
					<div className="searchList" key={index}>
						<img src={item.image_url} alt="" className="searchList-Img" />
						<div className="searchList-Desc">
							<h1 className="searchList-Title">{item.name}</h1>
							<span className="searchList-Distance">
								{' '}
								{item.distance} from center
							</span>
							<span className="searchList-TaxiOp">{item.tag}</span>
							<span className="searchList-Subtitle">{item.description}</span>
							<span className="searchList-Features">{item.type}</span>
							<span className="searchList-CancelOp">
								{' '}
								{item.free_cancel ? 'Free cancellation' : ''}{' '}
							</span>
						</div>
						<div className="searchList-Details">
							<div className="searchList-Rating">
								<span> {item.rate_text} </span>
								<button> {item.rate} </button>
							</div>
							<div className="searchList-DetailTexts">
								<span className="searchList-Price">$ {item.price} </span>
								<p className="searchList-TaxOp">Includes taxes and fees</p>
								<button className="searchList-CheckButton">
									See availability
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SearchList;
