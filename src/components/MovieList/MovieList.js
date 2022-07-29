import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './MovieList.css';
import YouTube from 'react-youtube';

const base_URL = 'https://image.tmdb.org/t/p/original/';

// Row component
function MovieList({ title, fetchURL, isLargeRow }) {
	/* Creating a movie state (short term memory) */
	const [movies, setMovies] = useState([]);
	/* Creating a trailer state (short term memory) */
	const [trailerURL, setTrailerURL] = useState('');
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

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};

	//   When user clicks on the movie picture

	return (
		<div className="row">
			<h2>{title}</h2>
			{/* Container for movie rows */}
			<div className="row__posters">
				{/* several row poster */}
				{/* Looping through movies array API */}
				{movies.map((movie) => (
					//   returns movie images in new array
					<img
						key={movie.id}
						className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
						// Loads poster images from base url
						src={`${base_URL}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
				{/* Contain -> posters */}
			</div>
			{/* Embedding youtube movie trailers to show */}
			{trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
		</div>
	);
}

// Exporting Row function. Making it available
export default MovieList;
