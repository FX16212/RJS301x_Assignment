import City from '../../components/city/City';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import TypeOfHotels from '../../components/typeOfHotels/TypeOfHotels';
const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<City />
				<h1 className="homeTitle">Browse by property type</h1>
				<TypeOfHotels />
			</div>
		</div>
	);
};

export default Home;
