import React from "react";
import Button from "../components/Button";
import CreditCard from "../components/CreditCard";

export default function Payment() {
	const handleChange = (e) => {
		const { maxLength, value, name } = e.target;
		const [fieldName, fieldIndex] = name.split("-");

		let fieldIntIndex = parseInt(fieldIndex, 10);

		// Check if no of char in field == maxlength
		if (value.length >= maxLength) {
			// It should not be last input field
			if (fieldIntIndex < 4) {
				// Get the next input field using it's name
				const nextfield = document.querySelector(
					`input[name=${fieldName}-${fieldIntIndex + 1}]`
				);

				// If found, focus the next field
				if (nextfield !== null) {
					nextfield.focus();
				}
			}
		}
	};
	return (
		<div className="relative block rounded-xl bg-white border border-gray-100 pb-5 pt-0 lg:p-5 shadow-xl w-9/12 mx-auto mt-20 mb-44">
			<div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-56 top-2/3 -translate-y-2/3 bg-gray-300"></div>

			<div className="mx-auto max-w-screen-xl px-4 pb-20 pt-0 lg:pt-8  sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 justify-items-center items-center">
					<div class="mt-8 lg:mt-20 relative block rounded-xl border border-gray-100 py-4 px-6 shadow-xl bg-main w-full">
						<div class="mt-1 text-myBlack sm:pr-8">
							<h3 class="mt-1 text-2xl font-semibold uppercase underline">
								Payment Details
							</h3>

							<p class="mt-4  text-xl ">Billing Details</p>
							<p class="mt-2  text-lg  ">
								Plan:{" "}
								<span class=" text-lg  text-gray-500">
									4 meals per week for 2 people
								</span>
							</p>
							<p class=" text-lg  ">
								Period: <span class=" text-lg  text-gray-500">Monthly</span>
							</p>
							<p class="text-lg  ">
								Total price: <span class=" text-lg text-gray-500">100 JOD</span>
							</p>
							<p class="mt-4  text-xl ">Note:</p>
							<p class="mt-2  text-sm ">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>

					<div className="w-full lg:w-10/12 sm:h-80 lg:h-full flex flex-col">
						<form className="flex flex-col gap-4">
							<h2 className="text-3xl text-darkRed font-bold sm:text-4xl text-center py-5">
								Fill in Your Card Info
							</h2>
							<CreditCard handleChange={handleChange} />
							<Button
								bgColor="bg-darkYellow"
								hoverColor="hover:bg-lemonSh"
								text="PROCEED"
								type="submit"
								style="float-right"
								padding="px-8"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
