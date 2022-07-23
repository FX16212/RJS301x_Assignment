import City from '../../components/city/City';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className="homeContainer">
				<City />
			</div>
		</div>
	);
};

export default Home;
