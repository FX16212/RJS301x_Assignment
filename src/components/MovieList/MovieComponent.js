import React from 'react';
const base_URL = 'https://image.tmdb.org/t/p/original/';

function MovieComponent(props) {
	const { id, poster_path, backdrop_path, name } = props.movie;
	const { isLargeRow } = props;

	return (
		<>
			<img
				onClick={() => {
					props.onSelectMovie(id);
				}}
				className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
				// Loads poster images from base url
				src={`${base_URL}${isLargeRow ? poster_path : backdrop_path}`}
				alt={name}
			/>
		</>
	);
}

export default MovieComponent;
