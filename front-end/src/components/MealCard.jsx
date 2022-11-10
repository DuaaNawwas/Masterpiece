import React from "react";
import Button from "./Button";

export default function MealCard(props) {
	return (
		<div class="grid justify-center place-items-center text-gray-900">
			<div className=" sm:w-[500px] sm:h-[500px] md:w-[300px] lg:[h-300px] xl:w-[400px] xl:h-[400px]">
				<img
					src={props.img}
					alt=" random imgee"
					class="w-full h-72 object-cover object-center rounded-lg shadow-md"
				/>

				<div class="relative px-4 -mt-16  ">
					<div class="bg-white p-6 rounded-lg shadow-lg">
						{/* <div class="flex items-baseline">
							<span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
								New
							</span>
							<div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
								2 baths &bull; 3 rooms
							</div>
						</div> */}

						<h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
							{props.title}
						</h4>

						<div class="mt-1 truncate whitespace-normal">{props.desc}</div>
						<Button
							bgColor="bg-rusty"
							hoverColor="hover:bg-rustySh"
							text="MORE"
							style="float-right"
							type="button"
							onClick={props.showModalRecipe}
						/>
						{/* <div class="mt-4">
							<span class="text-teal-600 text-md font-semibold">
								4/5 ratings{" "}
							</span>
							<span class="text-sm text-gray-600">(based on 234 ratings)</span>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
