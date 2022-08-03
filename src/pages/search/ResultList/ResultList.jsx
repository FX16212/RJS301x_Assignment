import React from 'react';
import './ResultList.css';

function ResultList({ movie, handleClick }) {
	//IMG_URL
	const base_img_url = 'https://image.tmdb.org/t/p/original/';
	return (
		<div className="search-results-content">
			<div className="search-results-items">
				<img
					onClick={handleClick}
					// Loads poster images from base url
					src={
						(movie?.poster_path || movie?.backdrop_path) &&
						`${base_img_url}${movie.poster_path || movie.backdrop_path}`
					}
					alt={movie.name}
					className="search-results-item"
				/>
			</div>
		</div>
	);
}

export default ResultList;
