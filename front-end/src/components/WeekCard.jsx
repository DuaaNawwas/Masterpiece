import { Avatar } from "flowbite-react";
import React from "react";
import Button from "./Button";

export default function WeekCard() {
	return (
		<div class="mt-8 lg:mt-20 relative block rounded-xl border border-gray-100 py-4 px-6 shadow-xl bg-main w-full">
			{/* <div class="mt-1 text-myBlack sm:pr-8"> */}
			<div className="flex justify-between mb-4">
				<h3 class="mt-1 text-md font-semibold capitalize">
					your meals for{" "}
					<span className="text-xs text-gray-600">9-11-2022 to 15-11-2022</span>
				</h3>
				<Button bgColor="bg-darkGreen" text="EDIT" />
			</div>
			<div className="flex flex-wrap gap-3 justify-start pt-5">
				<div class="relative group">
					<img
						class="w-20 h-20 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>

					<button class="hidden bg-red-600 text-white top-0 left-14 absolute  text-sm font-semibold group-hover:inline-flex items-center p-1.5 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>

						<span class="sr-only">Icon description</span>
					</button>
				</div>
				<div class="relative group">
					<img
						class="w-20 h-20 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>

					<button class="hidden bg-red-600 text-white top-0 left-14 absolute  text-sm font-semibold group-hover:inline-flex items-center p-1.5 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>

						<span class="sr-only">Icon description</span>
					</button>
				</div>
				<div class="relative group">
					<img
						class="w-20 h-20 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>

					<button class="hidden bg-red-600 text-white top-0 left-14 absolute  text-sm font-semibold group-hover:inline-flex items-center p-1.5 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>

						<span class="sr-only">Icon description</span>
					</button>
				</div>
				<div class="relative group">
					<img
						class="w-20 h-20 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>

					<button class="hidden bg-red-600 text-white top-0 left-14 absolute  text-sm font-semibold group-hover:inline-flex items-center p-1.5 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>

						<span class="sr-only">Icon description</span>
					</button>
				</div>
				<div class="relative group">
					<img
						class="w-20 h-20 rounded-full"
						src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
						alt=""
					/>

					<button class="hidden bg-red-600 text-white top-0 left-14 absolute  text-sm font-semibold group-hover:inline-flex items-center p-1.5 rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-3 h-3"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>

						<span class="sr-only">Icon description</span>
					</button>
				</div>

				<button class="p-1 w-20 h-20 rounded-full ring-2 ring-gray-300 flex justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-10 h-10"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
