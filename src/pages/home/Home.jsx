import City from '../../components/city/City';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import TypeOfHotels from '../../components/typeOfHotels/TypeOfHotels';
import HotelList from '../../components/hotelList/HotelList';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import './Home.css';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="home-Container">
				<City />
				<h1 className="home-Title">Browse by property type</h1>
				<TypeOfHotels />
				<h1 className="home=Title">Homes guests love</h1>
				<HotelList />
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
