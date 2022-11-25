import { Label, Textarea, TextInput } from "flowbite-react";
import React, { useState } from "react";
import Button from "../Button";
import registerpic from "../../images/registerpic.png";
import { GoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";
import SocialLogin from "../login/SocialLogin";
import { Link } from "react-router-dom";

export default function Registration(props) {
	const { setCookie, setUser, setStateToken } = useContext(AuthContext);

	// Take inputs from user
	const [register, setRegister] = useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: "",
		errors: [],
	});

	// Handle inputs function
	const handleInput = (e) => {
		e.persist();
		setRegister({ ...register, [e.target.name]: e.target.value });
	};

	// Register user
	const handleRegistration = (e) => {
		e.preventDefault();

		const data = {
			first_name: register.first_name,
			last_name: register.last_name,
			email: register.email,
			password: register.password,
			password_confirmation: register.password_confirmation,
		};
		axios.get("/sanctum/csrf-cookie").then((response) => {
			axios.post("/api/register", data).then((res) => {
				if (res.data.status === "success") {
					console.log(res);
					const token = res.data.token;
					setCookie("Token", token, { path: "/" });
					setStateToken(token);
					setUser(res.data.user);
					// navigate("/", { replace: true });
				} else {
					console.log(res);
					setRegister({ ...register, errors: res.data.errors });
				}
			});
		});
	};
	return (
		<>
			<div className="relative block rounded-xl bg-white border border-gray-100 p-1 sm:pb-20 md:pb-5 shadow-xl w-11/12 md:w-9/12  lg:w-11/12 xl:w-9/12  mx-auto mt-20 mb-44">
				<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-1/2 -translate-y-1/2 bg-gray-300"></div>
				<section>
					<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  justify-items-center items-center">
							<div className="w-9/12 sm:h-80 lg:h-full flex flex-col ">
								<form
									onSubmit={handleRegistration}
									className="flex flex-col gap-4"
								>
									<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-1">
										Start Your Journey
									</h2>

									<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
										<div className="relative">
											<input
												type="text"
												id="fname"
												className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-darkRed peer"
												placeholder=" "
												name="first_name"
												value={register?.first_name}
												onChange={handleInput}
											/>
											<label
												htmlFor="fname"
												className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
											>
												First Name
											</label>
											<small className="text-red-500">
												{register?.errors.first_name}
											</small>
										</div>

										<div className="relative">
											<input
												type="text"
												id="lname"
												className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-darkRed peer"
												placeholder=" "
												name="last_name"
												value={register?.last_name}
												onChange={handleInput}
											/>
											<label
												htmlFor="lname"
												className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
											>
												Last Name
											</label>
											<small className="text-red-500">
												{register?.errors.last_name}
											</small>
										</div>
									</div>
									<div className="relative">
										<input
											id="email2"
											type="email"
											className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
											placeholder=" "
											name="email"
											value={register?.email}
											onChange={handleInput}
										/>
										<label
											htmlFor="email2"
											className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
										>
											Your email
										</label>
										<small className="text-red-500">
											{register?.errors.email}
										</small>
									</div>
									<div className="relative">
										<input
											id="password"
											type="password"
											className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
											placeholder=" "
											name="password"
											value={register?.password}
											onChange={handleInput}
										/>
										<label
											htmlFor="password"
											className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
										>
											Your password
										</label>
										<small className="text-red-500">
											{register?.errors.password}
										</small>
									</div>
									<div className="relative">
										<input
											id="password_confirmation"
											type="password"
											className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-darkRed peer"
											placeholder=" "
											name="password_confirmation"
											value={register?.password_confirmation}
											onChange={handleInput}
										/>
										<label
											htmlFor="password_confirmation"
											className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-darkRed  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
										>
											Confirm your password
										</label>
									</div>

									<Button
										bgColor="bg-darkYellow"
										hoverColor="hover:bg-lemonSh"
										text="SIGN UP"
										type="submit"
										padding="px-8"
										// onClick={props.changeStep}
									/>
									<div className="text-center text-sm pb-5">
										Already have an Account?{" "}
										<Link
											to="/login"
											className="inline-block text-sm text-darkRed align-baseline hover:text-darkRed"
										>
											Login!
										</Link>
									</div>
								</form>
								<div className="flex my-2 text-sm font-semibold items-center text-myBlack">
									<div className="flex-grow border-t h-px mr-3"></div>
									OR
									<div className="flex-grow border-t h-px ml-3"></div>
								</div>

								<SocialLogin />
							</div>
							<div>
								<img
									src={registerpic}
									className="mx-auto hidden lg:block w-full"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
