import React from "react";
import Button from "../Button";

export default function PlanSummary(props) {
	return (
		<div className="mt-12 md:mt-20 relative block w-full rounded-xl border border-gray-100 py-4 px-6 shadow-xl bg-main">
			<div className="mt-1 text-myBlack sm:pr-8">
				<h3 className="mt-1 text-lg md:text-xl font-semibold uppercase">
					Plan summary
				</h3>

				<p className="mt-2 text-sm block text-gray-500">
					You ordered 4 meals per week for 2 people.
				</p>
				<p className="mt-2 text-sm block ">Price per meal:</p>
				<p className="mt-2 text-sm block ">Shipping fees:</p>
				<p className="mt-2 text-sm block ">Total price:</p>
			</div>
			<Button
				bgColor="bg-darkYellow"
				hoverColor="hover:bg-lemonSh"
				text="NEXT"
				style="float-right"
				padding="px-8"
				onClick={props.changeStep}
			/>
		</div>
	);
}
