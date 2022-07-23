import React from 'react';
import './Header.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import {
	faBed,
	faCalendarDays,
	faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ type }) {
	//State
	const [destination, setDestination] = useState('');
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	// Navigation
	const navigate = useNavigate();
	// Handle Options
	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	// Handle Search Button
	const handleSearch = () => {
		navigate('/search', { state: { destination, date, options } });
	};

	return (
		<div className="header">
			<div
				className={
					type === 'list' ? 'header-Container listMode' : 'header-Container'
				}>
				{type !== 'list' && (
					<>
						<h1 className="header-Title">
							A lifetime of discounts? It's Genius.
						</h1>
						<p className="header-Desc">
							Get rewarded for your travels – unlock instant savings of 10% or
							more with a free account
						</p>
						<button className="header-Btn">Sign in / Register</button>
						<div className="header-Search">
							<div className="header-SearchItem">
								<FontAwesomeIcon icon={faBed} className="header-Icon" />
								<input
									type="text"
									placeholder="Where are you going?"
									className="header-SearchInput"
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className="header-SearchItem">
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="header-Icon"
								/>
								<span
									onClick={() => setOpenDate(!openDate)}
									className="header-SearchText">{`${format(
									date[0].startDate,
									'MM/dd/yyyy'
								)} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
								{openDate && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className="date"
										minDate={new Date()}
									/>
								)}
							</div>
							<div className="header-SearchItem">
								<FontAwesomeIcon icon={faPerson} className="header-Icon" />
								<span
									onClick={() => setOpenOptions(!openOptions)}
									className="header-SearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
								{openOptions && (
									<div className="options">
										<div className="option-Item">
											<span className="option-Text">Adult</span>
											<div className="option-Counter">
												<button
													disabled={options.adult <= 1}
													className="option-Counter-Button"
													onClick={() => handleOption('adult', 'd')}>
													-
												</button>
												<span className="option-Counter-Number">
													{options.adult}
												</span>
												<button
													className="option-Counter-Button"
													onClick={() => handleOption('adult', 'i')}>
													+
												</button>
											</div>
										</div>
										<div className="option-Item">
											<span className="option-Text">Children</span>
											<div className="option-Counter">
												<button
													disabled={options.children <= 0}
													className="option-Counter-Button"
													onClick={() => handleOption('children', 'd')}>
													-
												</button>
												<span className="option-Counter-Number">
													{options.children}
												</span>
												<button
													className="option-Counter-Button"
													onClick={() => handleOption('children', 'i')}>
													+
												</button>
											</div>
										</div>
										<div className="option-Item">
											<span className="option-Text">Room</span>
											<div className="option-Counter">
												<button
													disabled={options.room <= 1}
													className="option-Counter-Button"
													onClick={() => handleOption('room', 'd')}>
													-
												</button>
												<span className="option-Counter-Number">
													{options.room}
												</span>
												<button
													className="option-Counter-Button"
													onClick={() => handleOption('room', 'i')}>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className="header-SearchItem">
								<button className="header-Btn" onClick={handleSearch}>
									Search
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Header;
