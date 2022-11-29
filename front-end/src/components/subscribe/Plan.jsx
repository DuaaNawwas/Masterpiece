import React from "react";
import { Label, Textarea, TextInput } from "flowbite-react";
import Button from "../Button";
import CategoryCard from "../home/CategoryCard";
import chicken from "../../images/chicken.png";
import pescatarian from "../../images/pescatarian.png";
import meat from "../../images/meat.png";
import PlanSummary from "./PlanSummary";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { useState } from "react";
import { useEffect } from "react";

export default function Plan(props) {
	const numOfPeople = [2, 4, 6];
	const mealsPerWeek = [2, 3, 4, 5, 6];

	const {
		categories,
		selectedCateg,
		selectedData,
		setSelectedCateg,
		setSelectedData,
		pendingData,
	} = useContext(DataContext);
	// console.log(selectedCateg);

	// it works when ctrl s, but when refreshed no

	return (
		<div className="relative block rounded-xl bg-white border border-gray-100 p-5 sm:pb-52 lg:pb-5 shadow-xl w-11/12 md:w-9/12 lg:w-11/12 xl:w-9/12 mx-auto mt-20 mb-44">
			<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-1/2 -translate-y-1/2 bg-gray-300"></div>
			<section>
				<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center pt-8">
					Choose The Right Plan For You
				</h2>
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  justify-items-center">
						<div>
							<p className="pb-10 text-3xl font-semibold text-darkRed text-center justify-self-center mx-auto capitalize">
								Select your favorite categories
							</p>
							<ul className="grid gap-6 w-full grid-cols-2">
								{categories?.map((categ, i) => {
									return (
										<li key={i}>
											<input
												type="checkbox"
												id={categ.name}
												value={categ.id}
												className="hidden peer"
												required=""
												defaultChecked={selectedCateg.includes(categ.id)}
												onChange={(e) => {
													if (e.target.checked) {
														setSelectedCateg([
															...selectedCateg,
															parseInt(e.target.value),
														]);
													} else {
														const newArr = selectedCateg.filter(
															(i) => i != e.target.value
														);
														setSelectedCateg(newArr);
													}
												}}
											/>

											<CategoryCard
												img={categ.image}
												name={categ.name}
												textstyle="text-sm md:text-lg"
												for={categ.name}
											/>
										</li>
									);
								})}
							</ul>
						</div>
						<div className="w-9/12 sm:h-80 lg:h-full flex flex-col ">
							<p className="pb-5 text-3xl font-semibold text-darkRed text-center justify-self-center mx-auto capitalize">
								Customize your plan
							</p>
							<form action="">
								<h3 className="my-5 text-xl font-medium text-darkRed text-center">
									Number of people
								</h3>
								<ul className="grid gap-4 w-1/2 grid-cols-3 mx-auto">
									{numOfPeople.map((num, i) => {
										return (
											<li key={i}>
												<input
													type="radio"
													id={`num${num}`}
													name="numberOfPeople"
													value={num}
													className="hidden peer"
													required=""
													onChange={(e) =>
														setSelectedData({
															...selectedData,
															ppl_num: e.target.value,
														})
													}
													defaultChecked={num === 2}
												/>
												<label
													htmlFor={`num${num}`}
													className="inline-flex justify-between items-center text-center p-1 md:p-3 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-darkYellow peer-checked:text-white peer-checked:bg-darkYellow hover:text-gray-600 hover:bg-gray-100"
												>
													<div className="w-full text-lg font-semibold">
														{num}
													</div>
												</label>
											</li>
										);
									})}
								</ul>
							</form>
							<form action="">
								<h3 className="mb-5 mt-10 text-xl font-medium text-darkRed text-center capitalize">
									Meals per week
								</h3>
								<ul className="grid gap-4 w-full grid-cols-5 mx-auto">
									{mealsPerWeek.map((num, i) => {
										return (
											<li key={i}>
												<input
													type="radio"
													id={`meal${num}`}
													name="numberOfPeople"
													value={num}
													className="hidden peer"
													required=""
													// defaultChecked={num == 3}
													onChange={(e) =>
														setSelectedData({
															...selectedData,
															meals_per_week: e.target.value,
														})
													}
													defaultChecked={num === 5}
												/>
												<label
													htmlFor={`meal${num}`}
													className="inline-flex justify-between items-center text-center p-1 md:p-3 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-darkYellow peer-checked:text-white peer-checked:bg-darkYellow hover:text-gray-600 hover:bg-gray-100"
												>
													<div className="w-full text-lg font-semibold">
														{num}
													</div>
												</label>
											</li>
										);
									})}
								</ul>
							</form>

							<PlanSummary
								changeStep={props.changeStep}
								data={selectedData}
								pending={pendingData}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
