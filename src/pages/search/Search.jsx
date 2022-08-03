import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Search.css';
import SearchForm from './SearchForm/SearchForm';

const Search = () => {
	return (
		<div className="search_movies_box">
			<Navbar />
			<SearchForm />
		</div>
	);
};

export default Search;
