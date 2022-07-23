import './TypeOfHotels.css';
import hotel_types from '../../data/type';

const PropertyList = () => {
	return (
		<div className="typeOfHotels">
			{hotel_types.map((hotel, index) => {
				return (
					<div key={index}>
						<div className="typeOfHotelsItem">
							<img src={hotel.image} alt="" className="typeOfHotelsImg" />
							<div className="typeOfHotelsTitles">
								<h1>{hotel.name}</h1>
								<h2>{hotel.count} hotels</h2>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PropertyList;
