import React from "react";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Button from "../Button";

export default function PlanSummary(props) {
	const { pricing } = useContext(DataContext);

	const total_servings = props.data.meals_per_week * props.data.ppl_num;
	const price_per_serving = pricing?.find(
		(price) => price.servings == total_servings
	);

	return (
		<div className="mt-12 md:mt-20 relative block w-full rounded-xl border border-gray-100 py-4 px-6 shadow-xl bg-main">
			<div className="mt-1 text-myBlack sm:pr-8">
				<h3 className="mt-1 text-lg md:text-xl font-semibold uppercase">
					Plan summary
				</h3>

				<p className="mt-2 text-sm block text-gray-500">
					You ordered {props.data.meals_per_week} meals per week for{" "}
					{props.data.ppl_num} people.
				</p>
				<p className="mt-2 text-sm block ">
					Price per meal: {price_per_serving?.price_per_serving} Jd
				</p>
				<p className="mt-2 text-sm block ">Shipping fees:</p>
				<p className="mt-2 text-sm block ">
					Total price: {price_per_serving?.total_price} Jd
				</p>
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
