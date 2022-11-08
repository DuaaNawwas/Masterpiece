import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import logo from "../images/logo.svg";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pages = ["Home", "Menu", "Plans", "About", "Contact"];

	return (
		<div className="sticky top-0 z-50 bg-main px-4 py-3 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 uppercase shadow-lg">
			<div className="z-50 relative flex items-center justify-between">
				<div className="flex items-center gap-6">
					<a
						href="/"
						aria-label="Company"
						title="Company"
						className="inline-flex items-center mr-8"
					>
						<img src={logo} alt="" className="w-16" />
					</a>
					<ul className=" items-center hidden space-x-8 lg:flex text-darkRed">
						{pages.map((page) => (
							<li key={page}>
								<NavLink
									to={page == "Plans" ? "/subscribe/1" : "/" + page}
									aria-label={page}
									title={page}
									className="font-medium tracking-wide transition-colors duration-200 hover:drop-shadow-lg"
								>
									{page}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<ul className=" items-center hidden space-x-8 lg:flex">
					<li>
						<a
							href="/"
							aria-label="Sign in"
							title="Sign in"
							className="font-medium text-darkRed border-2 border-darkRed bg-main rounded py-2 px-5  transition duration-500  hover:bg-mainSh hover:drop-shadow-lg tracking-wide "
						>
							Sign in
						</a>
					</li>
					<li>
						{/* <a
							href="/"
							className="inline-flex items-center justify-center py-2 px-5 text-main bg-darkRed font-medium  rounded shadow-md hover:bg-secRed hover:drop-shadow-lg focus:shadow-outline focus:outline-none tracking-wide transition duration-200"
							aria-label="Sign up"
							title="Sign up"
						>
							Sign up
						</a> */}
						<Button
							textColor="text-main"
							bgColor="bg-darkRed"
							hoverColor="hover:bg-secRed"
							text="SIGN UP"
						/>
					</li>
				</ul>

				<div className="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							></path>
							<path
								fill="currentColor"
								d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
							></path>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							></path>
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full">
							<div className="p-5 bg-white border rounded shadow-sm">
								<div className="flex items-center justify-between mb-4">
									<div>
										<a
											href="/"
											aria-label="Company"
											title="Company"
											className="inline-flex items-center"
										>
											<img src={logo} alt="" className="w-16" />
										</a>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												></path>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul className="space-y-4">
										{pages.map((page) => (
											<li key={page}>
												<a
													href="/"
													aria-label={page}
													title={page}
													className="font-medium tracking-wide transition-colors duration-200 hover:drop-shadow-lg"
												>
													{page}
												</a>
											</li>
										))}
										<ul className="flex align-middle gap-2">
											<li>
												<a
													href="/"
													aria-label="Sign in"
													title="Sign in"
													className="inline-flex items-center justify-center  font-medium text-darkRed border-2 border-darkRed bg-main rounded py-1 px-5  transition duration-500  hover:bg-darkRed hover:text-main hover:drop-shadow-lg tracking-wide "
												>
													Sign in
												</a>
											</li>
										</ul>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
