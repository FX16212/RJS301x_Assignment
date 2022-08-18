import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Other from './components/Other';
import Products from './components/Products';

function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
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
			)}
		</>
	);
}

export default Home;
