import './City.css';
import Cities from '../../data/city';

const City = () => {
	return (
		<div className="city">
			{Cities.map((city, index) => {
				return (
					<div key={index}>
						<div className="cityItem">
							<img src={city.image} alt="" className="cityImg" />
							<div className="cityTitles">
								<h1> {city.name} </h1>
								<h2>{city.subText}</h2>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default City;
