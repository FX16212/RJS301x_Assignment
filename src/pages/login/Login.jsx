import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Footer from '../home/components/Footer';
import Navbar from '../home/components/Navbar';
import { addSession } from '../../redux/action/ActionSession';
import '../../css/Auth.css';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Login() {
	const userArr = JSON.parse(window.localStorage.getItem('LIST_USER_REGISTER'));

	const [navigate, setNavigate] = useState(false);

	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);

	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const onSubmit = () => {
		const { email, password } = getValues();

		const findUser = userArr.find((value) => {
			return value.email === email;
		});
		if (!findUser) {
			setErrorEmail(true);
		} else {
			setErrorEmail(false);
			if (findUser.password !== password) {
				setErrorPassword(true);
			} else {
				setErrorPassword(false);
				localStorage.setItem('id_user', findUser.id);

				localStorage.setItem('name_user', findUser.fullname);

				const action = addSession(localStorage.getItem('id_user'));
				dispatch(action);
				toast.success('Login Success !');
				setNavigate(true);
			}
		}
	};

	return (
		<>
			<div className="limiter">
				<Navbar />
				<div className="container-login100">
					<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
						<span className="login100-form-title p-b-33">Sign In</span>

						<div className="justify-content-center pb-5">
							{errors.email?.type === 'required' && (
								<p className="text-danger">* Email is required !</p>
							)}
							{errors.email?.type === 'pattern' && (
								<p className="text-danger">* Incorrect Email Format</p>
							)}
							{errorEmail && (
								<p className="text-danger">* Email does not match!</p>
							)}
							{errors.password?.type === 'required' && (
								<p className="text-danger">* Password is required !</p>
							)}
							{errors.password?.type === 'minLength' && (
								<p className="text-danger">
									* Password must be more than 8 characters !
								</p>
							)}
							{errorPassword && (
								<p className="text-danger">* Password does not match!</p>
							)}
						</div>

						<div className="wrap-input100 validate-input">
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

						<div className="container-login100-form-btn m-t-20">
							{navigate && <Navigate to={`/`} />}
							<button
								className="login100-form-btn"
								onClick={handleSubmit(onSubmit)}>
								Sign in
							</button>
						</div>

						<div className="text-center p-t-45 p-b-4">
							<span className="txt1">Create an account?</span>
							&nbsp;
							<Link to="/register" className="txt2 hov1">
								Sign up
							</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Login;
