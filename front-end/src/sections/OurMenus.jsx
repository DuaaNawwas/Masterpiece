import React from "react";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import chicken from "../images/chicken.png";
import meat from "../images/meat.png";
import pescatarian from "../images/pescatarian.png";

export default function OurMenus() {
	return (
		<>
			<div className="flex flex-col items-center">
				<p className="text-darkRed text-4xl drop-shadow-md">Our Menus</p>
				<div className="flex flex-wrap py-20 justify-center items-center gap-16">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="darkRed"
						className="w-8 h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>

					<CategoryCard img={chicken} name="Chicken Recipes" />
					<CategoryCard img={pescatarian} name="Pescatarian Recipes" />
					<CategoryCard img={meat} name="Meat Recipes" />

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="darkRed"
						className="w-8 h-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<Button
					bgColor="bg-rusty"
					hoverColor="hover:bg-rustySh"
					text="BROWSE MENU"
					padding="px-10"
				/>
			</div>
		</>
	);
}
