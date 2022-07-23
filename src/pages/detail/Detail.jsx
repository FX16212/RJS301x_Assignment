import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleArrowLeft,
	faCircleArrowRight,
	faCircleXmark,
	faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import detail from '../../data/detail';
import { useState } from 'react';
import './Detail.css';
const Detail = () => {
	// State
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	// Handle open Modal
	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};
	// Hanle Move
	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="detail-Container">
				{open && (
					<div className="slider">
						<FontAwesomeIcon
							icon={faCircleXmark}
							className="close"
							onClick={() => setOpen(false)}
						/>
						<FontAwesomeIcon
							icon={faCircleArrowLeft}
							className="arrow"
							onClick={() => handleMove('l')}
						/>
						<div className="sliderWrapper">
							<img
								src={detail.photos[slideNumber]}
								alt=""
								className="sliderImg"
							/>
						</div>
						<FontAwesomeIcon
							icon={faCircleArrowRight}
							className="arrow"
							onClick={() => handleMove('r')}
						/>
					</div>
				)}
				<div className="detail-Wrapper">
					<button className="bookNow">Reserve or Book Now!</button>
					<h1 className="detail-Title">{detail.name}</h1>
					<div className="detail-Address">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>{detail.address}</span>
					</div>
					<span className="detail-Distance">{detail.distance}</span>
					<span className="detail-PriceHighlight">{detail.price}</span>
					<div className="detail-Images">
						{detail.photos.map((photo, index) => {
							return (
								<div className="detail-ImgWrapper" key={index}>
									<img
										onClick={() => handleOpen(index)}
										src={photo}
										alt=""
										className="detail-Img"
									/>
								</div>
							);
						})}
					</div>
					<div className="detail-Details">
						<div className="detail-DetailsTexts">
							<h1 className="detail-Title">{detail.title}</h1>
							<p className="detail-Desc">{detail.description}</p>
						</div>
						<div className="detail-DetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2>
								<b>$ {detail.nine_night_price}</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Detail;
