import './MailList.css';

const MailList = () => {
	return (
		<div className="mail">
			<h1 className="mail-Title">Save time, save money!</h1>
			<span className="mail-Desc">
				Sign up and we'll send the best deals to you
			</span>
			<div className="mail-Input-Container">
				<input type="text" placeholder="Your Email" />
				<button>Subscribe</button>
			</div>
		</div>
	);
};

export default MailList;
