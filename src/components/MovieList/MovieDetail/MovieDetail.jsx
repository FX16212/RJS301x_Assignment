import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import './MovieDetail.css';

function MovieDetail(props) {
	const MOVIE_API = 'https://api.themoviedb.org/3/';
	const API_KEY = '850ab6fd511ccd59c401ccd3a002d9ed';

	const { selectMovie } = props;
	const [trailer, setTrailer] = useState();
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState({ title: 'Loading Movies ...' });

	useEffect(() => {
		const fetchMovies = async (event) => {
			if (event) {
				event.preventDefault();
			}
			const req = await fetch(
				`${MOVIE_API}movie/${selectMovie}?api_key=${API_KEY}`
			);
			const data = await req.json();

			setMovies(data);
			setMovie(selectMovie);

			if (data) {
				await fetchMovie(data.id);
			}
		};
		fetchMovies();
	}, [selectMovie]);

	const fetchMovie = async (id) => {
		const req = await fetch(
			`${MOVIE_API}movie/${id}/videos?api_key=${API_KEY}`
		);
		const data = await req.json();

		if (data && data.results) {
			const trailer = data.results.find((vid) => vid.name === 'Trailer');
			setTrailer(trailer ? trailer : data.results[0]);
		}

		setMovie(data);
	};

	const opts = {
		height: '400',
		width: '100%',
		playerVars: {
			autoplay: 0,
		},
	};

	return (
		<>
			{movies ? (
				<div className="movie_detail">
					<div className="movie_detail_left">
						<h2>{movies.title}</h2>
						<hr className="movie_detail_hr" />
						<div className="movie_detail_h4">
							<h4>Release Date: {movies.release_date}</h4>
							<h4>Vote: {movies.vote_average}/10</h4>
						</div>
						<p>{movies.overview}</p>
					</div>
					{movie && (
						<div className="movie_detail_right">
							{trailer ? (
								<YouTube videoId={trailer.key} opts={opts} />
							) : (
								'No Trailer Found'
							)}
						</div>
					)}
				</div>
			) : null}
		</>
	);
}

export default MovieDetail;
