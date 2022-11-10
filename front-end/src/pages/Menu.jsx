import { Button, Modal, Tabs } from "flowbite-react";
import React, { useEffect, useState } from "react";
// import Button from "../components/Button";
import MealCard from "../components/MealCard";
import ModalRecipe from "../components/ModalRecipe";
import ModalTutorial from "../components/ModalTutorial";
import meal1 from "../images/meal1.png";
import meal2 from "../images/meal2.png";
import meal3 from "../images/meal3.png";
import modalimg from "../images/modalimg.png";

export default function Menu() {
	const [modalRecipe, setModalRecipe] = useState({ show: false, id: "" });
	const [modalTutorial, setModalTutorial] = useState(false);

	useEffect(() => {
		setModalTutorial(true);
	}, []);

	const showModalRecipe = (id) => {
		// e.preventDefault();
		setModalRecipe({ show: true, id: id });
	};
	const hideModalRecipe = () => {
		// e.preventDefault();
		setModalRecipe({ show: false });
	};
	const hideModalTutorial = () => {
		// e.preventDefault();
		setModalTutorial(false);
	};
	return (
		<>
			{modalTutorial && (
				<ModalTutorial close={hideModalTutorial} show={modalTutorial} />
			)}

			<ModalRecipe
				modalRecipe={modalRecipe.show}
				hideModalRecipe={hideModalRecipe}
				id={modalRecipe.id}
			/>
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
							img={modalimg}
							showModalRecipe={() => showModalRecipe(1)}
						/>
						<MealCard
							title="Creamy Tuscan Chicken"
							desc="Made with shredded chicken wrapped in flour tortillas"
							img={meal2}
							showModalRecipe={() => showModalRecipe(2)}
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
			{/* <button
				class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				data-modal-toggle="defaultModal"
			>
				Toggle modal
			</button> */}
		</>
	);
}
