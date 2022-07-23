import City from '../../components/city/City';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import TypeOfHotels from '../../components/typeOfHotels/TypeOfHotels';
import HotelList from '../../components/hotelList/HotelList';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<City />
				<h1 className="homeTitle">Browse by property type</h1>
				<TypeOfHotels />
				<h1 className="homeTitle">Homes guests love</h1>
				<HotelList />
			</div>
		</div>
	);
};

export default Home;
