import React from "react";

export default function FeatureCard(props) {
	return (
		<div className="relative block rounded-xl bg-white border border-gray-100 p-8 shadow-xl w-64">
			<div className="mt-2">
				<img src={props.img} alt="" className="w-20 mx-auto" />

				<h3 className="mt-6 capitalize text-xl text-myBlack  text-justify">
					{props.text}
				</h3>

				{/* <p className="mt-2 hidden text-sm sm:block">
					You can manage phone, email and chat conversations all from a single
					mailbox.
				</p> */}
			</div>
		</div>
	);
}
