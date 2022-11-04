import React from "react";
import Button from "./Button";

export default function PlanSummary() {
	return (
		<div class="mt-20 relative block rounded-xl border border-gray-100 py-4 px-6 shadow-xl bg-main">
			<div class="mt-1 text-myBlack sm:pr-8">
				<h3 class="mt-1 text-xl font-semibold uppercase">Plan summary</h3>

				<p class="mt-2 hidden text-sm sm:block text-gray-500">
					You ordered 4 meals per week for 2 people.
				</p>
				<p class="mt-2 hidden text-sm sm:block ">Price per meal:</p>
				<p class="mt-2 hidden text-sm sm:block ">Shipping fees:</p>
				<p class="mt-2 hidden text-sm sm:block ">Total price:</p>
			</div>
			<Button
				bgColor="bg-darkYellow"
				hoverColor="hover:bg-lemonSh"
				text="NEXT"
				style="float-right"
				padding="px-8"
			/>
		</div>
	);
}
