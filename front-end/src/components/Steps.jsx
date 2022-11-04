import React from "react";
import { useParams } from "react-router-dom";

export default function Steps() {
	const { step } = useParams();
	return (
		<div>
			<h2 className="sr-only">Steps</h2>

			<div className="container mx-auto pt-10">
				<ol className="grid grid-cols-1 divide-x divide-myBlack overflow-hidden rounded-lg border border-myBlack text-sm text-gray-500 sm:grid-cols-4 bg-white">
					<li
						className={`flex items-center justify-center p-4 ${
							step == 1 ? "bg-lemonSh" : ""
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="mr-2 h-7 w-7 flex-shrink-0"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
							/>
						</svg>

						<p className="leading-none">
							<strong className="block font-medium"> Choose A Plan </strong>
							<small className="mt-1"> Customize it the way you like. </small>
						</p>
					</li>
					<li
						className={`relative flex items-center justify-center p-4 ${
							step == 2 ? "bg-lemonSh" : ""
						}  `}
					>
						<span
							className={`absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-myBlack ${
								step == 1 ? "bg-lemonSh" : "bg-white"
							}  sm:block`}
						></span>

						<span
							className={`absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-myBlack ${
								step == 2 ? "bg-lemonSh" : "bg-white"
							}  sm:block z-40`}
						></span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="mr-2 h-7 w-7 flex-shrink-0"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
							/>
						</svg>

						<p className="leading-none">
							<strong className="block font-medium"> Register </strong>
							<small className="mt-1"> Set up your account. </small>
						</p>
					</li>
					<li
						className={`relative flex items-center justify-center p-4 ${
							step == 3 ? "bg-lemonSh" : ""
						}`}
					>
						<span
							className={`absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-myBlack ${
								step == 3 ? "bg-lemonSh" : "bg-white"
							}  sm:block`}
						></span>
						<svg
							className="mr-2 h-7 w-7 flex-shrink-0"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
							/>
						</svg>

						<p className="leading-none">
							<strong className="block font-medium"> Details </strong>
							<small className="mt-1"> Some info about you. </small>
						</p>
					</li>

					<li
						className={`flex items-center justify-center p-4 ${
							step == 4 ? "bg-lemonSh" : ""
						}`}
					>
						<svg
							className="mr-2 h-7 w-7 flex-shrink-0"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>

						<p className="leading-none">
							<strong className="block font-medium"> Payment </strong>
							<small className="mt-1"> Show us the money. </small>
						</p>
					</li>
				</ol>
			</div>
		</div>
	);
}