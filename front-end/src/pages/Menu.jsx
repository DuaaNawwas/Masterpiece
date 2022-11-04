import { Tabs } from "flowbite-react";
import React from "react";
import MealCard from "../components/MealCard";
import meal1 from "../images/meal1.png";
import meal2 from "../images/meal2.png";
import meal3 from "../images/meal3.png";

export default function Menu() {
	return (
		<>
			{/* active = {true} to make a category active when visited from home */}
			<h2 className="text-center mt-20 text-darkRed text-4xl font-bold">
				Browse Our Menus
			</h2>
			<Tabs.Group
				aria-label="Tabs with underline"
				style="underline"
				className="justify-center pt-5"
			>
				<Tabs.Item title="Top Recommendations for You">
					Profile content
				</Tabs.Item>
				<Tabs.Item active={true} title="Chicken">
					{/* remember to limit description length */}
					<div className="p-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center content-center">
						<MealCard
							title="Chicken Flautas"
							desc="Made with shredded chicken wrapped in flour tortillas."
							img={meal1}
						/>
						<MealCard
							title="Creamy Tuscan Chicken"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal2}
						/>
						<MealCard
							title="Chicken Fried Rice"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal3}
						/>
						<MealCard
							title="Chicken Flautas"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal1}
						/>
						<MealCard
							title="Chicken Flautas"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal1}
						/>
						<MealCard
							title="Creamy Tuscan Chicken"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal2}
						/>
						<MealCard
							title="Chicken Fried Rice"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal3}
						/>
						<MealCard
							title="Chicken Flautas"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal1}
						/>
						<MealCard
							title="Chicken Flautas"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal1}
						/>
						<MealCard
							title="Creamy Tuscan Chicken"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal2}
						/>
						<MealCard
							title="Chicken Fried Rice"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal3}
						/>
						<MealCard
							title="Chicken Flautas"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal1}
						/>
					</div>
				</Tabs.Item>
				<Tabs.Item title="Meat">Settings content</Tabs.Item>
				<Tabs.Item title="Pescatarian">Contacts content</Tabs.Item>
			</Tabs.Group>
		</>
	);
}
