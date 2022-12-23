import React from "react";

export default function AddNutrientsForm() {
	return (
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
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="calories"
							id="calories"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						Kcal
					</td>
				</tr>
				<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Fat
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="fat"
							id="fat"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						g
					</td>
				</tr>
				<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Saturated Fat
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="saturated_fat"
							id="saturated_fat"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						g
					</td>
				</tr>
				<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Carbohydrates
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="carbs"
							id="carbs"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						g
					</td>
				</tr>
				<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Sugar
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="sugar"
							id="sugar"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						g
					</td>
				</tr>
				<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Dietary Fiber
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="fiber"
							id="fiber"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						g
					</td>
				</tr>
				<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Protein
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="protein"
							id="protein"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						g
					</td>
				</tr>
				<tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Cholesterol
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="cholesterol"
							id="cholesterol"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						mg
					</td>
				</tr>
				<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
					<th
						scope="row"
						className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						Sodium
					</th>
					<td className="py-1 px-6 flex gap-2 items-center">
						<input
							type="text"
							name="sodium"
							id="sodium"
							className=" w-1/2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						mg
					</td>
				</tr>
			</tbody>
		</table>
	);
}
