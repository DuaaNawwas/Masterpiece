// import { Button, Modal, Tabs } from "flowbite-react";
import React, { useEffect, useState } from "react";
// import Button from "../components/Button";
import MealCard from "../components/menu/MealCard";
import ModalRecipe from "../components/menu/ModalRecipe";
import ModalTutorial from "../components/menu/ModalTutorial";
import meal1 from "../images/meal1.png";
import meal2 from "../images/meal2.png";
import meal3 from "../images/meal3.png";
import modalimg from "../images/modalimg.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Menu() {
	const [modalRecipe, setModalRecipe] = useState({ show: false, id: "" });
	const [modalTutorial, setModalTutorial] = useState(false);

	const { categories } = useContext(DataContext);
	const { stateToken, cookies } = useContext(AuthContext);

	const token = cookies.Token;
	const [forYouMeals, setForYourMeals] = useState();

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

	// Get recommended meals for user
	useEffect(() => {
		console.log("token: " + token);
		axios
			.get("/api/recommendedMeals", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res);
				setForYourMeals(res.data.meals);
			});
	}, []);
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

			<Tabs className="flex flex-col items-center">
				<TabList>
					{token != null && forYouMeals?.length > 0 && <Tab>For You</Tab>}
					{categories?.map((categ) => {
						return <Tab>{categ.name}</Tab>;
					})}
				</TabList>
				{token != null && forYouMeals?.length > 0 && (
					<TabPanel>
						<div className="p-5 md:p-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 justify-center items-center content-center">
							{forYouMeals?.map((meal) => {
								return (
									<MealCard
										title={meal.name}
										desc={meal.short_desc}
										img={meal.image}
										showModalRecipe={() => showModalRecipe(meal.id)}
									/>
								);
							})}
						</div>
					</TabPanel>
				)}
				{categories?.map((categ) => {
					return (
						<>
							<TabPanel>
								<div className="p-5 md:p-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 justify-center items-center content-center">
									{categ?.meals.map((meal) => {
										return (
											<MealCard
												title={meal.name}
												desc={meal.short_desc}
												img={meal.image}
												showModalRecipe={() => showModalRecipe(meal.id)}
											/>
										);
									})}
								</div>
							</TabPanel>
						</>
					);
				})}
			</Tabs>
			{/* <Tabs.Group
				aria-label="Tabs with underline"
				style="underline"
				className="justify-center pt-5"
			>
				<Tabs.Item title="Top Recommendations for You">
					Profile content
				</Tabs.Item>
				<Tabs.Item active={true} title="Chicken"> */}
			{/* remember to limit description length */}
			{/* <div className="p-5 md:p-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 justify-center items-center content-center">
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
					</div> */}
			{/* </Tabs.Item>
				<Tabs.Item title="Meat">Settings content</Tabs.Item>
				<Tabs.Item title="Pescatarian">Contacts content</Tabs.Item>
			</Tabs.Group> */}
			{/* <button
				className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				type="button"
				data-modal-toggle="defaultModal"
			>
				Toggle modal
			</button> */}
		</>
	);
}
