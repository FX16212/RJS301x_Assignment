import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../home/components/Footer';
import Navbar from '../home/components/Navbar';
import { useForm } from 'react-hook-form';
import '../../css/Auth.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

/* Redux */
import { useDispatch } from 'react-redux';
import { userRegister } from '../../redux/action/ActionUser';
import Loading from '../home/components/Loading';

function Register() {
	const userArr = localStorage.getItem('USER_REGISTER')
		? JSON.parse(localStorage.getItem('USER_REGISTER'))
		: [];

	const dispatch = useDispatch();
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	useEffect(() => {
		const { email } = getValues();
		const findEmail = userArr.find((value) => {
			return value.email === email;
		});
		if (findEmail) {
			setErrorEmail(true);
		} else {
			setErrorEmail(false);
		}
	}, [getValues]);

	const onSubmit = (data) => {
		if (errorEmail) return;
		data.id = Math.floor(Math.random() * 100);
		userArr.push(data);

		/* Save to LocalStorage */
		localStorage.setItem('USER_REGISTER', JSON.stringify(userArr));

		/* Save to Redux */
		const action = userRegister(
			JSON.parse(localStorage.getItem('USER_REGISTER'))
		);
		dispatch(action);

		toast.success('Register Success !');
		setSuccess(true);
	};

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, [success]);

	if (success) {
		return <Navigate to={'/login'} />;
	}

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Navbar />
					<div className="limiter">
						<div className="container-login100">
							<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
								<span className="login100-form-title p-b-33">Sign Up</span>
								<div className="justify-content-center pb-5">
									{errors.fullname && (
										<p className="text-danger">* Full Name is required !</p>
									)}
									{errors.email?.type === 'required' && (
										<p className="text-danger">* Email is required !</p>
									)}
									{errors.email?.type === 'pattern' && (
										<p className="text-danger">* Incorrect Email Format</p>
									)}
									{errorEmail && (
										<p className="text-danger">* Email already used !</p>
									)}
									{errors.password?.type === 'required' && (
										<p className="text-danger">* Password is required !</p>
									)}
									{errors.password?.type === 'minLength' && (
										<p className="text-danger">
											* Password must be more than 8 characters !
										</p>
									)}
									{errors.phone && (
										<p className="text-danger">* Phone Number is required!</p>
									)}
								</div>
								<div className="wrap-input100 validate-input">
									<input
										className="input100"
										placeholder="Full Name"
										{...register('fullname', {
											required: true,
										})}
									/>
								</div>

								<div className="wrap-input100 rs1 validate-input">
									<input
										className="input100"
										placeholder="Email"
										{...register('email', {
											required: true,
											pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										})}
									/>
								</div>

								<div className="wrap-input100 rs1 validate-input">
									<input
										className="input100"
										type="password"
										placeholder="Password"
										{...register('password', {
											required: true,
											minLength: 8,
										})}
									/>
								</div>

								<div className="wrap-input100 rs1 validate-input">
									<input
										className="input100"
										placeholder="Phone"
										{...register('phone', {
											required: true,
										})}
									/>
								</div>

								<div className="container-login100-form-btn m-t-20">
									<button
										className="login100-form-btn"
										onClick={handleSubmit(onSubmit)}>
										Sign Up
									</button>
								</div>

								<div className="text-center p-t-45 p-b-4">
									<span className="txt1">Login?</span>
									&nbsp;
									<Link to="/login" className="txt2 hov1">
										Click
									</Link>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

export default Register;
