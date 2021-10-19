import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Auth/userSlice";

const Login = () => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	const submitLogin = (e) => {
		e.preventDefault();
		// dispatch(
		// 	login({
		// 		name: "rahul",
		// 		email: "rahul@gmail.com",
		// 	})
		// );
	};
	return (
		<main className="form-container text-center">
			<form onSubmit={submitLogin}>
				<img
					className="mb-4"
					src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
					alt="logo"
					width={72}
					height={57}
				/>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
				<div className="form-floating">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						name="email"
						onChange={handleChange}
					/>
					<label htmlFor="floatingInput">Email address</label>
				</div>
				<div className="form-floating my-2">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						name="password"
						onChange={handleChange}
					/>
					<label htmlFor="floatingPassword">Password</label>
				</div>
				<div className="checkbox mb-3 text-start">
					<label>
						<input type="checkbox" defaultValue="remember-me" /> Remember me
					</label>
				</div>
				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Sign in
				</button>
			</form>
		</main>
	);
};

export default Login;
