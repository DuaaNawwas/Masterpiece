import React from "react";
import partner from "../images/partner.png";

export default function Partners() {
	return (
		<div className="flex flex-col items-center">
			<p className="text-darkRed text-4xl drop-shadow-md">Our Partners</p>
			<div className="flex flex-wrap py-20 justify-center items-center gap-32">
				<img src={partner} alt="" className="w-40" />
				<img src={partner} alt="" className="w-40" />
				<img src={partner} alt="" className="w-40" />
			</div>
		</div>
	);
}
