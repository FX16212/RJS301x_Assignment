import './HotelList.css';
import hotel_list from '../../data/hotel_list';
const FeaturedProperties = () => {
	return (
		<div className="hotelList">
			{hotel_list.map((hotel, index) => {
				return (
					<div key={index}>
						<div className="hotelListItem">
							<img src={hotel.image_url} alt="" className="hotelListImg" />
							<span className="hotelListName">{hotel.name}</span>
							<span className="hotelListCity">{hotel.city}</span>
							<span className="hotelListPrice">
								Starting from $ {hotel.price}
							</span>
							<div className="hotelListRating">
								<button>{hotel.rate}</button>
								<span>{hotel.type}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FeaturedProperties;
