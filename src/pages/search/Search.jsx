import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchList from './searchList/SearchList';
import SearchPopup from './searchPopup/SearchPopup';
import './Search.css';
const Search = () => {
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<SearchPopup />
					<div className="listResult">
						<SearchList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
