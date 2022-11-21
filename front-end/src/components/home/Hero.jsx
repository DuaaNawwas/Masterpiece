import React, { useEffect } from "react";
import Button from "../Button";
import hero from "../../images/hero.png";
import Features from "./Features";

// Importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
	// Initialize animation library
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="relative z-0 bg-hero-bg bg-cover bg-top bg-fixed bg-no-repeat">
				{/* <img
				src={hero}
				className=" z-0 absolute inset-0 object-cover w-full h-full"
				alt=""
			/> */}
				<div className="z-0 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<div className="relative py-28 max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl text-center">
						<h2
							data-aos="fade-right"
							data-aos-duration="1000"
							className="mb-12 mt-16 text-4xl tracking-wide text-darkRed sm:text-6xl sm:leading-none drop-shadow-lg"
						>
							Unlock Your Cooking <br className="hidden md:block" />
							Potential
						</h2>
						{/* <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium.
					</p> */}
						<Button
							textColor="text-main"
							bgColor="bg-darkYellow"
							hoverColor="hover:bg-lemonSh"
							text="DISCOVER PLANS"
							padding="px-12"
							dataaos="fade-left"
							dataaosduration="1000"
						/>

						{/* <a
						href="/"
						aria-label="Scroll down"
						className="flex items-center justify-center w-10 h-10 mx-auto text-darkRed duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
						>
						<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="currentColor"
						>
						<path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
						</svg>
					</a> */}
					</div>
				</div>
			</div>
			<Features />
		</>
	);
}
