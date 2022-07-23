import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import './SearchPopup.css';
function SearchPopup() {
	// State
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);

	return (
		<div className="searchPopup">
			<h1 className="searchPopup-Title">Search</h1>
			<div className="searchPopup-Item">
				<label>Destination</label>
				<input placeholder={destination} type="text" />
			</div>
			<div className="searchPopup-Item">
				<label>Check-in Date</label>
				<span onClick={() => setOpenDate(!openDate)}>{`${format(
					date[0].startDate,
					'MM/dd/yyyy'
				)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
				{openDate && (
					<DateRange
						onChange={(item) => setDate([item.selection])}
						minDate={new Date()}
						ranges={date}
					/>
				)}
			</div>
			<div className="searchPopup-Item">
				<label>Options</label>
				<div className="searchPopup-Options">
					<div className="searchPopup-OptionItem">
						<span className="searchPopup-OptionText">
							Min price <small>per night</small>
						</span>
						<input type="number" className="searchPopup-OptionInput" />
					</div>
					<div className="searchPopup-OptionItem">
						<span className="searchPopup-OptionText">
							Max price <small>per night</small>
						</span>
						<input type="number" className="searchPopup-OptionInput" />
					</div>
					<div className="searchPopup-OptionItem">
						<span className="searchPopup-OptionText">Adult</span>
						<input
							type="number"
							min={1}
							className="searchPopup-OptionInput"
							placeholder={options.adult}
						/>
					</div>
					<div className="searchPopup-OptionItem">
						<span className="searchPopup-OptionText">Children</span>
						<input
							type="number"
							min={0}
							className="searchPopup-OptionInput"
							placeholder={options.children}
						/>
					</div>
					<div className="searchPopup-OptionItem">
						<span className="searchPopup-OptionText">Room</span>
						<input
							type="number"
							min={1}
							className="searchPopup-OptionInput"
							placeholder={options.room}
						/>
					</div>
				</div>
			</div>
			<button>Search</button>
		</div>
	);
}

export default SearchPopup;
