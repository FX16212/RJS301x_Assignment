import React, { useState } from 'react';
import './SearchForm.css';
import ResultList from '../ResultList/ResultList';
import requests from '../../../components/requests';
import axios from '../../../components/axios.js';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

function SearchForm() {
	// States
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState([]);
	const [state, setState] = React.useState({ open: false, movie: '' });
	const base_img_url = 'https://image.tmdb.org/t/p/original/';

	const handleToClose = () => {
		setState({ open: false, movie: '' });
	};

	const handleClick = (movie) => {
		setState({ open: true, movie: movie });
	};

	// use async/await with fetch to call the TMDb API
	const searchMovies = async (e) => {
		e.preventDefault();
		if (search) {
			const url = `${requests.fetchSearch}${search}`;
			async function fetchMovies() {
				const response = await axios.get(url);
				setMovies(response.data.results);
			}
			fetchMovies();
		}
	};

	return (
		<div className="search_movies_container">
			<div className="search-form">
				<div className="search-input">
					<input
						type="text"
						className="form-control"
						placeholder="Search movie ..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<div className="search-icon">
						<svg
							className="svg-inline--fa fa-search fa-w-16"
							fill="#ccc"
							aria-hidden="true"
							data-prefix="fas"
							data-icon="search"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
						</svg>
					</div>
				</div>
				<hr className="search-hr" />
				<div className="search-btn">
					<button
						className="search-btn-reset"
						type="button"
						onClick={() => setSearch('')}>
						RESET
					</button>
					<button
						className="search-btn-search"
						type="button"
						onClick={searchMovies}>
						SEARCH
					</button>
				</div>
			</div>
			<h1 className="search-results-title">Search Results</h1>
			<div className="search-results">
				{movies.length > 0 ? (
					movies.map((movie) => {
						return (
							<ResultList
								movie={movie}
								key={movie.id}
								handleClick={() => handleClick(movie)}
							/>
						);
					})
				) : (
					<div className="no_movies">
						<h1>Oops! there's nothing</h1>
					</div>
				)}
			</div>
			<Dialog className="dialog" open={state.open} onClose={handleToClose}>
				<DialogTitle className="dialog_title">{state.movie.title}</DialogTitle>
				<DialogContent className="dialog_content" t>
					<img
						key={state.movie.id}
						src={
							(state.movie?.poster_path || state.movie?.backdrop_path) &&
							`${base_img_url}${
								state.movie.backdrop_path || state.movie.poster_path
							}`
						}
						className={`dialog_poster`}
						alt={state.movie.name}
					/>
					<DialogContentText className="dialog_content_text">
						{state.movie.overview}
						<div className="dialog_status">
							<h2>
								Rating: <span>{state.movie.vote_average}/10</span>
							</h2>
							<h2>
								Release year:{' '}
								<span>
									{state.movie?.release_date &&
										`${new Date(state.movie.release_date).getFullYear()}`}
								</span>
							</h2>
						</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleToClose} color="primary" autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default SearchForm;
