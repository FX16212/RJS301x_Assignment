import React, { useState, useEffect } from 'react';
import axios from '../axios';
import MovieComponent from './MovieComponent';
import MovieDetail from './MovieDetail/MovieDetail';
import './MovieList.css';

// MovieList component
function MovieList(props) {
	const { title, fetchURL, isLargeRow } = props;
	/* Creating a movie state (short term memory) */
	const [movies, setMovies] = useState([]);
	const [selectMovie, setSelectMovie] = useState();
	const [isActive, setIsActive] = useState(false);
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
						<MovieComponent
							key={index}
							movie={movie}
							onSelectMovie={setSelectMovie}
							isLargeRow={isLargeRow}
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
