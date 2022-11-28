import axios from "axios";
import { Badge, Button, Modal } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import modalimg from "../../images/modalimg.png";
import LoadingModal from "./LoadingModal";
import { HiClock } from "react-icons/hi";

export default function ModalRecipe(props) {
	const [meal, setMeal] = useState();
	const [loading, setLoading] = useState(true);

	// Get meal data from database
	useEffect(() => {
		setLoading(true);
		axios.get(`/api/meals/${props.id}`).then((res) => {
			console.log(res);
			setMeal(res.data.meal);
			setLoading(false);
		});
	}, [props.id]);
	return (
		<>
			<React.Fragment>
				{/* <Button onClick={showModalRecipe}>Toggle modal</Button> */}
				<Modal
					show={props.modalRecipe}
					size="3xl"
					onClose={() => {
						setMeal([]);
						props.hideModalRecipe();
					}}
				>
					{/* <Modal.Header>
				</Modal.Header> */}
					<Modal.Body className="relative overflow-y-scroll h-[600px] p-0 scrollbar ">
						{loading ? (
							<LoadingModal />
						) : (
							<>
								<button
									type="button"
									className="text-white bg-myBlack hover:bg-rustySh focus:ring-4 focus:outline-none focus:ring-rusty font-medium rounded-full text-sm p-1 text-center inline-flex items-center absolute z-50 right-7 top-7"
									onClick={() => {
										setMeal([]);
										props.hideModalRecipe();
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>

								<img
									src={meal?.image}
									className="object-cover object-center h-72 w-full"
								/>
								<div className="space-y-1 p-3 flex flex-col items-start">
									<Badge
										color="success"
										size="sm"
										className="rounded-sm py-1"
										icon={HiClock}
									>
										{" "}
										{meal?.prep_time}
									</Badge>
									<h4 className="mt-1 mb-0 pb-0 text-xl font-semibold uppercase leading-tight">
										{meal?.name}
									</h4>
									<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mt-0">
										{meal?.long_desc}
									</p>
								</div>
								<div className="space-y-1 p-3">
									<h4 className="mt-5 text-lg font-semibold uppercase leading-tight">
										Ingredients
									</h4>
									{/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"> */}
									<div className="grid z-10 grid-cols-2 w-auto text-sm dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
										<div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
											<ul
												className="space-y-4"
												aria-labelledby="mega-menu-icons-dropdown-button"
											>
												<li>
													<div className="flex items-center text-gray-500 dark:text-gray-400">
														ingredient
													</div>
												</li>
												<li>
													<div className="flex items-center text-gray-500 dark:text-gray-400">
														ingredient
													</div>
												</li>
												<li>
													<div className="flex items-center text-gray-500 dark:text-gray-400">
														ingredient
													</div>
												</li>
												<li>
													<div className="flex items-center text-gray-500 dark:text-gray-400">
														ingredient
													</div>
												</li>
											</ul>
										</div>
										<div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
											<ul className="space-y-4">
												<li>
													<div className="flex items-center">
														<input
															checked
															id="checked-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="checked-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
												<li>
													<div className="flex items-center">
														<input
															checked
															id="checked-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="checked-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
												<li>
													<div className="flex items-center">
														<input
															checked
															id="checked-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="checked-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
												<li>
													<div className="flex items-center">
														<input
															checked
															id="checked-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="checked-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
											</ul>
										</div>
										<div className="p-4 text-gray-900 dark:text-white">
											<ul className="space-y-4">
												<li>
													<div className="flex items-center mb-4">
														<input
															id="default-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="default-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
												<li>
													<div className="flex items-center mb-4">
														<input
															id="default-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="default-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
												<li>
													<div className="flex items-center mb-4">
														<input
															id="default-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="default-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
												<li>
													<div className="flex items-center mb-4">
														<input
															id="default-checkbox"
															type="checkbox"
															value=""
															className="w-4 h-4 text-rusty bg-gray-100 rounded border-gray-300 focus:ring-rusty focus:ring-2 "
														/>
														<label
															htmlFor="default-checkbox"
															className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
														>
															ingredient
														</label>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="space-y-1 p-3">
									<h4 className="mt-5 text-lg font-semibold uppercase leading-tight">
										Nutrition Values
									</h4>

									<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
										<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
											<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
												<tr>
													<th scope="col" className="py-3 px-6">
														Nutrition
													</th>
													<th scope="col" className="py-3 px-6">
														Per Serving
													</th>
												</tr>
											</thead>
											<tbody>
												<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Calories
													</th>
													<td className="py-1 px-6">100 Kcal</td>
												</tr>
												<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Fat
													</th>
													<td className="py-1 px-6">37g</td>
												</tr>
												<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Saturated Fat
													</th>
													<td className="py-1 px-6">100 Kcal</td>
												</tr>
												<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Carbohydrates
													</th>
													<td className="py-1 px-6">37g</td>
												</tr>
												<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Sugar
													</th>
													<td className="py-1 px-6">100 Kcal</td>
												</tr>
												<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Dietary Fiber
													</th>
													<td className="py-1 px-6">37g</td>
												</tr>
												<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Protein
													</th>
													<td className="py-1 px-6">100 Kcal</td>
												</tr>
												<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Cholesterol
													</th>
													<td className="py-1 px-6">37g</td>
												</tr>
												<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
													<th
														scope="row"
														className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
													>
														Sodium
													</th>
													<td className="py-1 px-6">100 Kcal</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</>
						)}
					</Modal.Body>
					<Modal.Footer className="justify-between">
						{/* <Button onClick={onClick}>I accept</Button> */}
						<Button color="gray" onClick={props.hideModalRecipe}>
							Cancel
						</Button>
						<div className="flex w-56 gap-2">
							{/* <div className="w-1/3"> */}
							<select
								id="countries"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							>
								<option value="1">Week 1</option>
								<option value="2">Week 2</option>
								<option value="3">Week 3</option>
								<option value="4">Week 4</option>
							</select>
							{/* </div> */}
							<button
								type="button"
								className="text-white bg-rusty hover:bg-rustySh focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4.5v15m7.5-7.5h-15"
									/>
								</svg>

								<span className="sr-only">Icon description</span>
							</button>
						</div>
					</Modal.Footer>
				</Modal>
			</React.Fragment>

			{/* <div
				id="extralarge-modal"
				tabindex="-1"
				className={`${
					props.modalRecipe ? "block" : "hidden"
				} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
			>
				<div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="flex justify-between items-center p-5 rounded-t dark:border-gray-600">
							<h3 className="text-xl font-medium text-gray-900 dark:text-white">
								Extra Large modal
							</h3>
							<button
								type="button"
								className="text-white bg-myBlack hover:bg-rustySh focus:ring-4 focus:outline-none focus:ring-rusty font-medium rounded-full text-sm p-1 text-center inline-flex items-center  absolute right-7 top-7"
								onClick={props.hideModalRecipe}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
							<img src={modalimg} />
						</div>

						<div className="p-6 space-y-6">
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								With less than a month to go before the European Union enacts
								new consumer privacy laws for its citizens, companies around the
								world are updating their terms of service agreements to comply.
							</p>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								The European Union’s General Data Protection Regulation
								(G.D.P.R.) goes into effect on May 25 and is meant to ensure a
								common set of data rights in the European Union. It requires
								organizations to notify users as soon as possible of high-risk
								data breaches that could personally affect them.
							</p>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								With less than a month to go before the European Union enacts
								new consumer privacy laws for its citizens, companies around the
								world are updating their terms of service agreements to comply.
							</p>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								The European Union’s General Data Protection Regulation
								(G.D.P.R.) goes into effect on May 25 and is meant to ensure a
								common set of data rights in the European Union. It requires
								organizations to notify users as soon as possible of high-risk
								data breaches that could personally affect them.
							</p>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								With less than a month to go before the European Union enacts
								new consumer privacy laws for its citizens, companies around the
								world are updating their terms of service agreements to comply.
							</p>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								The European Union’s General Data Protection Regulation
								(G.D.P.R.) goes into effect on May 25 and is meant to ensure a
								common set of data rights in the European Union. It requires
								organizations to notify users as soon as possible of high-risk
								data breaches that could personally affect them.
							</p>
						</div>

						<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
							<button
								data-modal-toggle="extralarge-modal"
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								I accept
							</button>
							<button
								onClick={props.hideModalRecipe}
								type="button"
								className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
							>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div> */}
		</>
	);
}
