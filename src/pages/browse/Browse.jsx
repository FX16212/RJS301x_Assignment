import React from 'react';
import './Browse.css';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import MovieList from '../../components/MovieList/MovieList';
import requests from '../../components/requests';

function Browse() {
	return (
		<div className="app">
			{/* Inserting design components and fetch param from tmdb API */}
			<Navbar />
			<Banner />
			<MovieList
				title=""
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			{/* isLargeRow made up param -> row__posterLarge */}
			<MovieList title="Xu hướng" fetchURL={requests.fetchTrending} />
			<MovieList title="Xếp hạng cao" fetchURL={requests.fetchTopRated} />
			<MovieList title="Hành động" fetchURL={requests.fetchActionMovies} />
			<MovieList title="Hài" fetchURL={requests.fetchComedyMovies} />
			<MovieList title="Kinh Dị" fetchURL={requests.fetchHorrorMovies} />
			<MovieList title="Lãng mạn" fetchURL={requests.fetchRomanceMovies} />
			<MovieList title="Tài liệu" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default Browse;
