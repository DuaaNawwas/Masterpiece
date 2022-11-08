import React from "react";
import Button from "./Button";

export default function ProfileCard() {
	return (
		<div class="w-full max-w-md mx-auto px-8 py-4 mt-20 bg-white rounded-lg shadow-lg dark:bg-gray-800">
			<div class="flex justify-center -mt-16 md:justify-center">
				<img
					class="object-cover w-20 h-20 border-2 border-darkRed rounded-full "
					alt="Testimonial avatar"
					src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
				/>
			</div>

			<h2 class="mt-2 text-2xl font-semibold text-gray-800  md:mt-0 md:text-3xl">
				John Doe
			</h2>

			<p class="mt-2 text-gray-600 dark:text-gray-200">john@mail.com</p>
			<p class="mt-2 text-gray-600 dark:text-gray-200">Payment Info:</p>

			<div class="flex justify-end mt-4">
				{/* <a
					href="#"
					class="text-xl font-medium text-darkRed "
					tabindex="0"
					role="link"
				>
					Edit
				</a> */}
				<Button bgColor="bg-darkGreen" text="EDIT PROFILE" />
			</div>
		</div>
	);
}
