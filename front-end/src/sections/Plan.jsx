import React from "react";
import { Label, Textarea, TextInput } from "flowbite-react";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import chicken from "../images/chicken.png";
import pescatarian from "../images/pescatarian.png";
import meat from "../images/meat.png";
import PlanSummary from "../components/PlanSummary";

export default function Plan() {
	const numOfPeople = [2, 4, 6];
	const mealsPerWeek = [1, 2, 3, 4, 5, 6];
	return (
		<div className="relative block rounded-xl bg-white border border-gray-100 p-5 shadow-xl w-9/12 mx-auto mt-20 mb-44">
			<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-1/2 -translate-y-1/2 bg-gray-300"></div>
			<section>
				<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center pt-8">
					Choose The Right Plan For You
				</h2>
				<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  justify-items-center">
						<div>
							<p className="pb-5 text-3xl font-semibold text-darkRed text-center justify-self-center mx-auto capitalize">
								Select your favorite categories
							</p>
							<ul className="grid gap-6 w-full md:grid-cols-2">
								<li>
									<input
										type="checkbox"
										id="chicken-option"
										value=""
										className="hidden peer"
										required=""
									/>
									{/* <label> */}
									<CategoryCard
										img={chicken}
										name="Chicken Recipes"
										textstyle="text-lg"
										for="chicken-option"
									/>
									{/* </label> */}
								</li>
								<li>
									<input
										type="checkbox"
										id="pescatarian-option"
										value=""
										className="hidden peer"
									/>

									<CategoryCard
										img={pescatarian}
										name="Pescatarian Recipes"
										textstyle="text-lg"
										for="pescatarian-option"
									/>
								</li>
								<li>
									<input
										type="checkbox"
										id="meat-option"
										value=""
										className="hidden peer"
									/>

									<CategoryCard
										img={meat}
										name="Meat Recipes"
										textstyle="text-lg"
										for="meat-option"
									/>
								</li>
								<li>
									<input
										type="checkbox"
										id="sth-option"
										value=""
										className="hidden peer"
									/>

									<CategoryCard
										img={meat}
										name="Meat Recipes"
										textstyle="text-lg"
										for="sth-option"
									/>
								</li>
								<li>
									<input
										type="checkbox"
										id="test-option"
										value=""
										className="hidden peer"
									/>

									<CategoryCard
										img={meat}
										name="Meat Recipes"
										textstyle="text-lg"
										for="test-option"
									/>
								</li>
								<li>
									<input
										type="checkbox"
										id="my-option"
										value=""
										className="hidden peer"
									/>

									<CategoryCard
										img={meat}
										name="Meat Recipes"
										textstyle="text-lg"
										for="my-option"
									/>
								</li>
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
								<ul className="grid gap-4 w-1/2 md:grid-cols-3 mx-auto">
									{numOfPeople.map((num) => {
										return (
											<li>
												<input
													type="radio"
													id={`num${num}`}
													name="numberOfPeople"
													value={num}
													className="hidden peer"
													required=""
												/>
												<label
													htmlFor={`num${num}`}
													className="inline-flex justify-between items-center text-center p-3 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-darkYellow peer-checked:text-white peer-checked:bg-darkYellow hover:text-gray-600 hover:bg-gray-100"
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
								<ul className="grid gap-4 w-full md:grid-cols-6 mx-auto">
									{mealsPerWeek.map((num) => {
										return (
											<li>
												<input
													type="radio"
													id={`meal${num}`}
													name="numberOfPeople"
													value={num}
													className="hidden peer"
													required=""
													onChange={(e) => console.log(e.target.value)}
												/>
												<label
													htmlFor={`meal${num}`}
													className="inline-flex justify-between items-center text-center p-3 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-darkYellow peer-checked:text-white peer-checked:bg-darkYellow hover:text-gray-600 hover:bg-gray-100"
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

							<PlanSummary />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
