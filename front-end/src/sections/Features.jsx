import React from "react";
import FeatureCard from "../components/FeatureCard";
import delivery from "../images/delivery.png";
import saveTime from "../images/save-time.png";
import cookBook from "../images/cook-book.png";
import Button from "../components/Button";

export default function Features() {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="flex flex-wrap gap-16 py-20 justify-center">
					<FeatureCard
						img={delivery}
						text="All the groceries you need delivered to your doorsteps"
					/>
					<FeatureCard
						img={saveTime}
						text="Save your time and money with our meal kits"
					/>
					<FeatureCard
						img={cookBook}
						text="Easy to follow recipes with every meal kit"
					/>
				</div>
				<Button
					bgColor="bg-rusty"
					hoverColor="hover:bg-rustySh"
					text="JOIN NOW"
					padding="px-10"
				/>
			</div>
			<div className="text-myBlack border-t-4 h-2 w-1/2 mx-auto my-10"></div>
			{/* <hr className="text-myBlack h-2" /> */}
		</>
	);
}
