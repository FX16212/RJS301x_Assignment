import React, { useState, useEffect } from 'react';
import axios from '../axios';
import MovieDetail from './MovieDetail/MovieDetail';

import './MovieList.css';

// MovieList component
function MovieList(props) {
	const base_URL = 'https://image.tmdb.org/t/p/original/';
	const { title, fetchURL, isLargeRow } = props;
	/* Creating a movie state (short term memory) */
	const [movies, setMovies] = useState([]);
	const [selectMovie, setSelectMovie] = useState();

	//   Pulling information from tmdb API when the pages loads
	useEffect(() => {
		//   Running async call
		async function fetchData() {
			// Waiting for the promise to come back with movie results, fetchURL(outside the code block)
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}
		// if [empty], run once when the row loads, and dont run again
		fetchData();
	}, [fetchURL]);

	return (
		<div className="row">
			<h2>{title}</h2>
			{/* Container for movie rows */}
			<div className="row__posters">
				{/* several row poster */}
				{/* Looping through movies array API */}
				{movies &&
					movies.map((movie, index) => (
						//   returns movie component
						<img
							key={index}
							onClick={() => {
								if (selectMovie) {
									setSelectMovie();
								} else {
									setSelectMovie(movie.id);
								}
							}}
							className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
							// Loads poster images from base url
							src={`${base_URL}${
								isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
							alt={movie.name}
						/>
					))}
			</div>
			{selectMovie && (
				<MovieDetail selectMovie={selectMovie} onSelectMovie={setSelectMovie} />
			)}
		</div>
	);
}

// Exporting Row function. Making it available
export default MovieList;
