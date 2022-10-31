import React from "react";

export default function CategoryCard(props) {
	return (
		<div class="bg-white flex flex-col max-w-xs mx-auto overflow-hidden rounded-3xl shadow-xl">
			<img src={props.img} alt="" />
			<div class="px-4 py-6">
				<h2 class="text-darkRed text-2xl">{props.name}</h2>
			</div>
		</div>
	);
}
