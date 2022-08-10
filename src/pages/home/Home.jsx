// import { useDispatch, useSelector } from 'react-redux';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Other from './components/Other';
import Products from './components/Products';

function Home(props) {
	return (
		<>
			<Navbar />

			<div className="page-holder">
				<div className="header bg-white">
					<div className="container">
						<Banner />
						<Categories />
						<Products />
						<Other />
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Home;
