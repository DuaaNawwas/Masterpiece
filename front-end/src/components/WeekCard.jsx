import { Avatar } from "flowbite-react";
import React from "react";
import Button from "./Button";

export default function WeekCard() {
	return (
		<div class="mt-8 lg:mt-20 relative block rounded-xl border border-gray-100 py-4 px-6 shadow-xl bg-main w-full">
			{/* <div class="mt-1 text-myBlack sm:pr-8"> */}
			<div className="flex justify-between">
				<h3 class="mt-1 text-2xl font-semibold uppercase underline">Week 1</h3>
				<Button
					bgColor="bg-darkYellow"
					hoverColor="hover:bg-lemonSh"
					text="EDIT"
				/>
			</div>
			<p class="my-4 text-xl ">Your Meals</p>
			<div className="flex flex-wrap gap-3 justify-center">
				<Avatar
					img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					rounded={true}
					size="lg"
				/>
				<Avatar
					img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					rounded={true}
					size="lg"
				/>
				<Avatar
					img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					rounded={true}
					size="lg"
				/>
				<Avatar
					img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					rounded={true}
					size="lg"
				/>
			</div>
		</div>
	);
}
