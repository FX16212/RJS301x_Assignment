import './HotelList.css';
import hotel_list from '../../data/hotel_list';
import { useNavigate } from 'react-router-dom';

const HotelList = () => {
	const navigate = useNavigate();
	const handleDetail = () => {
		navigate(`/detail`);
	};
	return (
		<div className="hotelList">
			{hotel_list.map((hotel, index) => {
				return (
					<div key={index}>
						<div className="hotelList-Item">
							<img src={hotel.image_url} alt="" className="hotelList-Img" />
							<span onClick={handleDetail} className="hotelList-Name">
								{hotel.name}
							</span>
							<span className="hotelList-City">{hotel.city}</span>
							<span className="hotelList-Price">
								Starting from $ {hotel.price}
							</span>
							<div className="hotelList-Rating">
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

export default HotelList;
