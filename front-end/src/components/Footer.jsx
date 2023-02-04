import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
// // Importing aos
// import AOS from "aos";
// import "aos/dist/aos.css";
export default function Footer() {
	// // Initialize animation library
	// useEffect(() => {
	// 	AOS.init();
	// }, []);
	return (
		<div
			// data-aos="fade-up"
			// data-aos-duration="3000"
			className="relative mt-16 bg-darkGreen text-main "
		>
			<svg
				className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-darkGreen"
				preserveAspectRatio="none"
				viewBox="0 0 1440 54"
			>
				<path
					fill="currentColor"
					d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
				/>
			</svg>
			<div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
				<div
					// data-aos="zoom-in-down"
					// data-aos-duration="1000"
					className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6"
				>
					<div className="md:max-w-md lg:col-span-2">
						<Link
							to="/"
							aria-label="Go home"
							title="Company"
							className="inline-flex items-center"
						>
							<img src={logo} alt="" className="w-24 rounded-md ml-32" />
						</Link>
						<div className="mt-4 lg:max-w-sm">
							<p className="text-sm text-deep-purple-50">
								Easy meals subscription service makes it easy to enjoy healthy,
								home-cooked meals every day.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-5 md:gap-1 row-gap-8 lg:col-span-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
						<div>
							<p className="tracking-wider font-light">QUICK LINKS</p>
							<ul className="mt-2 space-y-2">
								<li>
									<Link
										to="/"
										className="transition hover:drop-shadow-lg duration-300"
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to="menu"
										className="transition hover:drop-shadow-lg duration-300"
									>
										Meals
									</Link>
								</li>
								<li>
									<Link
										to="subscribe"
										className="transition hover:drop-shadow-lg duration-300"
									>
										Plans
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="tracking-wider font-light uppercase">Our Company</p>
							<ul className="mt-2 space-y-2">
								<li>
									<Link
										to="/about"
										className="transition-colors duration-300 hover:drop-shadow-lg"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="transition-colors duration-300 hover:drop-shadow-lg"
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="tracking-wide font-thin uppercase">Work with us</p>
							<ul className="mt-2 space-y-2">
								<li>
									<Link
										to="/apply"
										className="transition-colors duration-300 hover:drop-shadow-lg"
									>
										Apply
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
					<p className="text-sm text-gray-100">
						© Copyright 2022 Easy Meals. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
