import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchPopup from './searchPopup/SearchPopup';

const Search = () => {
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<SearchPopup />
			</div>
		</div>
	);
};

export default Search;
