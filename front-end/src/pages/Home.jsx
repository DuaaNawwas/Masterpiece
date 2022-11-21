import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import OurMenus from "../components/home/OurMenus";
import Partners from "../components/home/Partners";

export default function Home() {
	return (
		<>
			<Hero />
			{/* <Features /> */}
			<OurMenus />
			<Partners />
		</>
	);
}
