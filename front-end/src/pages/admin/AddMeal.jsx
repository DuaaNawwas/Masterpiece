import React from "react";
import AddIngredientsForm from "../../components/admin/meals/AddIngredientsForm";
import AddMealForm from "../../components/admin/meals/AddMealForm";
import AddNutrientsForm from "../../components/admin/meals/AddNutrientsForm";

export default function AddMeal() {
	return (
		<div className="py-10 mx-auto flex flex-col w-7/12">
			<div>
				<div className="mt-5 md:col-span-2 md:mt-0">
					<div className="shadow sm:overflow-hidden sm:rounded-md">
						<AddMealForm />
					</div>
				</div>
			</div>

			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200" />
				</div>
			</div>

			<div className="mt-10 sm:mt-0">
				<div className="mt-5 md:col-span-2 md:mt-0">
					<div className="overflow-hidden shadow sm:rounded-md">
						<AddIngredientsForm />
					</div>
				</div>
			</div>

			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200" />
				</div>
			</div>

			<div className="mt-10 sm:mt-0">
				<div className="mt-5 md:col-span-2 md:mt-0">
					<form action="#" method="POST">
						<div className="overflow-hidden shadow sm:rounded-md">
							<div className="space-y-6 bg-white px-4 py-5 sm:p-6">
								<fieldset>
									<legend className="sr-only">By Email</legend>
									<div
										className="text-base font-medium text-gray-900"
										aria-hidden="true"
									>
										Nutrients
									</div>
									<AddNutrientsForm />
								</fieldset>
							</div>
							<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
								<button
									type="submit"
									className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
